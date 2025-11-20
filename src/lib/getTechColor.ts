export function getTechColor(tech: string): string {
  switch (tech) {
    case "React":
      return "#61DAFB"
    case "Tailwind":
      return "#38BDF8"
    case "Vite":
      return "#646CFF"
    case "Typescript":
      return "#3178c6"
    case "Nextjs":
      return "#000000"
    case "Firebase":
      return "#FFCA28"
    default:
      return "#ffffff"
  }
}
