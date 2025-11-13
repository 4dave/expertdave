import { useState } from "react"
import Header from "./components/Header"
import Home from "./components/Home"
// import HomeHero from "./components/Hero"

export default function PortfolioLayout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-main">
      {/* <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home /> */}
      <div className="bg-nav text-primary">
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      <div className="text-primary">
        <Home />
        {/* <HomeHero /> */}
      </div>
    </div>
  )
}
