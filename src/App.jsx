function App() {
  return (
    <div className="bg-slate-900 text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold">
          Tony.dev
        </h1>

        <div className="space-x-6">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-28 px-6">

        <h1 className="text-6xl font-bold leading-tight">
          Computer Science Graduate
        </h1>

        <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto">
          Backend Developer focused on APIs,
          databases, AI systems and scalable web applications.
        </p>

        <div className="mt-10 space-x-4">
          <button className="bg-blue-600 px-6 py-3 rounded-xl">
            View Projects
          </button>

          <button className="border border-slate-500 px-6 py-3 rounded-xl">
            Contact Me
          </button>
        </div>

      </section>

      {/* About */}
      <section
        id="about"
        className="px-8 py-20 max-w-5xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-8">
          About Me
        </h2>

        <p className="text-slate-300 leading-8 text-lg">
          I am a Computer Science graduate from the
          University of London with interests in backend engineering,
          database systems, artificial intelligence and cloud deployment.

          I enjoy building scalable systems using FastAPI,
          PostgreSQL, React and AI APIs.
        </p>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="px-8 py-20 bg-slate-800"
      >

        <h2 className="text-4xl font-bold mb-12 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {/* Project Card */}
          <div className="bg-slate-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold">
              AI Transcription Platform
            </h3>

            <p className="mt-4 text-slate-300">
              Upload MP4 files, transcribe audio,
              generate AI summaries and manage user subscriptions.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-slate-700 px-3 py-1 rounded">
                FastAPI
              </span>

              <span className="bg-slate-700 px-3 py-1 rounded">
                PostgreSQL
              </span>

              <span className="bg-slate-700 px-3 py-1 rounded">
                OpenAI
              </span>
            </div>
          </div>

          {/* Second Card */}
          <div className="bg-slate-900 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold">
              Database Learning Tool
            </h3>

            <p className="mt-4 text-slate-300">
              Interactive platform for learning
              functional dependencies and normalization.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-slate-700 px-3 py-1 rounded">
                React
              </span>

              <span className="bg-slate-700 px-3 py-1 rounded">
                SQL
              </span>

              <span className="bg-slate-700 px-3 py-1 rounded">
                PostgreSQL
              </span>
            </div>
          </div>

        </div>

      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-8 py-20 text-center"
      >
        <h2 className="text-4xl font-bold">
          Contact
        </h2>

        <p className="mt-6 text-slate-300">
          Email: your@email.com
        </p>

        <p className="mt-2 text-slate-300">
          GitHub: github.com/yourusername
        </p>
      </section>

    </div>
  )
}

export default App