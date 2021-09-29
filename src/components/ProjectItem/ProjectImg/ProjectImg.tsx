import * as React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

interface Props {
  src: string
  queryVariables?: any
}

function renderImage(file: any) {
  // console.log(file, ' Node')
  return <Img fixed={file.node.childImageSharp.fixed} />
}

export const ProjectImg: React.FC<Props> = ({ src }) => {
  // fetching projects' images
  // console.log(src, " => img")
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile(
            filter: { extension: { regex: "/jpeg|jpg|png|gif/" } }
          ) {
            edges {
              node {
                extension
                relativePath
                childImageSharp {
                  fixed(width: 408, height: 240) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      `}
      render={({ images }) =>
        renderImage(
          images.edges.find((image: any) => image.node.relativePath === src)
        )
      }
    />
  )
}
