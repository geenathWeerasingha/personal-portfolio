import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Highlights from './components/Highlights'
import Contact from './components/Contact'
import Particles from './components/Particles'

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background layers */}
      <div className="fixed inset-0 hero-gradient pointer-events-none" />
      <div className="fixed inset-0 grid-pattern pointer-events-none" />
      <Particles />
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Highlights />
          <Contact />
        </main>
        
        {/* Footer */}
        <footer className="py-8 border-t border-slate-200 dark:border-slate-800">
          <div className="section-container text-center">
            <p className="text-slate-500 dark:text-slate-500 text-sm">
              © {new Date().getFullYear()} Geenath Weerasingha. Built with React & Tailwind CSS.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App

