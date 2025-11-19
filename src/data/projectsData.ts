// src/data/projectsData.ts

export type Project = {
  title: string
  description: string
  tech: string[]
  desktopScreenshot?: string
  mobileScreenshot?: string
  codeUrl?: string
  demoUrl?: string
}

export const projects: Project[] = [
  {
    title: "Personal Portfolio",
    description:
      "A modern portfolio website built with React, Vite, and TailwindCSS showcasing my work and experience.",
    tech: ["React", "Vite", "Tailwind"],
    desktopScreenshot: "/screenshots/portfolio-desktop.png",
    mobileScreenshot: "/screenshots/portfolio-mobile.png",
    codeUrl: "#",
    demoUrl: "#",
  },
  // {
  //   title: "Task Manager App",
  //   description:
  //     "A simple task tracking application with local storage persistence and a clean, responsive UI.",
  //   tech: ["React", "TypeScript"],
  //   desktopScreenshot: "/screenshots/task-desktop.png",
  //   mobileScreenshot: "/screenshots/task-mobile.png",
  //   codeUrl: "#",
  //   demoUrl: "#",
  // },
  // {
  //   title: "Weather Dashboard",
  //   description:
  //     "A weather dashboard that fetches live data from a public API and displays forecasts for multiple cities.",
  //   tech: ["JavaScript", "REST API"],
  //   desktopScreenshot: "/screenshots/weather-desktop.png",
  //   mobileScreenshot: "/screenshots/weather-mobile.png",
  //   codeUrl: "#",
  //   demoUrl: "#",
  // },
  {
    title: "Corralio Events",
    description:
      "An event planning application with New events, RSVP, emails, Login.",
    tech: ["React", "Tailwind", "Mock API"],
    desktopScreenshot: "/screenshots/corralio-desktop.png",
    mobileScreenshot: "/screenshots/corralio-mobile.png",
    codeUrl: "#",
    demoUrl: "#",
  },
]
