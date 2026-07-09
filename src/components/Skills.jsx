import Reveal from './Reveal'

const skillGroups = [
  {
    category: 'DevOps & Tools',
    skills: [
      'Sandbox/Production Deployment',
      'Force Packages',
      'MagentrixCLI',
      'Salesforce CLI',
      'GitHub',
      'AI-Assisted Development (Claude Code)',
    ],
  },
  {
    category: 'Backend',
    skills: [
      'C# / .NET Framework 4.8',
      'ASP.NET MVC',
      'Apex',
      'Java (JSP/Servlets)',
      'MEQL',
      'Triggers & Scheduled Jobs',
    ],
  },
  {
    category: 'Frontend',
    skills: [
      'Vue.js 3 (Iris Framework)',
      'React',
      'Tailwind CSS',
      'JavaScript (ES6+)',
      'HTML5/CSS3',
      'LWC',
      'Responsive Design',
    ],
  },
  {
    category: 'CRM & Platforms',
    skills: [
      'Salesforce (Apex, SOQL, Lightning, LWC, Visualforce, Aura Components, Managed Packages)',
      'HubSpot',
      'Data Migration (Salesforce ↔ HubSpot)',
      'Dynamics 365',
      'Magentrix',
    ],
  },
  {
    category: 'Payments',
    skills: ['Stripe (Cards, ACH, 3DS, Subscriptions)', 'Authorize.Net', 'PayPal', 'Invoice & Billing Systems'],
  },
  {
    category: 'Cloud & Storage',
    skills: ['Amazon S3', 'Exoscale Object Storage (AWS Sig V4)', 'AWS API Gateway', 'Webhooks'],
  },
  {
    category: 'Security & SSO',
    skills: [
      'OAuth2',
      'JWT',
      'OIDC',
      'SAML',
      'Azure Entra SSO',
      'SCIM',
      'JIT',
      'HMAC-SHA256',
      'RSA-OAEP Encryption',
      'CAPTCHA',
    ],
  },
  {
    category: 'Integrations',
    skills: [
      'REST/SOAP APIs',
      'Disney Webvan',
      'Instruqt (Webhooks + PII Encryption)',
      'Companies House UK',
      'OneTrust',
      'Lightning Out',
    ],
  },
  {
    category: 'Data & Reports',
    skills: ['MEQL/SOQL Optimization', 'S3 Data Pipelines', 'Excel/CSV Import-Export', 'PDF Generation', 'Dashboards'],
  },
  {
    category: 'Databases',
    skills: ['SQL Server', 'Database Design', 'SOQL', 'MEQL'],
  },
]

function Skills() {
  return (
    <section id="skills" className="bg-slate-50 px-6 py-14 dark:bg-slate-900/40">
      <Reveal>
        <h2 className="mb-2 text-center text-3xl font-bold text-slate-900 dark:text-white">
          Core Competencies
        </h2>
        <p className="mb-10 text-center text-slate-500 dark:text-slate-400">
          12+ years across full-stack development, CRM platforms, and enterprise integrations
        </p>
      </Reveal>
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        {skillGroups.map((group, index) => (
          <Reveal key={group.category} delay={index * 60}>
            <h3 className="mb-3 text-sm font-semibold tracking-wide text-indigo-600 uppercase dark:text-violet-400">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-violet-400 dark:hover:text-violet-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Skills
