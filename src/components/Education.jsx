import Reveal from './Reveal'

const education = [
  {
    program: 'e-Business Application Developer Program',
    school: 'IBM Advanced Career Education',
    detail: 'IT Fundamentals, Programming Essentials, Object Oriented, Java and DB Programming',
    period: '2005 — 2007',
  },
  {
    program: 'Websites Developer Program',
    school: 'IBM Advanced Career Education',
    detail: 'Advanced Web Development',
    period: '2005 — 2007',
  },
  {
    program: 'College Diploma in Telecommunications',
    school: 'I.U.E.T.L.V. (Instituto Universitario Experimental de Tecnología La Victoria)',
    detail: 'Telecommunications Technology/Technician',
    period: '2000',
  },
]

const certifications = [
  'ICAgile Certified Professional (ICP)',
  'Certified Internet Web Professional (CIW)',
  'Certified Internet Web Professional v5 Associate',
  'Microsoft Exam 483: Programming in C#',
]

const languages = [
  { name: 'Spanish', level: 'Native' },
  { name: 'English', level: 'Professional Working' },
]

function Education() {
  return (
    <section id="education" className="bg-slate-50 px-6 py-14 dark:bg-slate-900/40">
      <Reveal>
        <h2 className="mb-10 text-center text-3xl font-bold text-slate-900 dark:text-white">
          Education &amp; Certifications
        </h2>
      </Reveal>
      <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2">
        <Reveal>
          <h3 className="mb-4 text-sm font-semibold tracking-wide text-indigo-600 uppercase dark:text-violet-400">
            Education
          </h3>
          <ul className="space-y-4">
            {education.map((item) => (
              <li
                key={item.program}
                className="rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm dark:border-slate-700 dark:bg-slate-800"
              >
                <p className="font-semibold text-slate-800 dark:text-white">{item.program}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.school}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.detail}</p>
                <p className="mt-2 text-xs font-medium text-indigo-600 dark:text-violet-400">{item.period}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <h3 className="mb-4 text-sm font-semibold tracking-wide text-indigo-600 uppercase dark:text-violet-400">
            Certifications
          </h3>
          <ul className="mb-8 space-y-3">
            {certifications.map((cert) => (
              <li
                key={cert}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-left text-sm font-medium text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500" />
                {cert}
              </li>
            ))}
          </ul>

          <h3 className="mb-4 text-sm font-semibold tracking-wide text-indigo-600 uppercase dark:text-violet-400">
            Languages
          </h3>
          <ul className="flex flex-wrap gap-3">
            {languages.map((lang) => (
              <li
                key={lang.name}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                {lang.name} <span className="text-slate-400 dark:text-slate-500">· {lang.level}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

export default Education
