import React from "react"
import Layout from "../components/Layout"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Info from "../components/Home/info"
import Scroll from "../components/Home/scrollindicator"
import Title from '../components/Home/superBanner'

export default ({ data }) => (
  <Layout>
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Title text="GOOD FOOD FOR EVERY MOOD"/>
      <Scroll />
    </StyledHero>
    <Services />
    <Info />
    <About />
  </Layout>
)

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
