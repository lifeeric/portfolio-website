import * as React from "react"
import { FiExternalLink } from "react-icons/fi"
import { FaGithub } from "react-icons/fa"
import { ProjectImg } from "./ProjectImg/ProjectImg"

import "./ProjectItem.scss"

interface Props {
  name: string
  git: string
  live: string
  image: string
}

export const ProjectItem: React.FC<Props> = ({ image, name, live, git }) => {
  return (
    <div className="project__box">
      {/* {console.log(image, " => item")} */}
      <ProjectImg src={image} />
      <div className="project__body">
        <p className="project__header">{name}</p>
        <div className="project__source">
          <a target="_blank" href={git}>
            <FaGithub />
          </a>
          <a target="_blank" href={live}>
            <FiExternalLink />
          </a>
        </div>
      </div>
    </div>
  )
}
