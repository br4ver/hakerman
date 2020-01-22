import React from "react"
import Title from "../Title"
import styles from "../../css/services.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Aosinit from "../../constants/aosinit"

const MerchantServices = () => {
  const data = useStaticQuery(graphql`
    fragment mercImage on File {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    query {
      image1: file(relativePath: { eq: "M1.png" }) {
        ...mercImage
      }

      image2: file(relativePath: { eq: "M2.png" }) {
        ...mercImage
      }

      image3: file(relativePath: { eq: "M3.png" }) {
        ...mercImage
      }
    }
  `)
  return (
    <div id="merchant-benefits" className={styles.services}>
      <Aosinit />
      <Title title="OUR" subtitle="SERVICES" />
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
            <h4>Grow your business</h4>
            <p>A partnership that cares for you and your business.</p>
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
            <h4>Road Partner</h4>
            <p>
              Access to our fleet of drivers that delivers your cooked meals to
              customers.
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
            <h4>Reach more customers</h4>
            <p>Your own digital storefront bridging you to customers.</p>
          </article>
        </div>
      </div>
    </div>
  )
}

export default MerchantServices
