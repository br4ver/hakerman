import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import StyledHero from "../components/StyledHero"
import BlogList from "../components/Blog/BlogList"
import SEO from "../components/SEO/SEO"
import Quicklink from "../components/Home/Quicklink"


const blog = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" content="Gofer Blog List" />
      <StyledHero img={data.blogBcg.childImageSharp.fluid} />
      <BlogList />
      <Quicklink/>
    </Layout>
  )
}

export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "defaultBcg.webp" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default blog
