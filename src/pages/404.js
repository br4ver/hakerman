import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO/SEO"
import StyledError from "../components/StyledError"
import Errortext from '../components/Home/errortext'
import { graphql } from "gatsby"
export default function error({data}) {
  return (
    <Layout>
      <SEO title="Error" />
      <StyledError error="true" img={data.errorBcg.childImageSharp.fluid}> 
      <Errortext/>    
      </StyledError>
    </Layout>
  )
}
export const query = graphql`
  query {
    errorBcg: file(relativePath: { eq: "404.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`