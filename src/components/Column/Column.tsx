import React from "react"

import "./Column.scss"

interface Props {
  children: React.ReactChild[] | React.ReactChild
}

const Column = (props: Props) => {
  return <div className="col">{props.children}</div>
}

export default Column
