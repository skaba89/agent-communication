# ONIEC-GN Platform (MVP A→Z)

Plateforme nationale intelligente et souveraine de surveillance environnementale et climatique pour la République de Guinée.

## Stack
- Frontend: Next.js 15, React, TypeScript, TailwindCSS
- Backend: FastAPI, Python
- Data: PostgreSQL + PostGIS (via image postgis)
- Streaming (placeholder ready): Kafka (not wired in MVP)
- Infra: Docker Compose

## Quick start
```bash
docker compose up --build
```

Endpoints:
- Frontend: http://localhost:3000
- API: http://localhost:8000
- API docs: http://localhost:8000/docs

## Included MVP modules
1. Observatoire (KPIs)
2. SIG/Cartographie (GeoJSON API)
3. Qualité Air & Eau (mesures + alertes)
4. Mines & Industries (sites + conformité)
5. Smart Alerts
6. Portail Public (dashboard web)
7. Cybersécurité (RBAC simple via header role + audit log)

## Dev
### Backend local
```bash
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Frontend local
```bash
cd frontend
npm install
npm run dev
```


## Demo statique exportable (sans installation)

Pour voir un rendu visuel immédiat, ouvrez directement le fichier `demo_static_preview.html` dans votre navigateur.

```bash
xdg-open demo_static_preview.html
```

Alternative (serveur HTTP local):

```bash
python -m http.server 8080
# puis ouvrir http://localhost:8080/demo_static_preview.html
```


## Nouvelles capacités de démonstration ministérielle

- `GET /api/minister/brief` : message exécutif, priorités immédiates, plan 90 jours.
- `GET /api/regions/scores` : score écologique par région, niveau de risque et priorité d'action.
- Dashboard Next.js enrichi avec bloc **Brief Ministre** et tableau de pilotage territorial.
