import { motion } from "framer-motion"

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-32">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">

        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full" />

      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-blue-400 font-semibold mb-5 tracking-wide"
          >
            BACKEND DEVELOPER • AI SYSTEMS • DATABASE ENGINEERING
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black leading-tight"
          >

            Hi, I'm{" "}

            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Bright
            </span>

          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-2xl md:text-3xl text-slate-300 font-semibold"
          >
            Computer Science Graduate
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 text-lg md:text-xl text-slate-400 leading-9 max-w-2xl"
          >
            I build scalable backend systems,
            AI-powered applications and modern web platforms
            using FastAPI, PostgreSQL, React and cloud technologies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-5"
          >

            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-2xl font-semibold transition shadow-lg shadow-blue-600/30"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-slate-600 hover:border-blue-400 px-8 py-4 rounded-2xl font-semibold transition"
            >
              Contact Me
            </a>

          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex gap-6 text-slate-400"
          >

            <a
              href="https://github.com/Brightiya"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/brightiyahen"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>

          </motion.div>

        </div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -12, 0],
          }}
          transition={{
            duration: 1,
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="flex justify-center"
        >

          <div className="relative">

            {/* Outer Glow */}
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />

            {/* Profile Container */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border border-slate-700 overflow-hidden bg-slate-800 shadow-2xl">

              <img
                src="/profile.jpg"
                alt="Tony"
                className="w-full h-full object-cover"
              />

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default Hero