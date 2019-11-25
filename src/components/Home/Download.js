import React from "react"
import styles from "../../css/about.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
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
  const { aboutImage, gplayImage } = useStaticQuery(getAbout)
  return (
    <section id="home-download" className={styles.dlHolder}>
      <div
        className="dl-bgcolor"
        data-aos="slide-left"
        data-aos-offset="100"
        data-aos-duration="1100"
        data-aos-once="true"
      ></div>
      <div className={styles.aboutCenter}>
        <h4
          className="down-load"
          data-aos="fade-down"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          data-aos-offset="100"
          data-aos-delay="600"
          data-aos-once="true"
        >
          DOWNLOAD
        </h4>
        <div className={styles.aboutImg}>
          <div
            data-aos="zoom-in-up"
            data-aos-offset="100"
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
          <h2>Hungry?</h2>
          <h2>Got tasks to do?</h2>
          <h2>A minute is all you need.</h2>
          <Link
            to="/"
            id="download-btn"
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-delay="200"
            data-aos-once="true"
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
