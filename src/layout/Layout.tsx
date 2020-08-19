import * as React from "react"
import { Header } from "../components/Header/Header"
import { Home } from "../sections/Home/Home"
import { Projects } from "../sections/Projects/Projects"
import { Skill } from "../sections/Skills/Skill"
import { Contact } from "../sections/Contact/Contact"
import { Footer } from "../components/Footer/Footer"

import "./Layout.scss"

export const Layout: React.FC = () => {
  return (
    <main className="main__container">
      <Header />
      <Home />
      <Projects />
      <Skill />
      <Contact />
      <Footer />
    </main>
  )
}
