import * as React from "react"
import { ProjectItem } from "../../components/ProjectItem/ProjectItem"

import "./Projects.scss"

export const Projects: React.FC = () => {
  // project data
  const projectData = [
    {
      name: "Lab's Mangament system",
      git: "https://github.com/lifeeric/labs",
      live: "https://zamalab.com",
      image: "zamalab.png",
    },
    {
      name: "Github User finder",
      git: "https://github.com/lifeeric/github-user-finder",
      live: "https://userfinder.netlify.app/",
      image: "github2.png",
    },
    {
      name: "Automate React Component",
      git: "https://github.com/lifeeric/Automate-React-Component",
      live: "https://github.com/lifeeric/Automate-React-Component",
      image: "arc.jpg",
    },
    {
      name: "My Portfolio",
      git: "https://github.com/lifeeric/portfolio-website",
      live: "https://ericgit.me",
      image: "my.png",
    },
    {
      name: "NPM package (darkmode)",
      git: "https://www.npmjs.com/package/react-darkmode-toggler",
      live: "https://lifeeric.github.io/react-darkmode-toggler/",
      image: "dark.png",
    },
    {
      name: "Portfolio Template ",
      git: "https://github.com/lifeeric/portfolio-using-gatsby",
      live: "https://portfolio-using-gatsby-ogppdn4l3-lifeeric.vercel.app/",
      image: "p1.png",
    },
    {
      name: "Covid-19 Tracker",
      git: "https://github.com/lifeeric/covid-19-tracker",
      live: "https://covid-19-tacker.herokuapp.com/",
      image: "Covid-19.png",
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
