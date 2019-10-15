import React from "react"
import Title from "../Title"
import styles from "../../css/services.module.css"
import "aos/dist/aos.css"
import rider1 from "../../images/Riders1.webp"
import rider2 from "../../images/Riders2.webp"
import rider3 from "../../images/Riders3.webp"

class RiderServices extends React.Component {
  componentDidMount() {
    const isBrowser = typeof window !== "undefined"
    const AOS = isBrowser ? require("aos") : undefined
    this.aos = AOS
    this.aos.init()
  }
  
  render() {
    return (
      <section id="rider-benefits" className={styles.services}>
        <Title title="our" subtitle="services" />
        <div>
          <div className={styles.center}>
            <article
              className={styles.service}
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <span>
                <img className={styles.img} src={rider1} alt="" />
              </span>
              <h4>Work Whenever, Wherever</h4>
              <p>Own your working time.</p>
            </article>
            <article
              className={styles.service}
              data-aos="fade-down"
              data-aos-duration="2500"
            >
              <span>
                <img className={styles.img} src={rider2} alt="" />
              </span>
              <h4>Earn for your goals.</h4>
              <p>Earn for your goals by partnering with us.</p>
            </article>
            <article
              className={styles.service}
              data-aos="fade-left"
              data-aos-duration="2500"
            >
              <span>
                <img className={styles.img} src={rider3} alt="" />
              </span>
              <h4>We value your safety</h4>
              <p>Safety training and Insurance coverage during your booking.</p>
            </article>
          </div>
        </div>
      </section>
    )
  }
}

export default RiderServices
