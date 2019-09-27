import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Posts from "../components/Posts/Posts"
import Banner from "../components/Banner"

const articles = ({data}) => {
  
  return (
    <Layout>
      <StyledHero img={data.blogBcg.childImageSharp.fluid}>
        <Banner
          title="Articles"
          info="Pork belly selvage microdosing subway tile quinoa street art. Celiac meditation roof party, lo-fi tacos viral keytar etsy venmo microdosing. IPhone kickstarter fashion axe craft beer raw denim palo santo retro. Hexagon hell of roof party, drinking vinegar kombucha disrupt kickstarter. Tumblr taiyaki etsy cliche.">
        </Banner>
      </StyledHero>
      <Posts />
    </Layout>
  )
}
export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "defaultBcg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default articles
