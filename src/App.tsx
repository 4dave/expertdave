import { useState } from "react"
import Header from "./components/Header"
import Home from "./components/Home"

export default function PortfolioLayout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-main pt-12">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
    </div>
  )
}
