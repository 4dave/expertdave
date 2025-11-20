import type { RefObject } from "react"

// Helper for the scroll indicator click
export function handleScrollDown(skillsRef: RefObject<HTMLDivElement | null>) {
  if (skillsRef.current) {
    const y = skillsRef.current.offsetTop
    window.scrollTo({ top: y, behavior: "smooth" })
  }
}