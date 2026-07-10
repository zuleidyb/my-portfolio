const projectList = [
  {
    id: 6,
    title: 'TeamFlow',
    description: 'A real-time collaborative kanban board with live drag-and-drop sync, presence indicators, and an activity feed, built with React, Node.js, Socket.io, and PostgreSQL.',
    link: 'https://github.com/zuleidyb/teamflow-',
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
    description: 'A drag-and-drop task board with full CRUD and localStorage persistence.',
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