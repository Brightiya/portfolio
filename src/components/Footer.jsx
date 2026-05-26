function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 px-6 py-12">

      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Brand */}
          <div className="text-center md:text-left">

            <h2 className="text-3xl font-black">
              Bright<span className="text-blue-400">.dev</span>
            </h2>

            <p className="text-slate-400 mt-3 max-w-md leading-7">
              Backend developer focused on scalable systems,
              artificial intelligence and modern web applications.
            </p>

          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">

            {/* GitHub */}
            <a
              href="https://github.com/Brightiya"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-blue-600 transition p-4 rounded-2xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.648.5.5 5.648.5 12a11.5 11.5 0 008 10.938c.6.112.82-.262.82-.582 0-.287-.01-1.047-.016-2.055-3.252.707-3.938-1.567-3.938-1.567-.532-1.352-1.298-1.713-1.298-1.713-1.06-.725.08-.71.08-.71 1.172.082 1.788 1.203 1.788 1.203 1.04 1.782 2.73 1.268 3.396.97.105-.753.407-1.268.74-1.56-2.595-.295-5.325-1.298-5.325-5.777 0-1.276.456-2.32 1.203-3.14-.12-.296-.52-1.487.114-3.1 0 0 .982-.314 3.218 1.2A11.21 11.21 0 0112 6.095c.992.005 1.99.134 2.923.393 2.234-1.514 3.214-1.2 3.214-1.2.636 1.613.236 2.804.116 3.1.75.82 1.2 1.864 1.2 3.14 0 4.49-2.734 5.478-5.337 5.767.418.36.79 1.096.79 2.21 0 1.595-.014 2.88-.014 3.272 0 .322.216.698.824.58A11.502 11.502 0 0023.5 12C23.5 5.648 18.352.5 12 .5z"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/brightiyahen"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-blue-600 transition p-4 rounded-2xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5C4.98 4.604 4.104 5.5 3 5.5S1.02 4.604 1.02 3.5C1.02 2.396 1.896 1.5 3 1.5s1.98.896 1.98 2zM1.5 8h3V22h-3V8zm7.5 0h2.877v1.917h.041c.4-.758 1.377-1.558 2.835-1.558 3.033 0 3.592 1.996 3.592 4.59V22h-3v-7.29c0-1.74-.03-3.978-2.424-3.978-2.426 0-2.797 1.894-2.797 3.85V22h-3V8z"/>
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:fastmind667@gmail.com"
              className="bg-slate-800 hover:bg-blue-600 transition p-4 rounded-2xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M2 4h20a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v.01L12 13 22 6.01V6H2zm20 12V8.236l-9.445 6.61a1 1 0 01-1.11 0L2 8.236V18h20z"/>
              </svg>
            </a>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">

          <p>
            &copy; {new Date().getFullYear()} Bright.dev. All rights reserved.
          </p>

          <div className="flex gap-6">

            <a
              href="#about"
              className="hover:text-white transition"
            >
              About
            </a>

            <a
              href="#projects"
              className="hover:text-white transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="hover:text-white transition"
            >
              Contact
            </a>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer