import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  )
}

export default App