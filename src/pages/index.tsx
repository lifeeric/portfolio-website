import * as React from "react"
import { Layout } from "../layout/Layout"
import { graphql } from "gatsby"
import { SEO } from "../components/SEO/SEO"

export default () => {
  return (
    <>
      <SEO />
      <Layout />
    </>
  )
}
