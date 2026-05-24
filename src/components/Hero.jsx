import { motion } from "framer-motion"

function Hero() {
  return (
    <section className="text-center py-32 px-6 overflow-hidden">

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-blue-400 font-semibold mb-4"
      >
        Backend Developer • AI Systems • Database Engineering
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold leading-tight"
      >
        Computer Science Graduate
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-8 text-xl text-slate-300 max-w-3xl mx-auto leading-8"
      >
        I build scalable backend systems,
        AI-powered applications and modern web platforms
        using FastAPI, PostgreSQL, React and cloud technologies.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-10 flex justify-center gap-4 flex-wrap"
      >

        <a
          href="#projects"
          className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl transition"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="border border-slate-500 hover:border-blue-400 px-6 py-3 rounded-xl transition"
        >
          Contact Me
        </a>

      </motion.div>

    </section>
  )
}

export default Hero