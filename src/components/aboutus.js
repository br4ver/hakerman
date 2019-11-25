import React from "react"
import styles from "../css/aboutus.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Typist from "react-typist"
import TypistLoop from "react-typist-loop"
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
  const { aboutusImage, aboutusImage2 } = useStaticQuery(getAboutus)
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.heroSection}>
        <div className={styles.heroTxt}>
          <div className={styles.animatedText}>
            <TypistLoop interval={200}>
              {["Hungry?", "Busy?", "A not-so-good mood?"].map(text => (
                <Typist
                  className={styles.animatedTxt}
                  key={text}
                  startDelay={200}
                  cursor={{
                    show: false,
                  }}
                >
                  <h4>{text}</h4>
                  <Typist.Backspace count={19} delay={1500} />
                </Typist>
              ))}
            </TypistLoop>
          </div>

          <div className={styles.animatedTxt2}>
            <h4>Yes.</h4>
            <h4>We cant lie.</h4>
            <h4>Its the main reason why gofer was created.</h4>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Img fluid={aboutusImage.childImageSharp.fluid} alt="about image" />
        </div>
      </div>
      <Img fluid={aboutusImage2.childImageSharp.fluid} alt="about image" />
    </div>
  )
}

export default Aboutus
