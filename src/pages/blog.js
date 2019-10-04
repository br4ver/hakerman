import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Isometric from '../components/Home/isometric'

const blog = ({ data }) => {
  return (
    <Layout>
      <Isometric/>
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

export default blog
