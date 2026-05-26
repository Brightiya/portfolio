import { motion } from "framer-motion"

function About() {
  const skills = [
    "Python",
    "FastAPI",
    "React",
    "PostgreSQL",
    "SQL",
    "Docker",
    "OpenAI APIs",
    "Git",
    "REST APIs",
    "Authentication Systems",
  ]

  return (
    <section
      id="about"
      className="px-8 py-24 max-w-6xl mx-auto"
    >

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >

        <h2 className="text-4xl md:text-5xl font-bold mb-14 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* Left Side */}
          <div>

            <p className="text-slate-300 leading-8 text-lg">
              I am a Computer Science graduate from the
              University of London with strong interests in backend engineering,
              artificial intelligence, database systems and scalable cloud infrastructure.
            </p>

            <p className="text-slate-300 leading-8 text-lg mt-6">
              I enjoy building APIs, authentication systems,
              AI-powered applications and modern web platforms
              using Python, FastAPI, PostgreSQL and React.
            </p>

            <p className="text-slate-300 leading-8 text-lg mt-6">
              My focus is on writing clean, scalable and maintainable software
              while continuously improving performance,
              security and user experience.
            </p>

          </div>

          {/* Right Side */}
          <div className="bg-slate-800 rounded-3xl p-8">

            <h3 className="text-2xl font-bold mb-6">
              Technologies & Skills
            </h3>

            <div className="flex flex-wrap gap-3">

              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.08 }}
                  className="bg-slate-700 hover:bg-blue-600 transition px-4 py-2 rounded-xl"
                >
                  {skill}
                </motion.span>
              ))}

            </div>

          </div>

        </div>

      </motion.div>

    </section>
  )
}

export default About