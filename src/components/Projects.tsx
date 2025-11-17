function Projects() {
  const items = [
    {
      title: "Personal Portfolio",
      description:
        "A modern portfolio website built with React, Vite, and TailwindCSS showcasing my work and experience.",
      tech: ["React", "Vite", "Tailwind"],
    },
    {
      title: "Task Manager App",
      description:
        "A simple task tracking application with local storage persistence and a clean, responsive UI.",
      tech: ["React", "TypeScript"],
    },
    {
      title: "Weather Dashboard",
      description:
        "A weather dashboard that fetches live data from a public API and displays forecasts for multiple cities.",
      tech: ["JavaScript", "REST API"],
    },
    {
      title: "E-commerce Prototype",
      description:
        "A lightweight e-commerce prototype with product grids, filtering, and a mock checkout flow.",
      tech: ["React", "Tailwind", "Mock API"],
    },
  ]

  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {items.map((proj) => (
        <div
          key={proj.title}
          className="border border-border-nav rounded-xl p-6 bg-main shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
          <p className="text-primary/80 text-sm mb-4">{proj.description}</p>

          <div className="flex flex-wrap gap-2">
            {proj.tech.map((tech) => (
              <span
                key={tech}
                className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects
