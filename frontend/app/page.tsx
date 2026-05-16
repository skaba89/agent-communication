import { fetchAlertes, fetchKpis, fetchMinisterBrief, fetchRegionalScores } from '../lib/api'

function Card({ title, value, trend }: { title: string; value: string | number; trend?: string }) {
  return (
    <div className="card rounded-2xl p-5 shadow-xl">
      <p className="text-sm text-emerald-100/80">{title}</p>
      <p className="text-3xl font-semibold mt-2">{value}</p>
      {trend && <p className="text-xs text-emerald-200/80 mt-2">{trend}</p>}
    </div>
  )
}

export default async function Home() {
  const [kpis, alertes, regionalScores, ministerBrief] = await Promise.all([
    fetchKpis(),
    fetchAlertes(),
    fetchRegionalScores(),
    fetchMinisterBrief(),
  ])

  return (
    <main className="min-h-screen p-6 md:p-10 bg-grid">
      <header className="mb-8">
        <p className="uppercase tracking-[0.2em] text-xs text-emerald-200/70">République de Guinée • Green Guinea 2030</p>
        <h1 className="text-3xl md:text-5xl font-bold mt-2">ONIEC-GN Command Center</h1>
        <p className="text-emerald-100/80 mt-2 max-w-3xl">Plateforme souveraine de surveillance environnementale et climatique — version démonstration premium pour présentation officielle.</p>
      </header>

      <section className="card rounded-2xl p-5 mb-8 border border-emerald-300/20">
        <p className="text-xs uppercase tracking-[0.2em] text-emerald-200/75">Brief Ministre</p>
        <h2 className="text-2xl font-semibold mt-2">{ministerBrief.headline}</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-4 text-sm text-emerald-100/85">
          <div>
            <h3 className="font-semibold mb-2">Priorités immédiates</h3>
            <ul className="list-disc pl-5 space-y-1">
              {ministerBrief.top_priorities.map((i: string, idx: number) => <li key={idx}>{i}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Plan d'exécution (90 jours)</h3>
            <ul className="list-disc pl-5 space-y-1">
              {ministerBrief.next_90_days.map((i: string, idx: number) => <li key={idx}>{i}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        <Card title="Score écologique national" value={kpis.score_ecologique_national} trend="+2.1% vs mois dernier" />
        <Card title="Mesures temps réel" value={kpis.total_mesures} trend="IoT + stations météo" />
        <Card title="Alertes actives" value={kpis.total_alertes} trend="Priorité haute: 3" />
        <Card title="Sites miniers suivis" value={kpis.sites_miniers_suivis} trend="Conformité moyenne: 82%" />
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-8">
        <div className="card rounded-2xl p-5 xl:col-span-2">
          <h2 className="text-xl font-semibold mb-3">Carte nationale des zones à risque (aperçu)</h2>
          <div className="h-80 rounded-xl map-surface flex items-center justify-center text-emerald-100/80 text-center px-6">
            Couche SIG interactive (forêts, mines, bassins versants, pollution, incendies)
            <br />
            prêt à brancher sur Mapbox/Leaflet + services PostGIS.
          </div>
        </div>

        <div className="card rounded-2xl p-5">
          <h2 className="text-xl font-semibold mb-3">Alertes récentes</h2>
          <ul className="space-y-2 max-h-72 overflow-auto pr-1">
            {alertes.length === 0 ? (
              <li className="text-emerald-100/70 text-sm">Aucune alerte active.</li>
            ) : (
              alertes.map((a: any) => (
                <li key={a.id} className="rounded-lg bg-black/20 border border-emerald-200/15 p-3 text-sm">
                  <span className="font-semibold">[{a.niveau}]</span> {a.categorie}
                  <p className="text-emerald-100/75">{a.message} — {a.zone}</p>
                </li>
              ))
            )}
          </ul>
        </div>
      </section>

      <section className="card rounded-2xl p-5 mb-8">
        <h2 className="text-xl font-semibold mb-3">Score écologique par région (pilotage national)</h2>
        <div className="overflow-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-emerald-200/80 border-b border-emerald-200/20">
                <th className="text-left py-2">Région</th><th className="text-left py-2">Score</th><th className="text-left py-2">Risque</th><th className="text-left py-2">Priorité d'action</th>
              </tr>
            </thead>
            <tbody>
              {regionalScores.map((r: any) => (
                <tr key={r.region} className="border-b border-emerald-200/10">
                  <td className="py-2">{r.region}</td><td className="py-2 font-semibold">{r.eco_score}</td><td className="py-2">{r.risk}</td><td className="py-2">{r.priority}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}
