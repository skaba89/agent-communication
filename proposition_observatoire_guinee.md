# Observatoire National Intelligent Environnement & Climat de Guinée (ONIEC-GN)

## 1) Résumé exécutif (niveau Ministre)

**Positionnement officiel :**
> **« La future infrastructure numérique intelligente de surveillance environnementale et climatique de la République de Guinée. »**

L’ONIEC-GN est une plateforme nationale souveraine de pilotage environnemental et climatique intégrant SIG, IA, IoT, imagerie satellitaire, drones et big data pour fournir un monitoring en temps réel, des alertes précoces, de la transparence publique et des capacités de décision gouvernementale multi-niveaux.

**Impacts stratégiques attendus (2026–2030) :**
- Réduction des délais de détection des incidents environnementaux (déforestation, pollution, incendies, inondations).
- Amélioration de la conformité minière/industrielle et de la traçabilité réglementaire.
- Renforcement de la souveraineté numérique environnementale (données hébergées et gouvernées nationalement).
- Pilotage d’une stratégie « Green Guinea 2030 » compatible avec les bailleurs internationaux (ONU, Banque Mondiale, fonds climat).

---

## 2) Cahier des charges premium

### 2.1 Objectifs métier
1. Surveillance environnementale nationale.
2. Monitoring climatique intelligent.
3. Cartographie écologique SIG multi-échelle.
4. Surveillance des zones minières et industrielles.
5. Détection de déforestation et changement d’occupation des sols.
6. Monitoring qualité air/eau.
7. Gestion proactive des risques environnementaux.
8. Reporting réglementaire national et international (incluant COP).
9. IA prédictive environnementale.
10. Portail public de transparence écologique.

### 2.2 Utilisateurs cibles
- **Niveau stratégique :** Ministre, Primature, Présidence (dashboard présidentiel).
- **Niveau opérationnel :** Directions techniques nationales, inspections régionales.
- **Niveau sectoriel :** Mines, eaux/forêts, protection civile, santé publique.
- **Niveau externe :** partenaires techniques et financiers, chercheurs, citoyens.

### 2.3 Exigences non fonctionnelles
- Disponibilité cible : **99,9 %** (noyau national).
- Architecture **cloud hybride souverain** + PRA.
- Sécurité by design (Zero Trust, chiffrement E2E, SOC).
- Scalabilité nationale (croissance x10 des flux capteurs/données satellite).
- Interopérabilité : API-first, standards OGC/ISO, catalogue de données.

---

## 3) Architecture complète (macro)

## 3.1 Couche expérience (UX)
- Web gouvernemental (Next.js/React/TypeScript/Tailwind/Framer Motion).
- Mobile terrain (inspection, signalement, mode déconnecté).
- Portail public Open Data environnemental.

## 3.2 Couche services métiers
- Microservices FastAPI + Node.js.
- API Gateway REST + GraphQL.
- Gestion workflow réglementaire (permis, audits, incidents, sanctions).

## 3.3 Couche data & IA
- Data lake (MinIO) + Data warehouse (PostgreSQL/PostGIS).
- Streaming (Kafka), orchestration (Airflow), transformation (dbt).
- MLOps (MLflow) pour modèles de prévision et détection.

## 3.4 Couche géospatiale
- Serveur cartographique OGC (WMS/WFS/WMTS).
- Intégration QGIS/ArcGIS + rendu web (Mapbox/Leaflet).
- Traitement raster/vector et séries temporelles géospatiales.

## 3.5 Couche ingestion
- IoT gateways (air, eau, météo, bruit, particules, métaux lourds).
- Imagerie satellite (Sentinel/Landsat/commercial selon besoins).
- Drones missionnés sur hotspots écologiques.
- Connecteurs systèmes ministériels et industriels.

## 3.6 Couche sécurité & souveraineté
- IAM centralisé (RBAC/ABAC), journalisation inviolable.
- Chiffrement au repos/en transit (AES-256, TLS 1.3).
- DLP, SIEM/SOC, audits continus, gestion des clés souveraine (HSM).

---

## 4) Modules principaux (spécification fonctionnelle)

### 4.1 Module Observatoire Environnemental
- KPIs nationaux : couverture forestière, indice qualité air/eau, pression minière, émissions.
- Vue territoriale (national/régional/préfectoral).
- Cockpit exécutif (Ministre/Présidence) avec état des alertes et score écologique national.

