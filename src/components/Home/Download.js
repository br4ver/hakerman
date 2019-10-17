import React from 'react'
import styles from '../../css/about.module.css'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
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
  const {aboutImage} =useStaticQuery(getAbout);
    return (
      <section id="home-download" className={styles.about}>
        <div className={styles.aboutCenter}>
          <article
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            className={styles.aboutImg}
          >
            <h4
              className={styles.downLoad}
              data-aos="fade-down"
              data-aos-easing="ease-in-sine"
              data-aos-anchor="#trigger-download"
              data-aos-duration="2000"
            >
              DOWNLOAD
            </h4>
            <div className={styles.imgContainer}>
              <Img fluid={aboutImage.childImageSharp.fluid} alt="about image" />
            </div>
          </article>
          <article
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500"
            className={styles.aboutInfo}
          >
            <h2>
              <span>Download</span>
              <span>Now</span>
            </h2>
            <button type="button" className="btn-primary" id="trigger-download">
              Download
            </button>
          </article>
        </div>
      </section>
    )
}

export default Download
