import React from "react"
import Title from "../Title"
import styles from "../../css/services.module.css"
import "aos/dist/aos.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Aosinit from "../../constants/aosinit"
const RiderServices = () => {
  const data = useStaticQuery(graphql`
    fragment riderImage on File {
      childImageSharp {
        fluid(maxWidth: 150, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    query {
      image1: file(relativePath: { eq: "R1.png" }) {
        ...riderImage
      }

      image2: file(relativePath: { eq: "R2.png" }) {
        ...riderImage
      }

      image3: file(relativePath: { eq: "R3.png" }) {
        ...riderImage
      }
    }
  `)
  return (
    <section id="rider-benefits" className={styles.services}>
      <Aosinit />
      <Title title="Why Partner" subtitle="With Us? " />
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
            <h4>Work Whenever, Wherever</h4>
            <p>Work for your goals.</p>
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
            <h4>Earn for your goals</h4>
            <p>Reach your dreams by partnering with us.</p>
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
            <h4>We value your safety</h4>
            <p>Safety training and perks coverage during your trip.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default RiderServices
