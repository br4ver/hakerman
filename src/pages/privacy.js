import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO/SEO"
import PrivacyPolicy from "../components/Legal/Privacy"
import Quicklink from "../components/Home/Quicklink"

const Privacy = () => {
  return (
    <Layout>
      <SEO title="About" />
      <PrivacyPolicy/>
      <Quicklink/>
    </Layout>
  )
}

export default Privacy
