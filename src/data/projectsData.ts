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
    codeUrl: "https://github.com/4dave/expertdave",
    demoUrl: "https://expertdave.vercel.app/",
  },
  {
    title: "Begin: Task Manager App",
    description:
      "A task tracking application with Firebase integration for real-time updates and user authentication.",
    tech: ["Google", "Firebase"],
    desktopScreenshot: "/screenshots/chores-desktop.png",
    mobileScreenshot: "/screenshots/chores-mobile.png",
    codeUrl: "https://github.com/4dave/chores",
    demoUrl: "https://begin.vercel.app/",
  },
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
    codeUrl: "https://github.com/4dave/corralio",
    demoUrl: "https://corralio.vercel.app/",
  },
]
