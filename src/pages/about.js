import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
const about = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" />
      <StyledHero img={data.aboutBcg.childImageSharp.fluid} />
    </Layout>
  )
}
export const query = graphql`
  query {
    aboutBcg: file(relativePath: { eq: "defaultBcg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default about
