// src/components/Projects.tsx

import { motion } from "framer-motion"
import type { FunctionComponent, SVGProps } from "react"
import { projects } from "../data/projectsData"

// Reuse your SVG tech icons where you have them
import ReactIcon from "@/assets/icons/react.svg?react"
import TailwindIcon from "@/assets/icons/tailwindcss.svg?react"

// Use the same pattern as in Skills
type SvgIcon = FunctionComponent<SVGProps<SVGSVGElement>>

// Map tech labels to icons (extend this as you add more)
const techIconMap: Record<string, SvgIcon | undefined> = {
  React: ReactIcon,
  Tailwind: TailwindIcon,
  "Tailwind CSS": TailwindIcon,
}

// Simple inline external-link icon (no extra deps)
const ExternalLinkIcon: SvgIcon = (props) => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
    <path
      d="M11.25 3.75H16.25M16.25 3.75V8.75M16.25 3.75L9.5 10.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.25 4.75H5.75C4.64543 4.75 3.75 5.64543 3.75 6.75V14.25C3.75 15.3546 4.64543 16.25 5.75 16.25H13.25C14.3546 16.25 15.25 15.3546 15.25 14.25V10.75"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

// GitHub icon for buttons (you already use this in Skills)
import GithubIcon from "@/assets/icons/github.svg?react"

function Projects() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {projects.map((proj, index) => (
        <motion.div
          key={proj.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: index * 0.06 }}
          className="group rounded-2xl bg-linear-to-r from-primary/50 via-sky-500/40 to-purple-500/40 p-px
                     hover:from-primary/80 hover:via-sky-500/70 hover:to-purple-500/70 transition-colors duration-300"
        >
          <div
            className="h-full rounded-2xl border border-border-nav bg-main/90 p-6 shadow-sm
                       group-hover:shadow-[0_0_25px_rgba(96,165,250,0.45)]
                       transition-shadow duration-300 flex flex-col"
          >
            {/* Screenshot */}
            {proj.screenshot && (
              <div className="mb-4 overflow-hidden rounded-lg border border-border-nav/50 bg-background/40">
                <img
                  src={proj.screenshot}
                  alt={`${proj.title} screenshot`}
                  className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
            )}

            {/* Title + description */}
            <h3 className="text-xl font-semibold mb-2 text-primary">
              {proj.title}
            </h3>

            <p className="text-primary/80 text-sm mb-4">{proj.description}</p>

            {/* Tech tags */}
            <div className="mt-auto flex flex-wrap gap-2">
              {proj.tech.map((tech) => {
                const TechIcon = techIconMap[tech]

                return (
                  <span
                    key={tech}
                    className="group/tech inline-flex items-center gap-1 rounded-full border border-border-nav/70 
                               bg-background/80 px-2.5 py-1 text-[0.7rem] sm:text-xs
                               hover:border-primary/60 hover:bg-background/95 hover:-translate-y-px
                               transition-all duration-150"
                  >
                    {TechIcon && (
                      <TechIcon
                        className="h-3.5 w-3.5 sm:h-4 sm:w-4
                                   transition-transform duration-150
                                   group-hover/tech:scale-110"
                        style={{
                          fill:
                            tech === "React"
                              ? "#61DAFB"
                              : tech === "Tailwind" || tech === "Tailwind CSS"
                              ? "#38BDF8"
                              : "#ffffff",
                          filter: "drop-shadow(0 0 3px rgba(255,255,255,0.35))",
                        }}
                      />
                    )}
                    <span className="text-primary/90">{tech}</span>
                  </span>
                )
              })}
            </div>

            {/* Buttons row */}
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={proj.demoUrl ?? "#"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1 rounded-full bg-primary/10 px-4 py-1.5 
                           text-xs sm:text-sm text-primary hover:bg-primary/20 hover:-translate-y-px 
                           transition-all duration-150"
              >
                <ExternalLinkIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span>Live demo</span>
              </a>

              <a
                href={proj.codeUrl ?? "#"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1 rounded-full border border-primary/60 px-4 py-1.5 
                           text-xs sm:text-sm text-primary hover:bg-primary/10 hover:-translate-y-px 
                           transition-all duration-150"
              >
                <GithubIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span>View code</span>
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default Projects
