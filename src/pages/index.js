import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/Layout"
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from "../components/Home/Services"
import StyledHero from '../components/StyledHero'
import {graphql} from 'gatsby'
import FeaturePost from '../components/Home/FeaturedPost'

export default ({data}) => (

  <Layout>
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title="Money"
        info="Pork belly selvage microdosing subway tile quinoa street art. Celiac meditation roof party, lo-fi tacos viral keytar etsy venmo microdosing. IPhone kickstarter fashion axe craft beer raw denim palo santo retro. Hexagon hell of roof party, drinking vinegar kombucha disrupt kickstarter. Tumblr taiyaki etsy cliche.">
        <AniLink fade to="/" className="btn-white">
          More Info
        </AniLink>
      </Banner>      
    </StyledHero> 
    <Services/>
    <About />
    <FeaturePost/>
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