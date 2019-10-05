import React from "react"
import Title from "../Title"
import styles from "../../css/services.module.css"
import "aos/dist/aos.css"
import {
  FaMoneyBillWaveAlt,
  FaMoneyBillWave,
  FaMoneyBill,
} from "react-icons/fa"
class MerchantServices extends React.Component {
  componentDidMount() {
    const isBrowser = typeof window !== "undefined"
    const AOS = isBrowser ? require("aos") : undefined

    this.aos = AOS
    this.aos.init()
  }

  componentDidUpdate() {
    this.aos.refresh()
  }
  render() {
    return (
      <section className={styles.services}>
        <Title title="our" subtitle="services" />
        <div>
          <div className={styles.center}>
            <article
              className={styles.service}
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <span>
                <FaMoneyBillWaveAlt />
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
                <FaMoneyBillWave />
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
                <FaMoneyBill />
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
