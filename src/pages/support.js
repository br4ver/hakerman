import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Contact from "../components/Contact/Contact"
import SEO from "../components/SEO/SEO"
import Quicklink from "../components/Home/Quicklink"


const contact = ({data}) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Contact />
      <Quicklink />
    </Layout>
  )
}
export const query = graphql`
  query {
    contactBcg: file(relativePath: { eq: "defaultBcg.webp" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default contact
