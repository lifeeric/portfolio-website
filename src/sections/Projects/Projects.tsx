import * as React from "react"
import { ProjectItem } from "../../components/ProjectItem/ProjectItem"

import "./Projects.scss"

export const Projects: React.FC = () => {
  // project data
  const projectData = [
    {
      name: "Covid-19 Tracker",
      git: "https://github.com/lifeeric/covid-19-tracker",
      live: "https://covid-19-tacker.herokuapp.com/",
      image: "Covid-19.png",
    },
    {
      name: "Portfolio",
      git: "https://github.com/rstacruz/nprogress#customization",
      live: "",
      image: "project.jpg",
    },
  ]

  return (
    <div className="project" id="project">
      <div className="project__wide">
        <h1 className="project__name">My Projects </h1>

        <div className="project__container">
          <div className="project__grid">
            {projectData.map((data, i) => (
              <ProjectItem key={i} {...data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
