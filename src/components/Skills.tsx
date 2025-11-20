import { motion } from "framer-motion"
import { TechBadge } from "@/components/TechBadge"

type Category = {
  name: string
  skills: string[]
}

const categories: Category[] = [
  {
    name: "Frontend",
    skills: [
      "React",
      "React Query",
      "Next.js",
      "Tailwind CSS",
      "HTML5",
      "CSS",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    name: "Backend & APIs",
    skills: ["Node.js", "Go", "Python", "REST APIs"],
  },
  {
    name: "Cloud, Infra & DevOps",
    skills: ["Google Cloud", "Vercel", "Docker", "Kubernetes", "Nginx", "F5"],
  },
  {
    name: "Databases & Caching",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Firebase"],
  },
  {
    name: "Tools & Workflow",
    skills: [
      "npm",
      "pnpm",
      "GitHub",
      "VS Code",
      "Cursor",
      "Postman / Insomnia",
    ],
  },
  {
    name: "AI & LLMs",
    skills: ["Claude (LLM)", "MCP"],
  },
]

function Skills() {
  return (
    <div className="grid gap-6 md:gap-8 md:grid-cols-2">
      {categories.map((category, index) => (
        <motion.div
          key={category.name}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: index * 0.06 }}
          className="group rounded-2xl bg-linear-to-r from-primary/50 via-sky-500/40 to-purple-500/40 p-px
                     hover:from-primary/80 hover:via-sky-500/70 hover:to-purple-500/70 transition-colors duration-300"
        >
          <div
            className="h-full rounded-2xl border border-border-nav bg-main/90 p-5 shadow-sm
                       group-hover:shadow-[0_0_25px_rgba(96,165,250,0.45)]
                       transition-shadow duration-300"
          >
            <h3 className="mb-3 text-lg font-semibold text-primary">
              {category.name}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skillName) => (
                <TechBadge
                  key={skillName}
                  name={skillName}
                  size="md"
                  className="px-3 py-1"
                />
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default Skills
