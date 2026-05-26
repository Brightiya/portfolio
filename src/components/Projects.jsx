import { motion } from "framer-motion"
import transcriptionImage from "../assets/video_processor.png"
import pimvImage from "../assets/pimv.png"

const projects = [
  {
    title: "AI Transcription Platform",
    description:
      "Full-stack AI transcription platform for uploading MP4 files, generating transcriptions, AI summaries and managing authenticated user subscriptions.",
    tech: ["FastAPI", "PostgreSQL", "OpenAI", "React"],
    image: transcriptionImage,
    github: "https://github.com/Brightiya/smart-video-processor",
    demo:   "https://smartvideoprocessor.com/",
  },

  {
    title: "Decentralized Identity Platform",
    description:
      "Blockchain-powered decentralized identity platform for secure wallet authentication, credential verification and user-controlled digital identity management.",
    tech: ["React", "Solidity", "Web3", "Ethereum"],
    image: pimvImage,
    github: "https://github.com/Brightiya/decentralized-identity-api",
    demo: "https://pimv.fly.dev/",
  },
]

function Projects() {
  return (
    <section
      id="projects"
      className="px-6 md:px-8 py-24 bg-slate-800"
    >

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >

        <h2 className="text-4xl md:text-5xl font-bold">
          Featured Projects
        </h2>

        <p className="text-slate-400 mt-5 max-w-2xl mx-auto text-lg">
          A selection of projects focused on backend engineering,
          artificial intelligence, cloud deployment and scalable applications.
        </p>

      </motion.div>

      {/* Projects Grid */}
      <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">

        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: index * 0.2,
            }}
            whileHover={{
              y: -10,
            }}
            className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl"
          >

            {/* Project Image */}
            <div className="overflow-hidden bg-slate-950">

              <motion.img
                src={project.image}
                alt={project.title}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.4 }}
                className="w-full max-h-[420px] object-contain bg-slate-950 p-4"
              />

            </div>

            {/* Content */}
            <div className="p-8">

              <h3 className="text-2xl md:text-3xl font-bold">
                {project.title}
              </h3>

              <p className="mt-5 text-slate-300 leading-8">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mt-7 flex flex-wrap gap-3">

                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-xl text-sm"
                  >
                    {tech}
                  </span>
                ))}

              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl font-semibold"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-slate-600 hover:border-slate-400 transition px-6 py-3 rounded-xl font-semibold"
                >
                  Live Demo
                </a>

              </div>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  )
}

export default Projects