import * as React from "react"
import { useState } from "react"
import { NavLinkItem } from "./NavLinkItem/NavLinkItem"

import "./Navbar.scss"

const links = [
  {
    to: "home",
    offset: -120,
    name: "Me",
  },
  {
    to: "project",
    offset: -70,
    name: "Projects",
  },
  {
    to: "skill",
    offset: -70,
    name: "Skills",
  },
  {
    to: "contact",
    offset: -70,
    name: "Contact",
  },
]

export const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false)

  // Menu Toggler
  const menuToggleHandler = (): void => {
    setToggle(toggle => !toggle)
  }

  const closeToggleHandler = (): void => {
    setToggle(false)
    console.log(toggle)
  }

  return (
    <>
      <div className="toggle">
        <div className="toggle_right" onClick={menuToggleHandler}>
          <div className="toggle__dots">
            <div className="toggle__dot--1"></div>
            <div className="toggle__dot--2"></div>
            <div className="toggle__dot--3"></div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className={`navbar ${toggle && `showMenu`}`}>
        <span className="navbar__close" onClick={menuToggleHandler}></span>
        <ul className="navbar__list">
          {links.map(link => (
            <NavLinkItem key={link.to} {...link} onClick={closeToggleHandler} />
          ))}
        </ul>
      </nav>
    </>
  )
}
