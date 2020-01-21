import React, { Component } from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import RiderReg from "../components/Contact/riderreg"
import RiderServices from "../components/Partner/RiderServices"
import Title from "../components/Home/superBanner"
import SEO from "../components/SEO/SEO"
import RiderSec from "../components/Partner/Ridersec"
import Riderlinks from '../components/Partner/riderlinks'
export default class rider extends Component {
  render() {
    return (
      <Layout>
        <SEO title="gofer Rider"/>
        <StyledHero img={this.props.data.defaultBcg.childImageSharp.fluid}>
          <Title text="Start your journey with us!"/>
        </StyledHero>
        <RiderServices />
        <RiderSec/>
        <RiderReg />
        <Riderlinks/>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "4352.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
