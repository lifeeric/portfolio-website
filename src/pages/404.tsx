import * as React from "react"
import { Header } from "../components/Header/Header"
import { Footer } from "../components/Footer/Footer"

import Error from "../assets/error.inline.svg"

export default () => {
  const style = {
    maxWidth: "450px",
    width: "100%",
    height: "55vh",
    margin: 'auto',
    paddingTop: '150px'
  }
  return (
    <main className="main__container">
      <Header />
      <div style={style}>
        <Error />
      </div>
      <Footer />
    </main>
  )
}
