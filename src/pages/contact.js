import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Contact from "../components/Contact/Contact"

const contact = ({data}) => {
  return (
    <Layout>
    <StyledHero img={data.contactBcg.childImageSharp.fluid}/>
    <Contact/>
    </Layout>
    )
}
export const query = graphql`
  query {
    contactBcg: file(relativePath: { eq: "defaultBcg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default contact
