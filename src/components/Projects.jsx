const projectList = [
  {
    id: 11,
    title: 'SFDC Bridge',
    description: 'Bidirectional Salesforce ↔ PostgreSQL sync engine — write-through outbound, CDC (Pub/Sub API) inbound, Bulk API 2.0 for volume. .NET 8 + Vue 3.',
    link: 'https://github.com/zuleidyb/SFDC-bridge',
  },
  {
    id: 12,
    title: 'Apex Integration Layer',
    description: 'An Apex-native integration layer for order data: an Apex REST endpoint lets an external order-management system push orders into Salesforce, and a scheduled Batch Apex job pushes status changes back out to that same external system via a Named Credential.',
    link: 'https://github.com/zuleidyb/apex-integration-layer',
  },
   {
    id: 13,
    title: 'Contract Analyzer (LLMs)',
    description: 'AI-powered contract review tool that extracts clauses and flags risk from PDF contracts using LLMs.',
    link: 'https://github.com/zuleidyb/contract-analyzer',
  },
  {
    id: 6,
    title: 'TeamFlow',
    description: 'A real-time collaborative kanban board with live drag-and-drop sync, presence indicators, and an activity feed, built with React, Node.js, Socket.io, and PostgreSQL.',
    link: 'https://github.com/zuleidyb/teamflow-',
  },
  {
    id: 7,
    title: 'InvenTrack',
    description: 'A layered TypeScript backend API with transactional order processing that prevents overselling under concurrent load, verified with an automated concurrency stress test, built with Node.js, Express, Prisma, and PostgreSQL.',
    link: 'https://github.com/zuleidyb/inventrack',
  },
  {
    id: 9,
    title: 'FleetSales',
    description: 'A sales performance dashboard with live filtering across customer, product, and date range, built with C#/.NET Core Web API, Entity Framework Core, PostgreSQL, and Vue 3.',
    link: 'https://github.com/zuleidyb/fleetsales',
  },
{
    id: 10,
    title: 'VoyagePlanner',
    description: 'A fleet route optimization tool using a nearest-neighbor + 2-opt algorithm on real port coordinates, with an interactive Leaflet map, built with ASP.NET Core, Entity Framework Core, PostgreSQL, and Vue 3.',
    link: 'https://github.com/zuleidyb/voyageplanner',
  },
  {
    id: 11,
    title: 'TrackMyApps',
    description: 'A personal job application tracker with a kanban pipeline, drag-and-drop stage changes, and an automated follow-up engine that flags applications that have gone quiet too long - built with ASP.NET Core, Entity Framework Core, PostgreSQL, and Vue 3.',
    link: 'https://github.com/zuleidyb/track-my-apps',
  },
 {
    id: 8,
    title: 'SyncHub',
    description: 'A Python (FastAPI) + React integration monitoring platform simulating ETL between two systems with mismatched schemas, featuring per-record failure tracking, retry logic, and data reconciliation.',
    link: 'https://github.com/zuleidyb/synchub',
  },
  {
    id: 1,
    title: 'Dev Team Dashboard',
    description: 'A project management dashboard with filtering, sorting, and data visualization using Recharts.',
    link: 'https://github.com/zuleidyb/dev-team-dashboard',
  },
  {
    id: 2,
    title: 'Book Finder',
    description: 'Search millions of books via the Open Library API, with debounced search and live suggestions.',
    link: 'https://github.com/zuleidyb/book-finder',
  },
  {
    id: 3,
    title: 'Kanban Board',
    description: 'A drag-and-drop task board with full CRUD and local Storage persistence.',
    link: 'https://github.com/zuleidyb/kanban-board',
  },
  {
    id: 4,
    title: 'Partner Sales Dashboard',
    description: 'A KPI reporting dashboard with multi-select filters, period comparisons, and trend charts.',
    link: 'https://github.com/zuleidyb/partner-sales-dashboard',
  },
  {
    id: 5,
    title: 'E-Commerce Cart',
    description: 'A multi-page shopping app with React Router and global cart state via Context API.',
    link: 'https://github.com/zuleidyb/ecommerce-cart',
  },
]

function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projectList.map((project) => (
          <div
            key={project.id}
            className="border border-gray-200 dark:border-slate-700 dark:bg-slate-800 rounded-xl p-6 text-left shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-slate-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 dark:text-violet-400 font-medium hover:underline"
            >
              View on Git →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects