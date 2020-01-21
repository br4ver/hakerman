import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO/SEO"
import Aboutus from '../components/aboutus'
import Quicklink from "../components/Home/Quicklink"

const about = () => {
  return (
    <Layout>
      <SEO title="Blog" content="blah blah blah" />
      <Aboutus />
      <Quicklink />
    </Layout>
  )
}

export default about
