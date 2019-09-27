import React, { Component } from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Partner from "../components/Contact/Partner"
import RiderServices from "../components/Rider/RiderServices"
import Banner from "../components/Banner"

export default class gofer extends Component {
  render() {
    return (
      <Layout>
        <StyledHero img={this.props.data.defaultBcg.childImageSharp.fluid}>
          <Banner
            title="A V P"
            info="Artisan bicycle rights raw denim, lumbersexual tumblr keytar farm-to-table kickstarter hexagon schlitz salvia venmo PBR&B biodiesel bespoke. Chambray literally church-key raw denim polaroid skateboard you probably haven't heard of them blue bottle readymade forage tattooed 
            franzen. Mlkshk prism pork belly cray sriracha. Meggings try-hard blog aesthetic heirloom knausgaard. Irony etsy swag, stumptown celiac migas godard flexitarian XOXO."
          ></Banner>
        </StyledHero>
        <RiderServices />
        <Partner />
      </Layout>
    )
  }
}

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
