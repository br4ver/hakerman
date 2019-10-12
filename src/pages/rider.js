import React, { Component } from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import RiderReg from "../components/Contact/riderreg"
import RiderServices from "../components/Partner/RiderServices"
import Title from "../components/Home/superBanner"
import SEO from "../components/SEO"
import RiderSec from "../components/Partner/Ridersec"
export default class rider extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Rider"/>
        <StyledHero img={this.props.data.defaultBcg.childImageSharp.fluid}>
          <Title text="Start your journey with us!"/>
        </StyledHero>
        <RiderServices />
        <RiderSec/>
        <RiderReg />
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.webp" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
