import React from 'react'
import styles from "../../css/legal.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const getLegal = graphql`
  query cookieImage {
    cookieImage: file(relativePath: { eq: "term.png" }) {
      childImageSharp {
        fluid(maxWidth: 4000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
const Cookies = () => {
     const { cookieImage } = useStaticQuery(getLegal)
    return (
      <div className={styles.cardlegal}>
        <Img
          fluid={cookieImage.childImageSharp.fluid}
          className={styles.cardMedia}
          alt="term"
        />
        <div className={styles.cardDetails}>
          <h2 className={styles.cardHead}>Cookie Policy</h2>
          <p>
            Located two hours south of Sydney in the Southern Highlands of New
            South Wales, ...Located two hours south of Sydney in the Southern
            Highlands of New South Wales, ...Located two hours south of Sydney
            in the Southern Highlands of New South Wales, ...Located two hours
            south of Sydney in the Southern Highlands of New South Wales,
            ...Located two hours south of Sydney in the Southern Highlands of
            New South Wales, ...Located two hours south of Sydney in the
            Southern Highlands of New South Wales, ...Located two hours south of
            Sydney in the Southern Highlands of New South Wales, ...Located two
            hours south of Sydney in the Southern Highlands of New South Wales,
            ...Located two hours south of Sydney in the Southern Highlands of
            New South Wales, ...Located two hours south of Sydney in the
            Southern Highlands of New South Wales, ...
          </p>
        </div>
      </div>
    )
}

export default Cookies
