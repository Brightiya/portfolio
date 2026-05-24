import { useState } from "react"
import { Menu, X } from "lucide-react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/70 border-b border-slate-800">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-2xl font-bold">
          Tony.dev
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>

          <a href="#projects" className="hover:text-blue-400 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-8 pb-6 flex flex-col gap-4 bg-slate-900 border-t border-slate-800">

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-400 transition"
          >
            About
          </a>

          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-400 transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-400 transition"
          >
            Contact
          </a>

        </div>
      )}

    </nav>
  )
}

export default Navbar