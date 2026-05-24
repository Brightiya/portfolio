function About() {
  return (
    <section
      id="about"
      className="px-8 py-24 max-w-5xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-10">
        About Me
      </h2>

      <p className="text-slate-300 leading-8 text-lg">
        I am a Computer Science graduate from the
        University of London with interests in backend engineering,
        artificial intelligence, database systems and scalable cloud deployment.

        I enjoy designing APIs, building authentication systems,
        optimizing databases and creating AI-powered applications.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">

        {[
          "FastAPI",
          "React",
          "PostgreSQL",
          "Docker",
          "OpenAI APIs",
          "SQL",
          "Python",
        ].map((skill) => (
          <span
            key={skill}
            className="bg-slate-800 px-4 py-2 rounded-xl"
          >
            {skill}
          </span>
        ))}

      </div>
    </section>
  )
}

export default About