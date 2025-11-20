import { getTechData } from "@/data/techData"

type TechBadgeProps = {
  name: string
  className?: string
  showText?: boolean
  size?: "sm" | "md"
}

export function TechBadge({
  name,
  className = "",
  showText = true,
  size = "sm",
}: TechBadgeProps) {
  const tech = getTechData(name)

  if (!tech) {
    // Fallback for unknown tech
    return (
      <span
        className={`inline-flex items-center gap-1 rounded-full border border-border-nav/70 
                   bg-background/80 px-2.5 py-1 text-xs text-primary/90 ${className}`}
      >
        {name}
      </span>
    )
  }

  const { Icon, color, lightModeFix } = tech
  const iconSize = size === "sm" ? "h-3.5 w-3.5 sm:h-4 sm:w-4" : "h-4 w-4 sm:h-5 sm:w-5"
  const textSize = size === "sm" ? "text-[0.7rem] sm:text-xs" : "text-xs sm:text-sm"
  const padding = size === "sm" ? "px-2.5 py-1" : "px-3 py-1"

  return (
    <span
      className={`group/tech inline-flex items-center gap-1.5 rounded-full border border-border-nav/70 
                 bg-background/80 ${padding} ${textSize}
                 hover:border-primary/60 hover:bg-background/95 hover:-translate-y-px
                 transition-all duration-150 ${className}`}
    >
      <Icon
        className={`${iconSize} transition-transform duration-150 group-hover/tech:scale-110 ${
          lightModeFix ? "light-icon-fix" : ""
        }`}
        style={{
          fill: color,
          filter: "drop-shadow(0 0 3px rgba(255,255,255,0.35))",
        }}
      />
      {showText && <span className="text-primary/90">{tech.name}</span>}
    </span>
  )
}
