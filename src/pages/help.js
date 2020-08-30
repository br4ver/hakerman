import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Helps from "../components/Help/Helps"
import { graphql } from "gatsby"
import Title from "../components/Home/superBanner"
import Subscribe from "../components/Subscribe"
import Quicklink from "../components/Home/Quicklink"
const support = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.helpBg.childImageSharp.fluid}>
        <Title text="Frequently Asked Questions" />
      </StyledHero>
      <Helps />
      <Subscribe />
      <Quicklink />
    </Layout>
  )
}

export const query = graphql`
  query {
    helpBg: file(relativePath: { eq: "FAQ.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default support
