import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO/SEO"
import TermRider from '../components/Legal/Termsrider'
import Quicklink from "../components/Home/Quicklink"

const Terms = () => {
  return (
    <Layout>
      <SEO title="About" />
      <TermRider/>
      <Quicklink/>
    </Layout>
  )
}

export default Terms
