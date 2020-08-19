import * as React from "react"
import { IoMdCloseCircleOutline } from "react-icons/io"
import { FcApproval } from "react-icons/fc"

import "./Snackbar.scss"

interface Props {
  onClick: () => void
  message: string
  isOpen: boolean
}

export const Snackbar: React.FC<Props> = ({ onClick, message, isOpen }) => {
  return (
    <div className={`snackbar ${isOpen && "open"}`}>
      {message}
      <span className="snackbar__close" onClick={onClick}>
        <IoMdCloseCircleOutline />
      </span>
    </div>
  )
}
