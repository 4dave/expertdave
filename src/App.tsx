import { useRef, useState } from "react"
import Header from "./components/Header"
import Projects from "./components/Projects"

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
            <h1 className="text-3xl sm:text-4xl font-semibold">
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
          className="min-h-screen px-4 py-24 max-w-5xl mx-auto snap-start"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Contact</h2>
          <p className="text-primary/80">
            Contact info or a simple form goes here.
          </p>
        </section>
      </main>
    </div>
  )
}
