import React from "react"
import { graphql} from "gatsby"
import Layout from "../components/Layout"
import styles from "../css/template.module.css"
import Day from "../components/SingleHelp/Day"
import StyledHero from "../components/StyledHero"
import HeroTitle from "../components/Home/superBanner"
import HelpContact from "../components/Contact/helpContact"
const Template = ({ data }) => {
  const {
    title,
    customer,
  } = data.tour


  return (
    <Layout>
      <StyledHero img={data.customerBg.childImageSharp.fluid}>
        <HeroTitle text="Frequently Asked Questions" />
      </StyledHero>
      <section className={styles.template}>
        <div className={styles.helpCenter}>
          <article className={styles.helpInfo}>
            <div className={styles.center}>
              <h2>{title}</h2>
              <div className={styles.info}></div>
              <div className={styles.journey}>
                {customer.map((item, index) => {
                  return (
                    <Day
                      key={index}
                      question={item.question}
                      answer={item.answer}
                    />
                  )
                })}
              </div>
            </div>
          </article>
          <article className={styles.helpImg}>
            <HelpContact />
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
         query($slug: String!) {
           tour: contentfulHelp(slug: { eq: $slug }) {
             title
             category
             customer {
               question
               answer
             }
           }
           customerBg: file(relativePath: { eq: "help.jpg" }) {
             childImageSharp {
               fluid(quality: 90, maxWidth: 4160) {
                 ...GatsbyImageSharpFluid_withWebp
               }
             }
           }
           faqImage: file(relativePath: { eq: "goferphone.png" }) {
             childImageSharp {
               fluid(maxWidth: 800) {
                 ...GatsbyImageSharpFluid_tracedSVG
               }
             }
           }
         }
       `

export default Template
