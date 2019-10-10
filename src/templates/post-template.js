import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../css/single-blog.module.css"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import SEO from "../components/SEO"
import Img from "gatsby-image"
const Template  = ({ data }) => {
  const {
    title,
    image,
    simpleText:{simpleText},
    published,
    text: { json },
  } = data.post
 /* const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <div>
            <img width="600" src={node.data.target.fields.file["en-US"].url} alt="Blogs Illustrator"/>
          </div>
        )
      },
    },
  } */
  return (
    <Layout>
      <SEO title={title} />
      <section className={styles.blog}>
        <Img
          fluid={image[0].fluid}
          className={styles.img}
          alt="single post"
        ></Img>

        <div className={styles.center}>
          <h1>{title}</h1>
          <h5>published at : {published}</h5>
          <article className={styles.post}>
            {documentToReactComponents(json)}
            <p className={styles.desc}>{simpleText}</p>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
         query getPost($slug: String!) {
           post: contentfulBlog(slug: { eq: $slug }) {
             title
             simpleText {
               simpleText
             }
             image {
               fluid(quality: 90, maxWidth: 4160) {
                 ...GatsbyContentfulFluid
               }
             }
             published(formatString: "MMMM Do, YYYY")
             text {
               json
             }
           }
         }
       `

export default Template

