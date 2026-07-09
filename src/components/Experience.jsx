import Reveal from './Reveal'

const stats = [
  { label: 'Years at Magentrix', value: '10+' },
  { label: 'Projects delivered', value: '92' },
  { label: 'Client engagements', value: '78+' },
  { label: 'Code reviews led', value: '1,015' },
]

const highlights = [
  'Delivered 1,294 project tasks with a 92% completion rate, logging 7,056+ development hours across 229 high/urgent priority items.',
  'Sole developer for the Disney Enterprise Portal (2017–2026) — VIP tour systems, Webvan API payments, OneTrust privacy, and mobile UX.',
  'Built an automated S3 data import pipeline for A1 Telekom, syncing Exoscale Object Storage via AWS Signature V4 with daily scheduled upserts.',
  'Designed a HMAC-SHA256 / RSA-OAEP encrypted webhook integration between Instruqt labs and the Magentrix LMS for Akeyless.',
  'Engineered 63+ Salesforce integrations — bidirectional and delta sync, Apex triggers, Force packages, and a HubSpot-to-Salesforce production migration.',
  'Authored 10+ reusable PS Official deployment packages adopted organization-wide.',
  'Configured enterprise SSO (OAuth2/JWT, OIDC, SAML, Azure Entra) for clients including Acronis, A1 Telekom, Lumana, and Toggled.',
  'Resolved 130+ production issues and supported multi-language portals for international clients.',
]

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-14">
      <Reveal>
        <h2 className="mb-2 text-center text-3xl font-bold text-slate-900 dark:text-white">
          Experience
        </h2>
        <p className="mb-10 text-center text-slate-500 dark:text-slate-400">
          12+ years building enterprise software
        </p>
      </Reveal>

      <Reveal>
        <div className="rounded-2xl border border-slate-200 p-6 text-left shadow-sm dark:border-slate-800 sm:p-8">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                Senior Software Developer
              </h3>
              <p className="font-medium text-indigo-600 dark:text-violet-400">Magentrix Corporation</p>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              November 2015 — June 2026 · Gatineau, Quebec, Canada (Remote)
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl bg-slate-50 p-4 text-center dark:bg-slate-800/60">
                <p className="text-2xl font-bold text-indigo-600 dark:text-violet-400">{stat.value}</p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>

          <ul className="mt-6 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex gap-3 text-slate-600 dark:text-slate-300">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}

export default Experience
