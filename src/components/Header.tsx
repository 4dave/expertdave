import React, { useEffect, useState } from "react"
import Dark from "../assets/dark.svg"
import Light from "../assets/light.svg"

type Props = {
  menuOpen: boolean
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Header({ menuOpen, setMenuOpen }: Props) {
  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
    localStorage.setItem("theme", newTheme)
  }

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "dark"
    document.documentElement.classList.toggle("dark", storedTheme === "dark")
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-12 w-full bg-nav shadow-md text-primary">
      <div className="mx-auto flex h-full w-full items-center justify-between px-4 lg:max-w-7xl">
        <a
          href="#"
          className="font-medium text-xl tracking-wide flex items-center gap-2"
        >
          <span className="text-4xl">🦸‍♂️</span>
          <span>ExpertDave</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden gap-8 text-md sm:flex">
          <span onClick={toggleTheme}>
            <img
              src={theme === "dark" ? Light : Dark}
              alt="theme icon"
              className="h-6 w-6 cursor-pointer"
            />
          </span>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>

        {/* Hamburger icon (visible on small screens) */}
        <button
          className="sm:hidden text-primary focus:outline-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute left-0 top-12 w-full bg-nav shadow-md sm:hidden">
          <nav className="flex flex-col space-y-2 gap-4 px-4 py-6 text-xl text-primary text-center">
            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="hover:underline"
            >
              Projects
            </a>
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="hover:underline"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:underline"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
