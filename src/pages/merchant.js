import React, { Component } from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import MerchantReg from "../components/Contact/merchantreg"
import MerchantSec from "../components/Partner/MerchantSec"
import MerchantServices from "../components/Partner/MerchantServices"
import Title from "../components/Home/superBanner"
import SEO from "../components/SEO/SEO"
import Merchantlinks from "../components/Partner/Merchantlinks"

export default class merchant extends Component {
  render() {
    return (
      <Layout>
        <SEO title=" gofer Partner"/>
        <StyledHero img={this.props.data.merchantBcg.childImageSharp.fluid}>
          <Title text="GOOD FOOD FOR EVERY MOOD" />
        </StyledHero>
        <MerchantServices/>
        <MerchantSec/>
        <MerchantReg />
        <Merchantlinks/>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    merchantBcg: file(relativePath: { eq: "878.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
