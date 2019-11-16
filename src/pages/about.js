import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import SEO from "../components/SEO/SEO"
import IceBear from '../images/Return of Craboo - San Diego Comic Con - We Bare Bears - Cartoon Network (online-video-cutter.com).mp4'
const about = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" />
      <StyledHero img={data.aboutBcg.childImageSharp.fluid} />
      <video
        className="video-player"
        height="100%"
        width="100%"
        loop
        muted
        autoPlay
      >
        <source src={IceBear} type="video/mp4" />
      </video>
    </Layout>
  )
}
export const query = graphql`
  query {
    aboutBcg: file(relativePath: { eq: "defaultBcg.webp" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default about
