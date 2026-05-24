function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 border-b border-slate-700 sticky top-0 bg-slate-900/80 backdrop-blur-md z-50">

      <h1 className="text-2xl font-bold">
        Bright.dev
      </h1>

      <div className="space-x-6 hidden md:flex">
        <a href="#about" className="hover:text-blue-400">
          About
        </a>

        <a href="#projects" className="hover:text-blue-400">
          Projects
        </a>

        <a href="#contact" className="hover:text-blue-400">
          Contact
        </a>
      </div>

    </nav>
  )
}

export default Navbar