### 4.2 Module SIG / Cartographie
- Cartes multicouches : forêts, mines, bassins versants, aires protégées, zones inondables.
- Heatmaps pollution air/eau.
- Outil de comparaison temporelle (avant/après).

### 4.3 Module Satellites & Drones
- Détection automatique de déforestation (changement NDVI/NBR, segmentation).
- Surveillance concessions minières (extension, déchets, turbidité).
- Missions drones planifiées avec preuves géolocalisées.

### 4.4 Module Qualité Air & Eau
- Ingestion en temps réel des capteurs.
- Indices normalisés AQI/WQI adaptés au cadre national.
- Détection de contamination et alertes seuils.

### 4.5 Module IA & Analytics
- Prévisions climatiques locales (pluie, sécheresse, vague de chaleur).
- Détection d’anomalies multi-sources.
- Scoring écologique territorial (0–100) + recommandations automatiques.

### 4.6 Module Mines & Industries
- Suivi conformité EIES/PGES.
- Corrélation impact environnemental vs activité industrielle.
- Registre numérique d’audits, incidents et plans correctifs.

### 4.7 Module Smart Alerts
- Alertes inondation, incendie, pollution, glissement de terrain.
- Diffusion multicanale (SMS, email, application, centre opérationnel).
- Matrice criticité : information, vigilance, alerte, crise.

### 4.8 Module Portail Public
- Transparence : cartes publiques, indicateurs, rapports.
- Open APIs environnementales avec quotas et clés.
- Espace citoyen : signalements et sensibilisation.

### 4.9 Module Cybersécurité
- Contrôles d’accès fins (principe du moindre privilège).
- Traçabilité complète des actions.
- Centre de supervision cyber (SOC national ou mutualisé).

---

## 5) Architecture SIG (détail)

- **Référentiel national géospatial** (limites admin, hydrographie, occupation sols).
- **PostGIS** comme cœur géodonnées transactionnelles.
- **Moteur tuiles/vector tiles** pour performance nationale.
- **Catalogue métadonnées** (ISO 19115) + qualité de données.
- **Pipeline géospatial** : ingestion → harmonisation CRS → contrôles qualité → publication services.

---

## 6) Architecture Big Data (détail)

- **Zone Bronze** : données brutes (satellite, IoT, fichiers institutions).
- **Zone Silver** : données nettoyées et enrichies.
- **Zone Gold** : indicateurs certifiés décisionnels.
- Gouvernance de données : lineage, qualité, classification sensibilité, rétention.

---

## 7) Architecture IoT nationale

- Réseau de stations fixes (villes, mines, zones sensibles).
- Stations mobiles et kits terrain.
- Protocoles MQTT/HTTPS + buffering local en cas de coupure.
- Calibration périodique, maintenance préventive et carnet métrologique.

---

## 8) Architecture cybersécurité & conformité

### 8.1 Modèle de sécurité
- Zero Trust + segmentation réseau.
- Bastion d’administration, MFA obligatoire.
- Journalisation centralisée (SIEM) et détection comportementale.

### 8.2 Conformité
- Politique nationale de gouvernance des données environnementales.
- Clauses de souveraineté dans les contrats fournisseurs.
- Cartographie des risques cyber et plan de continuité.

---

## 9) Modèle de données environnemental (extrait)

**Entités clés :**
- `territoire`, `station_capteur`, `mesure_env`, `site_minier`, `incident_env`, `alerte`, `audit_conformite`, `couverture_sol`, `observation_satellite`, `mission_drone`, `score_ecologique`.

**Principes :**
- Timestamping systématique.
- Géométrie native (POINT/POLYGON/RASTER).
- Historisation complète (SCD/versions).

---

## 10) Stratégie IA environnementale

### 10.1 Cas d’usage prioritaires
1. Déforestation précoce (vision géospatiale).
2. Prédiction inondation locale (hydro-météo).
3. Détection pollution anormale (air/eau).
4. Scoring risque environnemental minier.

### 10.2 Gouvernance IA
- Registre des modèles.
- Validation scientifique inter-ministérielle.
- Monitoring dérive des modèles.
- IA explicable pour décisions réglementaires.

