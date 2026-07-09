import Reveal from './Reveal'

function Contact() {
  return (
    <section id="contact" className="px-6 py-14 text-center">
      <Reveal>
        <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Contact</h2>
        <div className="mx-auto max-w-sm rounded-2xl border border-slate-200 p-8 shadow-sm dark:border-slate-800">
          <p className="mb-2 text-slate-500 dark:text-slate-400">Gatineau, Quebec, Canada</p>
          <p className="mb-2 text-slate-600 dark:text-slate-400">
            <a
              href="mailto:zuleidyb@gmail.com"
              className="font-medium text-indigo-600 hover:underline dark:text-violet-400"
            >
              zuleidyb@gmail.com
            </a>
          </p>
          <p className="mb-4 text-slate-600 dark:text-slate-400">
            <a
              href="tel:+14168908561"
              className="font-medium text-indigo-600 hover:underline dark:text-violet-400"
            >
              Mobile: (416) 890-8561
            </a>
          </p>
          <a
            href="https://www.linkedin.com/in/zbriceno"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2 font-medium text-white shadow-md shadow-indigo-500/20 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/25"
          >
            Connect on LinkedIn
          </a>
        </div>
      </Reveal>
    </section>
  )
}

export default Contact
