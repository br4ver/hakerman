import React  from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Helps from "../components/Help/Helps"
import { graphql } from "gatsby"

const help = ({ data }) => {


    return (
      <Layout>
        <StyledHero img={data.helpBg.childImageSharp.fluid} />
        <Helps />
      </Layout>
    )
  }

export const query = graphql`
  query {
    helpBg: file(relativePath: { eq: "help.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default help

