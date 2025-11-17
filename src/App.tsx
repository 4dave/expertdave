import { useRef, useState } from "react"
import Header from "./components/Header"
import Projects from "./components/Projects"
import ContactForm from "./components/ContactForm"
import Nerd from "./assets/nerd.png"

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const homeRef = useRef<HTMLDivElement | null>(null)
  const projectsRef = useRef<HTMLDivElement | null>(null)
  const aboutRef = useRef<HTMLDivElement | null>(null)
  const contactRef = useRef<HTMLDivElement | null>(null)

  function handleNavClick(section: "home" | "projects" | "about" | "contact") {
    const sectionMap = {
      home: homeRef,
      projects: projectsRef,
      about: aboutRef,
      contact: contactRef,
    } as const

    const targetRef = sectionMap[section]

    if (targetRef.current) {
      const y = targetRef.current.offsetTop // might need to subtract header height
      window.scrollTo({ top: y, behavior: "smooth" })
      setMenuOpen(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-main text-primary">
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onNavClick={handleNavClick}
      />

      <main className="flex-1">
        {/* HOME / HERO SECTION */}
        <section
          ref={homeRef}
          id="home"
          className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 snap-start"
        >
          <div className="max-w-3xl text-center space-y-4">
            <h1 className="text-4xl font-semibold">
              Hi, I&apos;m Dave. I build modern web apps.
            </h1>
            <p className="text-base sm:text-lg text-primary/80">
              Short intro about who you are, what you do, and what someone
              should do next (scroll to Projects, view your work, etc.).
            </p>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section
          ref={projectsRef}
          id="projects"
          className="min-h-screen px-4 py-24 max-w-6xl mx-auto snap-start"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Projects</h2>
          {/* Replace this with your real projects grid/list */}
          {/* <p className="text-primary/80">
            This is where your project cards or grid will go.
          </p> */}
          <Projects />
        </section>

        {/* ABOUT SECTION */}
        <section
          ref={aboutRef}
          id="about"
          className="min-h-screen px-4 py-24 max-w-5xl mx-auto snap-start"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">About</h2>

          <p className="text-primary/80">
            A short story about you, your background, and what you like to work
            on.
          </p>
        </section>

        {/* CONTACT SECTION */}
        <section
          ref={contactRef}
          id="contact"
          className="min-h-screen px-4 py-24 snap-start"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-primary">
                Contact
              </h2>
              <div className="mt-3 h-1 w-16 mx-auto rounded-full bg-primary/40" />
              <p className="mt-4 text-sm sm:text-base text-primary/70">
                Have a project in mind or just want to say hi? I usually reply
                within 1–2 business days.
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-2 items-start">
              {/* Left: illustration card */}
              <div className="relative">
                {/* soft glow behind the card */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-1 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(250,250,249,0.08),transparent_60%)]"
                />
                <div className="relative rounded-3xl border border-border-nav/60 bg-main/5 px-8 py-10 shadow-lg flex flex-col items-center gap-6 ">
                  <img
                    src={Nerd}
                    alt="Person at a computer"
                    // className="w-40 sm:w-48"
                    className="w-52 sm:w-60"
                  />
                  <div className="text-center space-y-2">
                    <p className="text-sm text-primary/70">
                      I&apos;m open to freelance work, collaborations, or just
                      chatting about web dev, React, and performance.
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-center gap-2 text-xs text-primary/60 ">
                    <span className="rounded-full border border-border-nav/50 px-3 py-1">
                      Frontend &amp; React
                    </span>
                    <span className="rounded-full border border-border-nav/50 px-3 py-1">
                      Full-stack projects
                    </span>
                    <span className="rounded-full border border-border-nav/50 px-3 py-1">
                      Lots More
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
