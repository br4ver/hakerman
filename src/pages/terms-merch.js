import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO/SEO"
import TermMerch from '../components/Legal/Termsmerch'
import Quicklink from "../components/Home/Quicklink"

const Terms = () => {
  return (
    <Layout>
      <SEO title="About" />
      <TermMerch/>
      <Quicklink/>
    </Layout>
  )
}

export default Terms
