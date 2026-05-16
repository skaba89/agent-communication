const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

export async function fetchKpis() {
  try {
    const res = await fetch(`${API}/api/kpis`, { headers: { 'x-role': 'admin' }, cache: 'no-store' })
    if (!res.ok) throw new Error('API error')
    return await res.json()
  } catch {
    return {
      score_ecologique_national: 87,
      total_mesures: 12458,
      total_alertes: 6,
      sites_miniers_suivis: 41,
    }
  }
}

export async function fetchAlertes() {
  try {
    const res = await fetch(`${API}/api/alertes`, { headers: { 'x-role': 'admin' }, cache: 'no-store' })
    if (!res.ok) throw new Error('API error')
    return await res.json()
  } catch {
    return [
      { id: 1, niveau: 'alerte', categorie: 'pollution_eau', message: 'Hausse turbidité', zone: 'Boké' },
      { id: 2, niveau: 'vigilance', categorie: 'deforestation', message: 'Perte couverture végétale', zone: 'Nimba' },
    ]
  }
}

export async function fetchRegionalScores() {
  try {
    const res = await fetch(`${API}/api/regions/scores`, { headers: { 'x-role': 'admin' }, cache: 'no-store' })
    if (!res.ok) throw new Error('API error')
    return await res.json()
  } catch {
    return [
      { region: 'Conakry', eco_score: 84, risk: 'moyen', priority: 'air' },
      { region: 'Boké', eco_score: 71, risk: 'élevé', priority: 'eau/mines' },
      { region: 'Nzérékoré', eco_score: 69, risk: 'élevé', priority: 'déforestation' },
    ]
  }
}

export async function fetchMinisterBrief() {
  try {
    const res = await fetch(`${API}/api/minister/brief`, { headers: { 'x-role': 'admin' }, cache: 'no-store' })
    if (!res.ok) throw new Error('API error')
    return await res.json()
  } catch {
    return {
      headline: 'Situation environnementale sous contrôle avec zones prioritaires ciblées',
      top_priorities: [
        'Réduire les incidents pollution eau dans les zones minières de Boké',
        'Renforcer la surveillance anti-déforestation en Guinée Forestière',
      ],
      next_90_days: [
        "Mise en service du centre national d'alertes environnementales",
        'Publication du premier bulletin public de transparence écologique',
      ],
    }
  }
}
