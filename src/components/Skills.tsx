// ===== SVG IMPORTS (note the ?react suffix) =====
// FRONTEND
import ReactIcon from "@/assets/icons/react.svg?react"
import ReactQueryIcon from "@/assets/icons/react-query.svg?react"
import NextIcon from "@/assets/icons/nextjs.svg?react"
import TailwindIcon from "@/assets/icons/tailwindcss.svg?react"
import HtmlIcon from "@/assets/icons/html5.svg?react"
import CssIcon from "@/assets/icons/css.svg?react"
import Javascript from "@/assets/icons/javascript.svg?react"
import Typescript from "@/assets/icons/typescript.svg?react"

// BACKEND & API
import NodeIcon from "@/assets/icons/nodejs.svg?react"
import GoIcon from "@/assets/icons/go.svg?react"
import PythonIcon from "@/assets/icons/python.svg?react"
import SwaggerIcon from "@/assets/icons/swagger.svg?react"

// CLOUD & DEVOPS
import GcpIcon from "@/assets/icons/gcp.svg?react"
import VercelIcon from "@/assets/icons/vercel.svg?react"
import DockerIcon from "@/assets/icons/docker.svg?react"
import KubernetesIcon from "@/assets/icons/kubernetes.svg?react"
import NginxIcon from "@/assets/icons/nginx.svg?react"
import F5Icon from "@/assets/icons/f5.svg?react"

// DATABASES
import PostgresIcon from "@/assets/icons/postgresql.svg?react"
import MongoIcon from "@/assets/icons/mongodb.svg?react"
import RedisIcon from "@/assets/icons/redis.svg?react"
import FirebaseIcon from "@/assets/icons/firebase.svg?react"

// TOOLS
import NpmIcon from "@/assets/icons/npm.svg?react"
import PnpmIcon from "@/assets/icons/pnpm.svg?react"
import GithubIcon from "@/assets/icons/github.svg?react"
import VscodeIcon from "@/assets/icons/vscode.svg?react"
import CursorIcon from "@/assets/icons/cursor.svg?react"
import PostmanIcon from "@/assets/icons/postman.svg?react"

// AI / LLM
import ClaudeIcon from "@/assets/icons/claude.svg?react"
import McpIcon from "@/assets/icons/mcp.svg?react"

import type { FunctionComponent, SVGProps } from "react"
import { motion } from "framer-motion"

type SvgIcon = FunctionComponent<SVGProps<SVGSVGElement>>

type Skill = {
  name: string
  Icon: SvgIcon
  color: string
  lightModeFix?: boolean
}

type Category = {
  name: string
  skills: Skill[]
}

const categories: Category[] = [
  {
    name: "Frontend",
    skills: [
      { name: "React", Icon: ReactIcon, color: "#61DAFB", lightModeFix: true },
      { name: "React Query", Icon: ReactQueryIcon, color: "#FF4154" },
      { name: "Next.js", Icon: NextIcon, color: "#000000" },
      { name: "Tailwind CSS", Icon: TailwindIcon, color: "#38BDF8" },
      { name: "HTML5", Icon: HtmlIcon, color: "#E44D26" },
      { name: "CSS", Icon: CssIcon, color: "#1572B6" },
      {
        name: "JavaScript",
        Icon: Javascript,
        color: "#F7DF1E",
        lightModeFix: true,
      },
      { name: "TypeScript", Icon: Typescript, color: "#3178C6" },
    ],
  },
  {
    name: "Backend & APIs",
    skills: [
      { name: "Node.js", Icon: NodeIcon, color: "#3C873A" },
      { name: "Go", Icon: GoIcon, color: "#00ADD8" },
      { name: "Python", Icon: PythonIcon, color: "#3776AB" },
      {
        name: "REST APIs",
        Icon: SwaggerIcon,
        color: "#85EA2D",
        lightModeFix: true,
      },
    ],
  },
  {
    name: "Cloud, Infra & DevOps",
    skills: [
      { name: "Google Cloud", Icon: GcpIcon, color: "#4285F4" },
      { name: "Vercel", Icon: VercelIcon, color: "#000000" },
      { name: "Docker", Icon: DockerIcon, color: "#0DB7ED" },
      { name: "Kubernetes", Icon: KubernetesIcon, color: "#326CE5" },
      { name: "Nginx", Icon: NginxIcon, color: "#009639" },
      { name: "F5", Icon: F5Icon, color: "#E60012" },
    ],
  },
  {
    name: "Databases & Caching",
    skills: [
      { name: "PostgreSQL", Icon: PostgresIcon, color: "#336791" },
      { name: "MongoDB", Icon: MongoIcon, color: "#47A248" },
      { name: "Redis", Icon: RedisIcon, color: "#DC382D" },
      { name: "Firebase", Icon: FirebaseIcon, color: "#FFCA28" },
    ],
  },
  {
    name: "Tools & Workflow",
    skills: [
      { name: "npm", Icon: NpmIcon, color: "#CB3837" },
      { name: "pnpm", Icon: PnpmIcon, color: "#F69220" },
      { name: "GitHub", Icon: GithubIcon, color: "#181717" },
      { name: "VS Code", Icon: VscodeIcon, color: "#007ACC" },
      { name: "Cursor", Icon: CursorIcon, color: "#5B5BFF" },
      { name: "Postman / Insomnia", Icon: PostmanIcon, color: "#FF6C37" },
    ],
  },
  {
    name: "AI & LLMs",
    skills: [
      { name: "Claude (LLM)", Icon: ClaudeIcon, color: "#C69B7B" },
      { name: "MCP", Icon: McpIcon, color: "#9A66FF" },
    ],
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
              {category.skills.map(({ name, Icon, color, lightModeFix }) => (
                <div
                  key={name}
                  className="group/skill inline-flex items-center gap-2 rounded-full border border-border-nav/70 bg-background/80 
                             px-3 py-1 text-xs sm:text-sm
                             hover:border-primary/60 hover:bg-background/95 hover:-translate-y-px 
                             transition-all duration-150 "
                >
                  <Icon
                    className={`h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-150
              group-hover/skill:scale-110
              ${lightModeFix ? "light-icon-fix" : ""}`}
                    style={{
                      fill: color,
                    }}
                  />
                  <span className="text-primary/90">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default Skills
