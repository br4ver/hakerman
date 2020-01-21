import React from "react"
import styles from "../css/aboutus.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import StyledHero from "../components/StyledHero"
import aboutimg from "../images/gofer.png"
import aboutimg2 from "../images/rider2.png"
import aboutimg3 from "../images/aboutbg.png"
import aboutimg4 from "../images/rider3.png"
const getAboutus = () => {
  return (
    <div>
      <section className={styles.showcase}>
        <div className={styles.content}>
          <img src={aboutimg} className={styles.logo} alt="Gofer About" />
          {/*<h2 className={styles.sentence}>
            Craving for
            <div className={styles.slidingVertical}>
              <span>Milk Tea?</span>
              <span>Shawarma?</span>
              <span>Nachos?</span>
              <span>Fries?</span>
              <span>Burger?</span>
            </div>
          </h2>
          <p className={styles.text}>
            A minute is all you need.
            <br /> Foodie who has no time to go.
            <br />
            We’ve got foods on-the-go.
          </p> */}
        </div>
      </section>
      <section className="bg-light">
        <div className={styles.container}>
          <div className={styles.grid2}>
            <div className={styles.center}>
              <img src={aboutimg2} className={styles.pic} alt="Gofer About" />
            </div>
            <div className={styles.gridDiv}>
              <p>
                Ever remember bonding with the squad on a Friday night, with
                drinks and jenga on deck?
                <br />
                <br />
                Maybe a time when there's nothing on the fridge and there's an
                unexpected guest?
                <br />
                <br />
                Swamped with paperwork that you forgot its your special
                someone's birthday?
                <br />
                <br />
                Or maybe you just want to slow down and enjoy that episode on
                netflix with your fave meal
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className={styles.container2}>
          <div className={styles.grid2}>
            <div className={styles.center}>
              <p>
                An opportunity to reconnect and to celebrate those moments with
                your friends, family, special someone ;), or yourself. This is
                what inspired us in creating gofer. To achieve this, we have
                created a mobile application (yes, another mobile application
                insert rolling eyes emoji) that connects you to your favorite
                restaurant and have your fave meal delivered to your doorstep,
                making your day a little brighter
              </p>
            </div>
            <div className={styles.gridDiv}>
              <img src={aboutimg4} className={styles.pic} alt="Gofer About" />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.about1}>
        <img src={aboutimg3} className={styles.aboutbg} alt="Gofer About" />
        <div className={styles.container2}>
          <div className={styles.center1}>
            <h3>What is the ingredient that makes us a tad bit different?</h3>
            <p>
              We never stop listening to improve the value that we could give.
              At the center of it all, we strive to bring you closer with the
              people you care and love and spend more time to do the things you
              like.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
export default getAboutus