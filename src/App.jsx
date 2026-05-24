import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="relative bg-slate-900 text-white min-h-screen overflow-hidden">

      {/* Gradient Glow Top */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-blue-500 rounded-full blur-3xl opacity-20"></div>

      {/* Gradient Glow Middle */}
      <div className="absolute top-[40%] right-[-100px] w-[300px] h-[300px] bg-purple-500 rounded-full blur-3xl opacity-20"></div>

      {/* Gradient Glow Bottom */}
      <div className="absolute bottom-[-120px] left-[30%] w-[350px] h-[350px] bg-cyan-500 rounded-full blur-3xl opacity-20"></div>

      {/* Main Content */}
      <div className="relative z-10">

        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />

      </div>

    </div>
  )
}

export default App