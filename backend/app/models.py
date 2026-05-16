from sqlalchemy import String, Float, DateTime, ForeignKey, Integer
from sqlalchemy.orm import Mapped, mapped_column, relationship
from datetime import datetime
from .database import Base


class SiteMinier(Base):
    __tablename__ = "sites_miniers"
    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    nom: Mapped[str] = mapped_column(String(120), unique=True)
    region: Mapped[str] = mapped_column(String(80))
    statut_conformite: Mapped[str] = mapped_column(String(40), default="en_observation")


class MesureEnv(Base):
    __tablename__ = "mesures_env"
    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    type_mesure: Mapped[str] = mapped_column(String(20))  # air|eau
    valeur: Mapped[float] = mapped_column(Float)
    unite: Mapped[str] = mapped_column(String(20))
    zone: Mapped[str] = mapped_column(String(120))
    horodatage: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)


class Alerte(Base):
    __tablename__ = "alertes"
    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)
    categorie: Mapped[str] = mapped_column(String(40))
    niveau: Mapped[str] = mapped_column(String(20))
    message: Mapped[str] = mapped_column(String(500))
    zone: Mapped[str] = mapped_column(String(120))
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
