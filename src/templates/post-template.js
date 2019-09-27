import React from "react"
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import styles from '../css/template.module.css'
import Img from 'gatsby-image'
import {FaMoneyBillWave} from 'react-icons/fa'

const Template = ({data}) => {
const {title,category,author,datePublished,content:{content},images} = data.post

const [mainImage, ...postImages] = images

  return (
    <Layout>
      <StyledHero img={mainImage.fluid} />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {postImages.map((item, index) => {
              return (
                <Img
                  key={index}
                  fluid={item.fluid}
                  alt="single post"
                  className={styles.image}
                />
              )
            })}
          </div>
          <h1>{title}</h1>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon} />
              {author}
            </p>
            <p>
              <FaMoneyBillWave className={styles.icon} />
              {category}
            </p>
          </div>
          <h4>{datePublished}</h4>
          <p className={styles.desc}>{content}</p>
        </div>
      </section>
    </Layout>
  )
}


export const query = graphql`
         query($slug: String!) {
           post: contentfulPost(slug: { eq: $slug }) {
             title
             category
             author
             datePublished(formatString: "dddd MMMM Do, YYYY")
             content {
               content
             }
             images {
               fluid {
                 ...GatsbyContentfulFluid
               }
             }
           }
         }
       `
export default Template
