export type Project = {
  title: string
  description: string
  tech: string[]
  screenshot?: string
  codeUrl?: string
  demoUrl?: string
}

export const projects: Project[] = [
  {
    title: "Personal Portfolio",
    description:
      "A modern portfolio website built with React, Vite, and TailwindCSS showcasing my work and experience.",
    tech: ["React", "Vite", "Tailwind"],
    screenshot: "/screenshots/portfolio.png", // update these paths to match your assets
    codeUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Task Manager App",
    description:
      "A simple task tracking application with local storage persistence and a clean, responsive UI.",
    tech: ["React", "TypeScript"],
    screenshot: "/screenshots/task-manager.png",
    codeUrl: "#",
    demoUrl: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather dashboard that fetches live data from a public API and displays forecasts for multiple cities.",
    tech: ["JavaScript", "REST API"],
    screenshot: "/screenshots/weather-dashboard.png",
    codeUrl: "#",
    demoUrl: "#",
  },
  {
    title: "E-commerce Prototype",
    description:
      "A lightweight e-commerce prototype with product grids, filtering, and a mock checkout flow.",
    tech: ["React", "Tailwind", "Mock API"],
    screenshot: "/screenshots/ecommerce.png",
    codeUrl: "#",
    demoUrl: "#",
  },
]
