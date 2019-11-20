import React  from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Helps from "../components/Help/Helps"
import { graphql } from "gatsby"
import Title from "../components/Home/superBanner"
import Subscribe from '../components/Subscribe'
import Quicklinks from '../components/Home/Quicklinks'
const help = ({ data }) => {


    return (
      <Layout>
        <StyledHero img={data.helpBg.childImageSharp.fluid}>
          <Title text="Frequently Ask Questions" />
        </StyledHero>
        <Helps />
        <Subscribe/>
        <Quicklinks/>
      </Layout>
    )
  }

export const query = graphql`
  query {
    helpBg: file(relativePath: { eq: "help.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default help

