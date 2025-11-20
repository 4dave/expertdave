import React, { useEffect, useState } from "react"
import Dark from "../assets/dark.svg"
import Light from "../assets/light.svg"
import Logo from "../assets/logo.png"
import { MenuIcon, XIcon } from "../lib/MenuIcons"

type Props = {
  menuOpen: boolean
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  // onNavClick: (section: "home" | "projects" | "contact") => void
  onNavClick: (section: SectionId) => void
}

const navItems = [
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const

type SectionId = (typeof navItems)[number]["id"]

export default function Header({ menuOpen, setMenuOpen, onNavClick }: Props) {
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
    <nav className="fixed top-0 left-0 right-0 z-10 shadow-lg bg-main">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-12 sm:h-16">
          <a href="/" className="flex items-center gap-2">
            <img
              src={Logo}
              alt="Logo"
              className="h-8 sm:h-12 hover:sepia"
            />
            <span className="font-medium text-2xl sm:text-4xl tracking-wider">
              Dave Fredkove
            </span>
          </a>
          <ul className="hidden sm:flex space-x-4">
            <span onClick={toggleTheme}>
              <img
                src={theme === "dark" ? Light : Dark}
                alt="theme icon"
                className="h-6 w-6 cursor-pointer"
              />
            </span>
            {navItems.map((item) => (
              <button
                key={item.id}
                className="cursor-pointer"
                onClick={() => onNavClick(item.id)}
              >
                {item.label}
              </button>
            ))}
          </ul>

          {/* Hamburger icon */}

          <div className="sm:hidden flex items-center gap-4">
            <span onClick={toggleTheme}>
              <img
                src={theme === "dark" ? Light : Dark}
                alt="theme icon"
                className="h-6 w-6 cursor-pointer"
              />
            </span>
            <button
              className="sm:hidden text-primary focus:outline-none cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close Menu" : "Open menu"}
            >
              {menuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>

          {/* Mobile dropdown */}
          {menuOpen && (
            <div className="absolute left-0 top-12 w-full bg-main shadow-md sm:hidden">
              <nav className="flex flex-col space-y-2 gap-4 px-4 py-6 text-xl text-primary text-center">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    className="hover:underline"
                    onClick={() => {
                      onNavClick(item.id)
                      setMenuOpen(false)
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
