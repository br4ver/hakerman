import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO/SEO"
import Term from '../components/Legal/Terms'
import Quicklink from "../components/Home/Quicklink"

const Terms = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Term/>
      <Quicklink/>
    </Layout>
  )
}

export default Terms
