import React from "react"
import Title from "../Title"
import styles from "../../css/services.module.css"
import "aos/dist/aos.css"

import merchant from '../../images/Merchants1.webp'
import merchant2 from "../../images/Merchants2.webp"
import merchant3 from "../../images/Merchants3.webp"
class MerchantServices extends React.Component {
  componentDidMount() {
    const isBrowser = typeof window !== "undefined"
    const AOS = isBrowser ? require("aos") : undefined

    this.aos = AOS
    this.aos.init()
  }
  render() {
    return (
      <section id="merchant-benefits" className={styles.services}>
        <Title title="our" subtitle="services" />
        <div>
          <div className={styles.center}>
            <article
              className={styles.service}
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <span>
                <img className={styles.img} src={merchant} alt="" />
              </span>
              <h4>Reach more diners</h4>
              <p>Integrated delivery platform to bridge you to customers.</p>
            </article>
            <article
              className={styles.service}
              data-aos="fade-down"
              data-aos-duration="2500"
            >
              <span>
                <img className={styles.img} src={merchant2} alt="" />
              </span>
              <h4>Grow your business</h4>
              <p>A partnership that cares for you and your business</p>
            </article>
            <article
              className={styles.service}
              data-aos="fade-left"
              data-aos-duration="2500"
            >
              <span>
                <img className={styles.img} src={merchant3} alt="" />
              </span>
              <h4>Road Partner</h4>
              <p>
                Access to our fleet of rider partner delivering your cooked
                meals to customers
              </p>
            </article>
          </div>
        </div>
      </section>
    )
  }
}

export default MerchantServices
