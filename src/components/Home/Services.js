import React from "react"
import Title from "../Title"
import styles from "../../css/services.module.css"
import "aos/dist/aos.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Aosinit from "../../constants/aosinit"
const Services = () => {
  const data = useStaticQuery(graphql`
    fragment serviceImage on File {
      childImageSharp {
        fluid(maxWidth: 150) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    query {
      image1: file(relativePath: { eq: "C1.png" }) {
        ...serviceImage
      }

      image2: file(relativePath: { eq: "C2.png" }) {
        ...serviceImage
      }

      image3: file(relativePath: { eq: "group.png" }) {
        ...serviceImage
      }
    }
  `)

  return (
    <section id="home-benefits" className={styles.services}>
      <Aosinit />
      <Title title="our" subtitle="services" />
      <div>
        <div className={styles.center}>
          <article
            className={styles.service}
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-once="true"
          >
            <div className={styles.imgCont}>
              <Img
                loading="lazy"
                fluid={data.image1.childImageSharp.fluid}
                alt="about image"
              />
            </div>
            <h4>Satisfy your appetite</h4>
            <p>From breakfast meal deals to late-night chill we got you!</p>
          </article>
          <article
            className={styles.service}
            data-aos="fade-down"
            data-aos-duration="2500"
            data-aos-once="true"
          >
            <div className={styles.imgCont}>
              <Img
                loading="lazy"
                fluid={data.image2.childImageSharp.fluid}
                alt="about image"
              />
            </div>
            <h4>Explore and Track</h4>
            <p>
              Select various restaurants around the city and track your meal up
              to your doorstep.
            </p>
          </article>
          <article
            className={styles.service}
            data-aos="fade-left"
            data-aos-duration="2500"
            data-aos-once="true"
          >
            <div className={styles.imgCont}>
              <Img
                loading="lazy"
                fluid={data.image3.childImageSharp.fluid}
                alt="about image"
              />
            </div>
            <h4>No minimum order</h4>
            <p>
              Order any food you want. From small to large meals, no minimum
              amount required.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Services
