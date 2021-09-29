import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Navbar } from "../Navbar/Navbar"

import "./Header.scss"

export const Header: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  console.log("IMAGE ", data)

  return (
    <header className="header">
      <div className="header__center">
        <div className="header__innerWidth">
          <div className="header__wrapper">
            <div className="header__logo">
              <Link to="/">
                <Img
                  fluid={data.file.childImageSharp.fluid}
                  alt="Eric Software Engineer || Hire expert Software engineer"
                />
              </Link>
            </div>
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  )
}
