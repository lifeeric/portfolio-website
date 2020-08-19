import * as React from "react"
import { Navbar } from "../Navbar/Navbar"

import "./Header.scss"
import { Link } from "gatsby"

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__center">
        <div className="header__innerWidth">
          <div className="header__wrapper">
            <div className="header__logo">
              <Link to="/">eg</Link>
            </div>
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  )
}
