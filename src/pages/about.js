import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO/SEO"
import Aboutus from '../components/aboutus'
import StyledHero from "../components/StyledHero"

const about = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" content="blah blah blah" />
      <Aboutus />
    </Layout>
  )
}
export const query = graphql`
  query {
    aboutusImage: file(relativePath: { eq: "as2.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default about
