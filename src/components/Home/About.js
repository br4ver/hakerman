import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "goferphone.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const {aboutImage} =useStaticQuery(getAbout);
    return (
      <section className={styles.about}>
        <Title title="Download" subtitle="Now" />
        <div className={styles.aboutCenter}>
          <article
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            className={styles.aboutImg}
          >
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
            <h2>More Money</h2>
            <p>
              Art party activated charcoal hot chicken, portland yr meggings
              street art gentrify. Chillwave mixtape distillery, blue bottle
              selfies hexagon tbh. Ramps tattooed pabst godard, plaid marfa kale
              chips jean shorts twee activated charcoal 3 wolf moon butcher
              post-ironic asymmetrical food truck.
            </p>
            <button type="button" className="btn-primary">
              Download
            </button>
          </article>
        </div>
      </section>
    )
}

export default About
