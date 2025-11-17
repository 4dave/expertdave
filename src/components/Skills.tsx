// ===== SVG IMPORTS (note the ?react suffix) =====
// FRONTEND
import ReactIcon from "@/assets/icons/react.svg?react"
import ReactQueryIcon from "@/assets/icons/react-query.svg?react"
import NextIcon from "@/assets/icons/nextjs.svg?react"
import TailwindIcon from "@/assets/icons/tailwindcss.svg?react"
import HtmlIcon from "@/assets/icons/html5.svg?react"
import CssIcon from "@/assets/icons/css.svg?react"

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

// Optionally: define a type for clarity
import type { FunctionComponent, SVGProps } from "react"
type SvgIcon = FunctionComponent<SVGProps<SVGSVGElement>>

function Skills() {
  const categories: {
    name: string
    skills: { name: string; Icon: SvgIcon; color: string }[]
  }[] = [
    {
      name: "Frontend",
      skills: [
        { name: "React", Icon: ReactIcon, color: "#61DAFB" },
        { name: "React Query", Icon: ReactQueryIcon, color: "#FF4154" },
        { name: "Next.js", Icon: NextIcon, color: "#ffffff" },
        { name: "Tailwind CSS", Icon: TailwindIcon, color: "#38BDF8" },
        { name: "HTML5", Icon: HtmlIcon, color: "#E44D26" },
        { name: "CSS", Icon: CssIcon, color: "#1572B6" },
      ],
    },
    {
      name: "Backend & APIs",
      skills: [
        { name: "Node.js", Icon: NodeIcon, color: "#3C873A" },
        { name: "Go", Icon: GoIcon, color: "#00ADD8" },
        { name: "Python", Icon: PythonIcon, color: "#3776AB" },
        { name: "REST APIs", Icon: SwaggerIcon, color: "#85EA2D" },
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

  return (
    <div className="grid gap-6 md:gap-8 md:grid-cols-2">
      {categories.map((category) => (
        <div
          key={category.name}
          className="rounded-xl border border-border-nav bg-main/80 p-5 shadow-sm"
        >
          <h3 className="text-lg font-semibold mb-3 text-primary">
            {category.name}
          </h3>

          <div className="flex flex-wrap gap-3">
            {category.skills.map(({ name, Icon, color }) => (
              <div
                key={name}
                className="inline-flex items-center gap-2 rounded-full border border-border-nav/70 bg-background/80 px-3 py-1 text-xs sm:text-sm
             hover:border-primary/60 hover:bg-background/90 hover:-translate-y-px transition-all duration-150"
              >
                <Icon
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  style={{ fill: color }}
                />
                <span className="text-primary/90">{name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Skills
