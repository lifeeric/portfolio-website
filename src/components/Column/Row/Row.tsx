import React from "react"

import "./Row.scss"

interface Props {
  children: React.ReactChild | React.ReactChild[]
  reverse?: string
}

const Row = (props: Props) => {
  return <div className={`row ${props.reverse}`}>{props.children}</div>
}

export default Row
