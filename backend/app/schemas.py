from pydantic import BaseModel
from datetime import datetime


class MesureEnvCreate(BaseModel):
    type_mesure: str
    valeur: float
    unite: str
    zone: str


class AlerteOut(BaseModel):
    id: int
    categorie: str
    niveau: str
    message: str
    zone: str
    created_at: datetime

    class Config:
        from_attributes = True
