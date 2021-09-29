import * as React from "react"
import { Link, animateScroll as scroll } from "react-scroll"

interface Props {
  onClick: () => void
  to: string
  offset: number
  name: string
}

export const NavLinkItem: React.FC<Props> = ({ onClick, to, offset, name }) => {
  return (
    <li className="navbar__item">
      <Link
        onClick={onClick}
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        offset={offset}
        duration={500}
      >
        {name}
      </Link>
    </li>
  )
}
