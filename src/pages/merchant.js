import React, { Component } from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Partner from "../components/Contact/Partner"
import MerchantServices from "../components/Partner/MerchantServices"
import Title from "../components/Home/superBanner"
import SEO from "../components/SEO"
export default class merchant extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Merchant"/>
        <StyledHero img={this.props.data.merchantBcg.childImageSharp.fluid}>
          <Title text="GOOD FOOD FOR EVERY MOOD" />
        </StyledHero>
        <MerchantServices />
        <Partner />
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