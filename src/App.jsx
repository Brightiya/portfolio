import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="bg-slate-900 text-white min-h-screen">

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />

    </div>
  )
}

export default App