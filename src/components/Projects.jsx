import { motion } from "framer-motion"
import transcriptionImage from "../assets/video_processor.png"
import pimvImage from "../assets/pimv.png"


const projects = [
  {
    title: "AI Transcription Platform",
    description:
      "Upload MP4 files, generate transcriptions, summaries and manage subscriptions.",
    tech: ["FastAPI", "PostgreSQL", "OpenAI", "React"],
    image: transcriptionImage,
  },
  {
    title: "Decentralized Identity Platform",
    description:
      "Blockchain-based decentralized identity application for secure digital identity verification, wallet authentication and user-controlled credential management.",
    tech: ["React", "Solidity", "Web3", "Ethereum"],
    image: pimvImage,
  },
]

function Projects() {
  return (
    <section
      id="projects"
      className="px-8 py-24 bg-slate-800"
    >

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-14 text-center"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            whileHover={{
              scale: 1.03,
              y: -8,
            }}
            className="bg-slate-900 p-8 rounded-2xl shadow-lg"
          >
             <img
              src={project.image}
              alt={project.title}
              className="w-full max-h-72 object-contain bg-slate-800 rounded-xl mb-6 p-2"
            />

            <h3 className="text-2xl font-bold">
              {project.title}
            </h3>

            <p className="mt-4 text-slate-300 leading-7">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">

              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-slate-700 px-3 py-1 rounded"
                >
                  {tech}
                </span>
              ))}

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  )
}

export default Projects