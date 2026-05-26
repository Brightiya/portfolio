import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/70 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex items-center justify-between">

        {/* Logo */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="text-2xl md:text-3xl font-black tracking-tight"
        >
          <span className="text-white">
            Bright
          </span>

          <span className="text-blue-400">
            .dev
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-slate-300 hover:text-white transition duration-300 group"
            >
              {link.name}

              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          {/* CTA Button */}
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-500 transition px-5 py-2.5 rounded-xl font-semibold shadow-lg shadow-blue-600/20"
          >
            Hire Me
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-slate-800 bg-slate-900/95 backdrop-blur-xl"
          >

            <div className="px-8 py-8 flex flex-col gap-6">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg text-slate-300 hover:text-blue-400 transition"
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile CTA */}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="bg-blue-600 hover:bg-blue-500 transition px-5 py-3 rounded-xl text-center font-semibold mt-2"
              >
                Hire Me
              </a>

            </div>

          </motion.div>
        )}

      </AnimatePresence>

    </nav>
  )
}

export default Navbar