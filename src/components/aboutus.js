import React from "react"
import styles from "../css/aboutus.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import dagmap from "../images/dagmap.svg"
const getAboutus = graphql`
  query aboutusImage {
    aboutusImage: file(relativePath: { eq: "as1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    aboutusImage2: file(relativePath: { eq: "as2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Aboutus = () => {
  const { aboutusImage2 } = useStaticQuery(getAboutus)
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.heroSection}>
        <img src={dagmap} alt="Dagupan Map" />
      </div>
      <Img fluid={aboutusImage2.childImageSharp.fluid} alt="about image" />
    </div>
  )
}

export default Aboutus
