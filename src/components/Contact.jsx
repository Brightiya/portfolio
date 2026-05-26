function Contact() {
  return (
    <section
      id="contact"
      className="px-8 py-24 text-center"
    >

      <h2 className="text-4xl font-bold">
        Contact
      </h2>

      <p className="mt-6 text-slate-300 max-w-2xl mx-auto leading-8">
        I am currently open to backend engineering,
        AI systems and full-stack development opportunities.
        Feel free to reach out for collaborations,
        freelance work or professional opportunities.
      </p>

      <div className="mt-10 flex flex-col gap-6 items-center">

        {/* Email */}
        <a
          href="mailto:fastmind667@gmail.com"
          className="bg-slate-800 hover:bg-slate-700 transition px-6 py-4 rounded-2xl w-full max-w-xl"
        >
          <p className="text-sm text-slate-400">
            Email
          </p>

          <p className="text-lg font-semibold break-all">
            fastmind667@gmail.com
          </p>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Brightiya"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-800 hover:bg-slate-700 transition px-6 py-4 rounded-2xl w-full max-w-xl"
        >
          <p className="text-sm text-slate-400">
            GitHub
          </p>

          <p className="text-lg font-semibold">
            github.com/Brightiya
          </p>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/brightiyahen"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-800 hover:bg-slate-700 transition px-6 py-4 rounded-2xl w-full max-w-xl"
        >
          <p className="text-sm text-slate-400">
            LinkedIn
          </p>

          <p className="text-lg font-semibold break-all">
            linkedin.com/in/brightiyahen
          </p>
        </a>

      </div>

    </section>
  )
}

export default Contact