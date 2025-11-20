import type { FunctionComponent, SVGProps } from "react"

// FRONTEND
import ReactIcon from "@/assets/icons/react.svg?react"
import ReactQueryIcon from "@/assets/icons/react-query.svg?react"
import NextIcon from "@/assets/icons/nextjs.svg?react"
import TailwindIcon from "@/assets/icons/tailwindcss.svg?react"
import HtmlIcon from "@/assets/icons/html5.svg?react"
import CssIcon from "@/assets/icons/css.svg?react"
import JavascriptIcon from "@/assets/icons/javascript.svg?react"
import TypescriptIcon from "@/assets/icons/typescript.svg?react"
import ViteIcon from "@/assets/icons/vite.svg?react"

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

export type SvgIcon = FunctionComponent<SVGProps<SVGSVGElement>>

export type TechItem = {
  name: string
  Icon: SvgIcon
  color: string
  lightModeFix?: boolean
}

export const techData: Record<string, TechItem> = {
  // Frontend
  React: { name: "React", Icon: ReactIcon, color: "#61DAFB", lightModeFix: true },
  "React Query": { name: "React Query", Icon: ReactQueryIcon, color: "#FF4154" },
  Nextjs: { name: "Next.js", Icon: NextIcon, color: "#000000" },
  "Next.js": { name: "Next.js", Icon: NextIcon, color: "#000000" }, // Alias
  Tailwind: { name: "Tailwind CSS", Icon: TailwindIcon, color: "#38BDF8" },
  "Tailwind CSS": { name: "Tailwind CSS", Icon: TailwindIcon, color: "#38BDF8" }, // Alias
  HTML5: { name: "HTML5", Icon: HtmlIcon, color: "#E44D26" },
  CSS: { name: "CSS", Icon: CssIcon, color: "#1572B6" },
  JavaScript: { name: "JavaScript", Icon: JavascriptIcon, color: "#F7DF1E", lightModeFix: true },
  TypeScript: { name: "TypeScript", Icon: TypescriptIcon, color: "#3178C6" },
  Typescript: { name: "TypeScript", Icon: TypescriptIcon, color: "#3178C6" }, // Alias
  Vite: { name: "Vite", Icon: ViteIcon, color: "#646CFF" },

  // Backend
  "Node.js": { name: "Node.js", Icon: NodeIcon, color: "#3C873A" },
  Go: { name: "Go", Icon: GoIcon, color: "#00ADD8" },
  Python: { name: "Python", Icon: PythonIcon, color: "#3776AB" },
  "REST APIs": { name: "REST APIs", Icon: SwaggerIcon, color: "#85EA2D", lightModeFix: true },
  "REST API": { name: "REST APIs", Icon: SwaggerIcon, color: "#85EA2D", lightModeFix: true }, // Alias

  // Cloud
  "Google Cloud": { name: "Google Cloud", Icon: GcpIcon, color: "#4285F4" },
  Vercel: { name: "Vercel", Icon: VercelIcon, color: "#000000" },
  Docker: { name: "Docker", Icon: DockerIcon, color: "#0DB7ED" },
  Kubernetes: { name: "Kubernetes", Icon: KubernetesIcon, color: "#326CE5" },
  Nginx: { name: "Nginx", Icon: NginxIcon, color: "#009639" },
  F5: { name: "F5", Icon: F5Icon, color: "#E60012" },

  // DB
  PostgreSQL: { name: "PostgreSQL", Icon: PostgresIcon, color: "#336791" },
  MongoDB: { name: "MongoDB", Icon: MongoIcon, color: "#47A248" },
  Redis: { name: "Redis", Icon: RedisIcon, color: "#DC382D" },
  Firebase: { name: "Firebase", Icon: FirebaseIcon, color: "#FFCA28" },

  // Tools
  npm: { name: "npm", Icon: NpmIcon, color: "#CB3837" },
  pnpm: { name: "pnpm", Icon: PnpmIcon, color: "#F69220" },
  GitHub: { name: "GitHub", Icon: GithubIcon, color: "#181717" },
  "VS Code": { name: "VS Code", Icon: VscodeIcon, color: "#007ACC" },
  Cursor: { name: "Cursor", Icon: CursorIcon, color: "#5B5BFF" },
  "Postman / Insomnia": { name: "Postman / Insomnia", Icon: PostmanIcon, color: "#FF6C37" },

  // AI
  "Claude (LLM)": { name: "Claude (LLM)", Icon: ClaudeIcon, color: "#C69B7B" },
  MCP: { name: "MCP", Icon: McpIcon, color: "#9A66FF" },
}

export function getTechData(key: string): TechItem | undefined {
  return techData[key]
}
