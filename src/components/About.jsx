import { motion } from "framer-motion"

function About() {
  const skills = [
    "Python",
    "FastAPI",
    "React",
    "Angular",
    "TypeScript",
    "Django REST framework",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "SQL",
    "SQLAlchemy",
    "Redis",
    "Docker",
    "OpenAI APIs",
    "Git & GitHub",
    "REST APIs",
    "Authentication Systems",
    "Machine Learning",
    "AI Integrations",
    "Cloud Deployment",
    "JWT Security",
    "Database Design",
    "Blockchain",
    "Web3",
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

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-10 flex justify-center md:justify-start"
            >

              <div className="relative">

                {/* Glow */}
                <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-3xl" />

                {/* Image */}
                <div className="relative w-64 h-64 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">

                  <img
                    src="/profile.jpg"
                    alt="Bright Iyahen"
                    className="w-full h-full object-cover"
                  />

                </div>

              </div>

            </motion.div>

            <p className="text-slate-300 leading-8 text-lg">
              I am a Computer Science graduate from the
              University of London with a strong focus on
              backend engineering, artificial intelligence,
              scalable systems and modern web technologies.
            </p>

            <p className="text-slate-300 leading-8 text-lg mt-6">
              I specialize in building secure backend APIs,
              AI-powered applications, authentication systems,
              database-driven platforms and scalable cloud-based services
              using Python, FastAPI, PostgreSQL and React.
            </p>

            <p className="text-slate-300 leading-8 text-lg mt-6">
              My projects include AI transcription platforms,
              decentralized identity systems, blockchain integrations,
              video processing pipelines and modern full-stack applications
              designed with performance, scalability and clean architecture in mind.
            </p>

            <p className="text-slate-300 leading-8 text-lg mt-6">
              I enjoy solving complex engineering problems,
              optimizing database performance,
              designing clean REST APIs and integrating AI technologies
              into practical real-world applications.
            </p>

            <p className="text-slate-300 leading-8 text-lg mt-6">
              Beyond development, I continuously explore
              emerging technologies in artificial intelligence,
              distributed systems, cloud infrastructure and Web3 development
              to build modern software solutions that scale efficiently.
            </p>

          </div>

          {/* Right Side */}
          <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700">

            <h3 className="text-2xl font-bold mb-6">
              Technologies & Skills
            </h3>

            <div className="flex flex-wrap gap-3">

              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={{
                    scale: 1.08,
                    y: -2,
                  }}
                  className="bg-slate-700 hover:bg-blue-600 transition px-4 py-2 rounded-xl"
                >
                  {skill}
                </motion.span>
              ))}

            </div>

            {/* Extra Stats */}
            <div className="mt-10 grid grid-cols-2 gap-4">

              <div className="bg-slate-900 rounded-2xl p-5 text-center">
                <h4 className="text-3xl font-bold text-blue-400">
                  Full Stack
                </h4>

                <p className="text-slate-400 mt-2 text-sm">
                  Backend & Frontend Development
                </p>
              </div>

              <div className="bg-slate-900 rounded-2xl p-5 text-center">
                <h4 className="text-3xl font-bold text-blue-400">
                  AI + APIs
                </h4>

                <p className="text-slate-400 mt-2 text-sm">
                  Intelligent Application Systems
                </p>
              </div>

            </div>

          </div>

        </div>

      </motion.div>

    </section>
  )
}

export default About