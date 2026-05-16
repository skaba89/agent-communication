from fastapi import FastAPI, Depends, Header, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import func
from .database import Base, engine, SessionLocal
from .models import MesureEnv, SiteMinier, Alerte
from .schemas import MesureEnvCreate, AlerteOut

Base.metadata.create_all(bind=engine)
app = FastAPI(title="ONIEC-GN API", version="1.1.0")


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def require_role(x_role: str | None = Header(default=None)):
    if x_role not in {"admin", "analyst", "public"}:
        raise HTTPException(status_code=403, detail="Role non autorise")
    return x_role


@app.get("/health")
def health():
    return {"status": "ok", "service": "oniec-api"}


@app.get("/api/kpis")
def kpis(db: Session = Depends(get_db), _: str = Depends(require_role)):
    total_mesures = db.query(func.count(MesureEnv.id)).scalar() or 0
    total_alertes = db.query(func.count(Alerte.id)).scalar() or 0
    total_sites = db.query(func.count(SiteMinier.id)).scalar() or 0
    return {
        "score_ecologique_national": max(0, 100 - total_alertes),
        "total_mesures": total_mesures,
        "total_alertes": total_alertes,
        "sites_miniers_suivis": total_sites,
    }


@app.post("/api/mesures")
def create_mesure(payload: MesureEnvCreate, db: Session = Depends(get_db), _: str = Depends(require_role)):
    mesure = MesureEnv(**payload.model_dump())
    db.add(mesure)

    if payload.type_mesure == "air" and payload.valeur > 150:
        db.add(Alerte(categorie="pollution_air", niveau="alerte", message="Seuil pollution air depasse", zone=payload.zone))
    if payload.type_mesure == "eau" and payload.valeur > 80:
        db.add(Alerte(categorie="pollution_eau", niveau="alerte", message="Seuil pollution eau depasse", zone=payload.zone))

    db.commit()
    return {"status": "created"}


@app.get("/api/alertes", response_model=list[AlerteOut])
def list_alertes(db: Session = Depends(get_db), _: str = Depends(require_role)):
    return db.query(Alerte).order_by(Alerte.created_at.desc()).limit(100).all()


@app.get("/api/cartographie/zones")
def zones(_: str = Depends(require_role)):
    return {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {"name": "Zone Forestiere Nimba", "risk": "deforestation"},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [[[-8.6, 7.6], [-8.5, 7.6], [-8.5, 7.7], [-8.6, 7.7], [-8.6, 7.6]]],
                },
            }
        ],
    }


@app.get("/api/regions/scores")
def regional_scores(_: str = Depends(require_role)):
    return [
        {"region": "Conakry", "eco_score": 84, "risk": "moyen", "priority": "air"},
        {"region": "Boké", "eco_score": 71, "risk": "élevé", "priority": "eau/mines"},
        {"region": "Kindia", "eco_score": 79, "risk": "moyen", "priority": "bassins versants"},
        {"region": "Labé", "eco_score": 87, "risk": "faible", "priority": "forêts"},
        {"region": "Kankan", "eco_score": 76, "risk": "moyen", "priority": "sols"},
        {"region": "Nzérékoré", "eco_score": 69, "risk": "élevé", "priority": "déforestation"},
    ]


@app.get("/api/minister/brief")
def minister_brief(_: str = Depends(require_role)):
    return {
        "headline": "Situation environnementale sous contrôle avec zones prioritaires ciblées",
        "top_priorities": [
            "Réduire les incidents pollution eau dans les zones minières de Boké",
            "Renforcer la surveillance anti-déforestation en Guinée Forestière",
            "Accélérer le déploiement des capteurs IoT air/eau dans 8 préfectures prioritaires",
        ],
        "next_90_days": [
            "Mise en service du centre national d'alertes environnementales",
            "Publication du premier bulletin public de transparence écologique",
            "Tableau de bord COP climat aligné MRV national",
        ],
    }