---

## 11) UX/UI premium (directives)

- **Identité visuelle** : bleu nuit institutionnel + vert intelligent.
- **Dark mode élégant** + contraste accessibilité WCAG.
- **Glassmorphism modéré** pour couches d’information.
- **Design system national** (tokens, composants, iconographie).
- **Vues clés** :
  - Dashboard Présidentiel (KPIs macro + carte risques).
  - Centre Opérationnel Environnemental (temps réel).
  - Portail public (pédagogie + transparence).

---

## 12) Dashboard previews (structure)

1. **Dashboard Présidentiel**
   - Score écologique national.
   - Top 10 zones critiques.
   - Tendances climat 12 mois.
2. **Dashboard Ministre**
   - Conformité minière/industrielle.
   - Alertes actives et SLA de résolution.
3. **Dashboard Technique**
   - Flux IoT, qualité des données, états capteurs.
4. **Dashboard Public**
   - Indicateurs simplifiés + cartes publiques.

---

## 13) Roadmap Green Guinea 2030

### Phase 0 (0–3 mois) – Préparation
- Cadrage institutionnel, PMO, gouvernance programme.
- Audit données existantes et architecture cible.

### Phase 1 (4–9 mois) – MVP national
- Observatoire + SIG + air/eau + alertes de base.
- Pilotes Conakry + 2 régions minières.

### Phase 2 (10–18 mois) – Industrialisation
- Satellite/drones, IA prédictive, portail public.
- Extension multi-régionale et interop ministérielle.

### Phase 3 (19–30 mois) – Souveraineté complète
- SOC renforcé, MLOps mature, reporting COP automatisé.
- Généralisation nationale, optimisation coûts/performance.

---

## 14) Planning projet (gouvernance)

- **Sponsor** : Ministre de l’Environnement.
- **Steering Committee** : Environnement, Mines, Intérieur, Numérique, Finances.
- **PMO central** : pilotage délais/coûts/risques.
- **Cellule data/IA nationale** : standards et qualité scientifique.

---

## 15) Budget estimatif (ordre de grandeur)

- Études, design, AMOA/AMOE : **1,5–2,5 M USD**
- Plateforme logicielle & intégration : **4–7 M USD**
- Infrastructure cloud hybride + sécurité : **3–6 M USD**
- IoT & instrumentation terrain : **3–8 M USD**
- Satellite/drones & opérations : **2–5 M USD**
- Formation, conduite du changement, exploitation initiale : **1,5–3 M USD**

**Total programme 30 mois : ~15 à 31,5 M USD** (à affiner après cadrage terrain).

---

## 16) Stratégie maintenance & opérations

- Modèle **Build-Operate-Transfer** progressif.
- NOC/SOC avec astreinte.
- Contrats de maintenance multi-niveaux (L1/L2/L3).
- Plan de formation certifiante pour équipes nationales.

---

## 17) Stratégie de souveraineté numérique

- Hébergement prioritaire en territoire national (ou zone juridiquement souveraine).
- Clauses contractuelles de réversibilité et portabilité.
- Maîtrise du code source stratégique et documentation complète.
- Priorité aux standards ouverts pour éviter le verrouillage fournisseur.

---

## 18) Présentation exécutive Ministre (trame)

1. Urgence environnementale et opportunité nationale.
2. Vision ONIEC-GN 2030.
3. Impacts mesurables et bénéfices citoyens.
4. Architecture souveraine et sécurisée.
5. Plan de déploiement et budget.
6. Stratégie de financement international.
7. Décisions attendues et prochaines étapes (90 jours).

---

## 19) Compatibilité financements internationaux

Le programme est structuré pour répondre aux exigences de :
- gouvernance claire,
- indicateurs mesurables,
- transparence des données,
- impact climat/biodiversité,
- mécanismes de redevabilité.

Ceci facilite la mobilisation de fonds climat, coopération multilatérale et partenariats techniques.

---

## 20) Conclusion officielle

L’ONIEC-GN est conçu comme une **plateforme souveraine, intelligente et opérationnelle** permettant à la République de Guinée de passer d’une gestion environnementale réactive à une gouvernance prédictive, territorialisée et transparente.

> **Green Guinea 2030** : un État piloté par la donnée environnementale, la science et l’IA au service du développement durable.
