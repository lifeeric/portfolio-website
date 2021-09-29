import * as React from "react"
import IconSkill from "../../assets/Developer2.inline.svg"
import { Row, Column } from "../../components/Column/"

import "./Skill.scss"

export const Skill: React.FC = () => {
  const tools = [
    " CSS3",
    " SCSS/SASS",
    " BEM",
    " Gatsby",
    " React",
    " React-router",
    " Redux",
    " Apollo/client",
    " Styled-components",
    " Material-UI",
    " Bootstrap",
    " TypeScript",
    " JavaScript/ES6+",
    " Babel",
    " Webpack",
    " Testing",
    " Jest/Enzyme",
    " Gulp",
    " Git/GitHub",
    " NodeJs",
    " ExpressJs",
    " MongoDB",
    " MySQL",
    " REST API",
    " GraphQL",
    " Python3",
    " Django",
    " FastAPI",
    " Apollo Server",
    " NPM/Yarn",
    " Shell/Bash",
    " Linux Expert",
    " Docker",
    " Nginx",
    " AWS Cloud",
    " Deployment",
    " WordPress",
    " Cpanel Configuration",
  ]

  return (
    <div className="skill" id="skill">
      <h1 className="skill__name">The technology I use</h1>
      <div className="skill__inner">
        <Row>
          <Column>
            <div className="skill__sets">
              {tools.map((tool, i) => (
                <div
                  key={tool}
                  style={{
                    background: i % 2 === 0 ? "#aaff00" : "",
                    color: i % 2 === 0 ? "#373f49" : "",
                  }}
                  className="skill__technology"
                >
                  {tool}
                </div>
              ))}
            </div>
          </Column>
          <Column>
            <div className="skill__sideimage">
              <IconSkill />
            </div>
          </Column>
        </Row>
      </div>
    </div>
  )
}
