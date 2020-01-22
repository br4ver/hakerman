import React from "react"
import styles from "../css/aboutus.module.css"
import aboutimg from "../images/gofer.png"
import aboutimg2 from "../images/rider2.png"
import aboutimg3 from "../images/aboutbg.png"
import aboutimg4 from "../images/rider3.png"
import aboutimg5 from "../images/rider4.png"
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
                drinks and Jenga on deck?
                <br />
                <br />
                A time when there's nothing on the fridge and there's an
                unexpected guest?
                <br />
                <br />
                Swamped with paperwork that you forgot its your special
                someone's birthday?
                <br />
                <br />
                Or maybe you just want to slow down and enjoy that episode on
                Netflix with your fave meal.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className={styles.container2}>
          <div className={styles.grid2}>
            <div className={styles.center2}>
              <p>
                An opportunity to reconnect and to celebrate those moments with
                your friends, family, special someone{" "}
                <span role="img" aria-label="Wink Emoji">
                  😉
                </span>
                , or yourself.</p>
                <div className={styles.center2P}>This is what inspired us in creating gofer.</div> 
                <p> Toachieve this, we have created a mobile application (yes, another
                mobile application<span role="img" aria-label="Rolling Eyes">
                  🙄
                </span>) that connects you to your favorite restaurant and have your
                fave meal delivered to your doorstep, making your day a little
                brighter!
              </p>
            </div>
            <div className={styles.gridDiv1}>
              <img src={aboutimg4} className={styles.pic} alt="Gofer About" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className={styles.container2}>
          <div className={styles.grid2}>
            <div className={styles.center}>
              <img src={aboutimg5} className={styles.pic} alt="Gofer About" />
            </div>
            <div className={styles.gridDiv}>
              <h3>What is the ingredient that makes us a tad bit different?</h3>
              <p>
                We never stop listening to improve the value that we could give.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.about1}>
        <img src={aboutimg3} className={styles.aboutbg} alt="Gofer About" />
        <div className={styles.container2}>
          <div className="center1">
            <p>
              We strive to bring you closer with the people you{" "}
              <span className={styles.aboutHl}>care</span> and{" "}
              <span className={styles.aboutHl}>love </span>
              and spend more time to do the things you{" "}
              <span className={styles.aboutHl}>like</span>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
export default getAboutus