import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO/SEO"
import PrivacyPolicy from "../components/Legal/Privacy"
const Privacy = () => {
  return (
    <Layout>
      <SEO title="About" />
      <PrivacyPolicy/>
    </Layout>
  )
}

export default Privacy
