import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO/SEO"
import Aboutus from '../components/aboutus'

const about = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" content="blah blah blah" />
      <Aboutus/>

    </Layout>
  )
}

export default about
