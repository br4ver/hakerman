import React from "react"
import styles from "../../css/about.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "goferphone.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Download = () => {
  const { aboutImage } = useStaticQuery(getAbout)
  return (
    <section id="home-download" className={styles.about}>
      <div className={styles.aboutCenter}>
        <div>
          <article
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-once="true"
            className={styles.aboutImg}
          >
            <h4
              className={styles.downLoad}
              data-aos="fade-down"
              data-aos-easing="ease-in-sine"
              data-aos-once="true"
              data-aos-anchor="#trigger-download"
              data-aos-duration="1500"
            >
              DOWNLOAD
            </h4>
            <div className={styles.imgContainer}>
              <Img fluid={aboutImage.childImageSharp.fluid} alt="about image" />
            </div>
          </article>
        </div>
        <div>
          <article
            id="trigger-download"
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-easing="linear"
            data-aos-duration="500"
            className={styles.aboutInfo}
          >
            <h2>Download Now</h2>

            <button type="button" className="btn-primary">
              <a href="/">Download</a>
            </button>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Download
