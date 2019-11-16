import React from "react"
import styles from "../../css/about.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from 'gatsby'
const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "goferphone21.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    gplayImage: file(relativePath: { eq: "gplay.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Download = () => {
  const { aboutImage,gplayImage } = useStaticQuery(getAbout)
  return (
    <section id="home-download" className={styles.dlHolder}>
      <div
        className={styles.bgColor}
        data-aos="slide-left"
        data-aos-offset="450"
        data-aos-duration="1100"
        data-aos-once="true"
      ></div>
      <div className={styles.aboutCenter}>
        <h4
          className={styles.downLoad}
          data-aos="fade-down"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          data-aos-offset="500"
          data-aos-delay="600"
          data-aos-once="true"
        >
          DOWNLOAD
        </h4>
        <div className={styles.aboutImg}>
          <div
            data-aos="zoom-in-up"
            data-aos-offset="450"
            data-aos-delay="800"
            data-aos-duration="500"
            data-aos-easing="ease-in-out-sine"
            data-aos-once="true"
          >
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="about image"
              className={styles.imgContainer}
            />
          </div>
        </div>

        <div className={styles.dlText}>
          <h2>Select.</h2>
          <h2>Order.</h2>
          <h2>Eatwild.</h2>
          <Link
            to="/"
            id="download-btn"
            data-aos="fade-up"
            data-aos-offset="250"
            data-aos-delay="500"
            data-aos-duration="500"
          >
            <Img
              fluid={gplayImage.childImageSharp.fluid}
              alt="about image"
              className={styles.gPlay}
            />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Download
