import React from "react"
import Layout from "../components/Layout"
import Download from "../components/Home/Download"
import Services from "../components/Home/Services"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Info from "../components/Home/info"
import Scroll from "../components/Home/scrollindicator"
import Title from '../components/Home/superBanner'
import FeaturedPost from '../components/Home/FeaturedPost'
import SEO from "../components/SEO/SEO"
import Quicklinks from "../components/Home/Quicklinks"
export default ({ data }) => (
  <Layout>
    <SEO
      title={`gofer`}/>
      <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Title text="GOOD FOOD FOR EVERY MOOD" />
      <Scroll />
    </StyledHero>
    <Services />
    <Info />
    <Download />
    <FeaturedPost />
    <Quicklinks/>
  </Layout>
)

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg2.webp" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
