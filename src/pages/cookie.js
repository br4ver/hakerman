import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Cookies from "../components/Legal/Cookie"
const Cookie = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Cookies/>
    </Layout>
  )
}

export default Cookie
