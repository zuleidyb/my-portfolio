import Avatar from './Avatar'

function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white px-6 py-16 text-center dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 sm:py-20"
    >
      <div className="animate-blob pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-300/30 blur-3xl dark:bg-violet-700/20" />
      <div className="animate-fade-in-up relative mx-auto max-w-2xl">
        <Avatar />
        <h1 className="mt-8 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent dark:from-indigo-400 dark:via-violet-400 dark:to-fuchsia-400">
            Zuleidy Briceno
          </span>
        </h1>
        <p className="mt-3 text-lg font-medium text-indigo-600 dark:text-violet-400">
          Senior Full-Stack Developer | React, .NET, C#, Vue.js | Salesforce &amp; CRM Integration Specialist
        </p>
        <div className="mx-auto mt-6 max-w-2xl space-y-4 text-left text-slate-600 dark:text-slate-300">
          <p>
            Senior Full-Stack Developer with 10+ years of experience delivering enterprise web applications,
            portal solutions, and large-scale SaaS implementations end-to-end — from architecture through
            production Go-Live.
          </p>
          <p>
            I bring strong, hands-on Salesforce expertise — Apex, SOQL, Lightning, LWC, Visualforce, managed
            packages, and multi-org deployments — alongside broad full-stack development skills: C#/.NET
            Framework, ASP.NET MVC, React, and Vue.js on the front end, with API-based integrations
            (REST/SOAP), cloud storage (AWS S3), and payment systems (Stripe, Authorize.Net) on the back end.
            This combination lets me work across the entire stack — building custom portals, integrating them
            tightly with Salesforce and other CRM platforms (HubSpot, Dynamics 365), and owning the connections
            between front-end experiences and complex backend/third-party systems.
          </p>
          <p>
            I&apos;ve managed delivery of enterprise-scale SaaS implementations and portal projects across a
            broad portfolio of clients, working through the full lifecycle: requirements, architecture,
            Salesforce/CRM integration, SSO/security (OAuth2, JWT, SAML), and production rollout. I also
            integrate AI tools like Claude/Claude Code into my daily workflow — for coding, debugging, code
            review, and quickly ramping up on new frameworks — which keeps me fast and adaptable as technology
            evolves.
          </p>
          <p>
            I enjoy building systems that connect multiple platforms reliably — clean data flow, scalable
            architecture, and a smooth experience for the end user. I&apos;m currently looking for senior
            full-stack developer roles where I can bring this end-to-end depth — full-stack development, deep
            Salesforce expertise, integrations, and delivery ownership — to enterprise-scale products.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-2.5 font-medium text-white shadow-lg shadow-indigo-500/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/30"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-slate-300 px-6 py-2.5 font-medium text-slate-700 transition-all hover:-translate-y-0.5 hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-violet-400 dark:hover:text-violet-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
