import { motion } from "framer-motion"
import type { FunctionComponent, SVGProps } from "react"
import { useState } from "react"
import { projects } from "@/data/projectsData"
import { TechBadge } from "@/components/TechBadge"

import GithubIcon from "@/assets/icons/github.svg?react"

type SvgIcon = FunctionComponent<SVGProps<SVGSVGElement>>

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

type ProjectCardProps = {
  project: (typeof projects)[number]
  index: number
}

function ProjectCard({ project: proj, index }: ProjectCardProps) {
  const [desktopLoaded, setDesktopLoaded] = useState(false)
  const [mobileLoaded, setMobileLoaded] = useState(false)

  return (
    <motion.div
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
        {/* Screenshot area: desktop square + mobile phone overlay */}
        {(proj.desktopScreenshot || proj.mobileScreenshot) && (
          <div className="mb-4 pb-6">
            {/* <div className="relative"> */}
            <div className="relative mx-auto">
              {/* Desktop preview */}
              {proj.desktopScreenshot && (
                <div className="overflow-hidden rounded-xl border border-border-nav/50 bg-linear-to-tr from-primary/30 via-background/40 to-purple-500/40">
                  <div className="relative aspect-video">
                    {/* <DesktopPlaceholder /> */}
                    <img
                      src={proj.desktopScreenshot}
                      alt={`${proj.title} desktop screenshot`}
                      onLoad={() => setDesktopLoaded(true)}
                      className={[
                        desktopLoaded
                          ? "blur-0 opacity-100 scale-100"
                          : "blur-md opacity-80 scale-[1.02]",
                      ].join(" ")}
                    />
                    {/* gradient overlay over desktop */}
                    <div
                      className="pointer-events-none absolute inset-0
                                 bg-linear-to-t from-main/90 via-main/10 to-transparent
                                 mix-blend-multiply opacity-80
                                 group-hover:opacity-60 transition-opacity duration-300"
                    />
                  </div>
                </div>
              )}

              {/* Mobile phone preview (overlapping bottom-right) */}
              {proj.mobileScreenshot && (
                <div
                  className="absolute -bottom-4 right-3 w-24 xs:w-24 sm:w-28 md:w-32
                             aspect-9/16 overflow-hidden rounded-2xl border border-border-nav/70 
                             bg-main/95 shadow-xl
                             group-hover:translate-y-1 group-hover:translate-x-0.5
                             transition-transform duration-300"
                >
                  <div className="relative h-full w-full aspect-9/16">
                    <img
                      src={proj.mobileScreenshot}
                      alt={`${proj.title} mobile screenshot`}
                      onLoad={() => setMobileLoaded(true)}
                      className={[
                        "h-full w-full object-cover transition-all duration-500 ease-out",
                        mobileLoaded
                          ? "blur-0 opacity-100 scale-100"
                          : "blur-md opacity-80 scale-[1.02]",
                      ].join(" ")}
                    />
                    <div
                      className="pointer-events-none absolute inset-0 
                                 bg-linear-to-t from-main/95 via-main/10 to-transparent
                                 opacity-80 group-hover:opacity-60 transition-opacity duration-300"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Title + description */}
        <h3 className="text-xl font-semibold mb-2 text-primary">
          {proj.title}
        </h3>

        <p className="text-primary/80 text-sm mb-4">{proj.description}</p>

        {/* Tech tags */}
        <div className="mt-auto flex flex-wrap gap-2">
          {proj.tech.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>

        {/* Buttons row */}
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={proj.demoUrl ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
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
            rel="noopener noreferrer"
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
  )
}

function Projects() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {projects.map((proj, index) => (
        <ProjectCard key={proj.title} project={proj} index={index} />
      ))}
    </div>
  )
}

export default Projects
