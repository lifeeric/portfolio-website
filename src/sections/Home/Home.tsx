import * as React from "react"
import { Row, Column } from "../../components/Column"
import IconHome from "../../assets/home.inline.svg"
import Particles from "react-tsparticles"
import Img from "gatsby-image"

import "./Home.scss"

export const Home: React.FC = () => {
  return (
    <>
      {/* <Shape /> */}
      <div className="background-demo">
        <Row>
          <Column>
            <div className="home" id="home">
              <div className="home__intro">
                <h1 className="home__header">It’s Eric.</h1>
                <p className="home__role">
                  A Self-Taught{" "}
                  <span className="home__role--bold">full-stack engineer</span>
                </p>
                <p className="home__about">
                  A logical and creative thinker who enjoys learning new
                  languages, frameworks, and technologies in general. excited to
                  be part of the future of the technology industry with the
                  ability of all advance technology!
                </p>
              </div>
            </div>
          </Column>
          <Column>
            <div className="home home__end">
              <div className={`home__image`}>
                <IconHome />
              </div>
            </div>
          </Column>

          <div className="home__scrollicon"></div>
        </Row>

        {/** Particle */}
        <Particles
          id="tsparticles"
          options={{
            fpsLimit: 60,
            particles: {
              number: {
                value: 50,
                density: {
                  enable: true,
                  value_area: 1100,
                },
              },
              color: {
                value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"],
              },
              shape: {
                type: ["circle"],
                stroke: {
                  width: 0,
                  color: "#fff",
                },
                polygon: {
                  nb_sides: 5,
                },
              },
              opacity: {
                value: 1,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 8,
                random: true,
                anim: {
                  enable: false,
                  speed: 10,
                  size_min: 10,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#808080",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "grab",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 140,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 200,
                  size: 20,
                  duration: 2,
                  opacity: 2,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />
      </div>
    </>
  )
}
