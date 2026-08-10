import { useRef, useState } from "react";
import Header from "./components/Header";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
// import FeedbackTab from "./components/FeedbackTab";
import Nerd from "./assets/nerd.png";
import Skills from "./components/Skills";
import { ScrollIndicator } from "./lib/Scrollindicator";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const homeRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  function handleNavClick(section: "home" | "skills" | "projects" | "contact") {
    const sectionMap = {
      home: homeRef,
      skills: skillsRef,
      projects: projectsRef,
      contact: contactRef,
    } as const;

    const targetRef = sectionMap[section];

    if (targetRef.current) {
      const y = targetRef.current.offsetTop;
      window.scrollTo({ top: y, behavior: "smooth" });
      setMenuOpen(false);
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-main text-primary">
      {/* <FeedbackTab />/ */}
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
          className="relative min-h-screen flex items-center justify-center px-4 snap-start"
        >
          <div className="max-w-3xl text-center space-y-4">
            <h1 className="text-4xl font-semibold">
              Hi, I&apos;m Dave. I&apos;m a Web Engineer.
            </h1>
            <p className="text-base sm:text-lg text-primary/80">
              I build full-stack web apps. UI, APIs, cloud systems, and
              AI-powered tooling—focused on speed, reliability, and creating
              products that genuinely help people.
            </p>
          </div>

          {/* Scroll Indicator (desktop only) */}
          <ScrollIndicator skillsRef={skillsRef} />
        </section>

        {/* skills section */}
        <section
          ref={skillsRef}
          id="skills"
          className="min-h-screen px-4 pt-24 max-w-6xl mx-auto flex flex-col items-center snap-start"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold">Skills</h2>
          <p className="text-primary/60 tracking-wide text-sm mb-4">
            some tools and tech I love to use 💜
          </p>
          <Skills />
        </section>

        {/* PROJECTS SECTION */}
        <section
          ref={projectsRef}
          id="projects"
          className="min-h-screen px-4 pt-24 max-w-6xl mx-auto flex flex-col items-center"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold">Projects</h2>
          <p className="text-primary/60 tracking-wide text-sm mb-4">
            some personal web projects I have deployed{" "}
            <span className="text-lg">🚀</span>
          </p>
          <Projects />
        </section>

        {/* CONTACT SECTION */}
        <section
          ref={contactRef}
          id="contact"
          className="min-h-screen  px-4 pt-24 max-w-6xl mx-auto flex flex-col items-center"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold">Contact</h2>
          <p className="text-primary/60 tracking-wide text-sm mb-4">
            connection is key. reach out to me{" "}
            <span className="text-lg">🙋🏻‍♂️</span>
          </p>

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
                  className="w-52 sm:w-60"
                />
                <div className="text-center space-y-2">
                  <p className="text-sm text-primary/70">
                    I&apos;d love to hear from you or answer any questions about
                    my work or interests! Just fill out the form here and I'll
                    get back to you ASAP.
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-2 text-xs text-primary/60 ">
                  <span className="rounded-full border border-border-nav/50 px-3 py-1">
                    UI / Front-End
                  </span>
                  <span className="rounded-full border border-border-nav/50 px-3 py-1">
                    Full-Stack Web Dev
                  </span>
                  <span className="rounded-full border border-border-nav/50 px-3 py-1">
                    AI-Driven UI (LLMs + MCP)
                  </span>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
