import { motion } from "framer-motion"

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full" />

      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* Left Content */}
        <div>

          {/* Small Heading */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-blue-400 font-semibold mb-5 tracking-[0.2em] text-sm md:text-base"
          >
            BACKEND DEVELOPER • AI SYSTEMS • CLOUD ENGINEERING
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-black leading-tight"
          >
            Hi, I'm{" "}

            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Bright
            </span>

          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-2xl md:text-3xl text-slate-300 font-semibold"
          >
            Computer Science Graduate & Software Engineer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 text-lg md:text-xl text-slate-400 leading-9 max-w-2xl"
          >
            I design and build scalable backend systems,
            AI-powered applications and modern full-stack platforms
            using Python, FastAPI, PostgreSQL, React, Docker and cloud technologies.
            I enjoy solving complex engineering problems,
            building secure APIs and creating intelligent software experiences.
          </motion.p>

          {/* Tech Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="mt-8 flex flex-wrap gap-3"
          >

            {[
              "FastAPI",
              "PostgreSQL",
              "React",
              "Docker",
              "OpenAI APIs",
              "Cloud Deployment",
            ].map((tech) => (
              <span
                key={tech}
                className="bg-slate-800/80 border border-slate-700 px-4 py-2 rounded-full text-sm text-slate-300 hover:border-blue-500 hover:text-white transition"
              >
                {tech}
              </span>
            ))}

          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="mt-12 flex flex-wrap gap-5"
          >

            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-2xl font-semibold transition shadow-lg shadow-blue-600/30"
            >
              View Projects
            </a>

            {/* View CV */}
            <a
              href="/Bright_newCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-500 bg-blue-500/10 hover:bg-blue-500/20 px-8 py-4 rounded-2xl font-semibold transition"
            >
              View CV
            </a>

            {/* Download CV */}
            <a
              href="/Bright_newCV.pdf"
              download
              className="border border-slate-600 hover:border-blue-400 hover:bg-slate-800 px-8 py-4 rounded-2xl font-semibold transition"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="border border-slate-700 hover:border-white px-8 py-4 rounded-2xl font-semibold transition"
            >
              Contact Me
            </a>

          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="mt-10 flex flex-wrap gap-8 text-slate-400 font-medium"
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

            <a
              href="mailto:bightiyahen@gmail.com"
              className="hover:text-white transition"
            >
              Email
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
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="flex justify-center"
        >

          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />

            {/* Decorative Ring */}
            <div className="absolute -inset-4 rounded-full border border-blue-500/20" />

            {/* Profile Image */}
            <div className="relative w-72 h-72 md:w-[420px] md:h-[420px] rounded-full border border-slate-700 overflow-hidden bg-slate-800 shadow-2xl">

              <img
                src="/profile.jpg"
                alt="Bright Iyahen"
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