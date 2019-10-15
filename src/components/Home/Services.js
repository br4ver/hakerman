import React from 'react'
import Title from '../Title'
import styles from '../../css/services.module.css'
import "aos/dist/aos.css"
import customer1 from "../../images/Customers1.webp"
import customer2 from "../../images/Customers2.webp"
import customer3 from "../../images/Customers3.webp"
class Services extends React.Component {
  componentDidMount() {
    const isBrowser = typeof window !== "undefined"
    const AOS = isBrowser ? require("aos") : undefined

    this.aos = AOS
    this.aos.init()
  }

  render() {

    return (
      <section id="home-benefits" className={styles.services}>
        <Title title="our" subtitle="services" />
        <div>
          <div className={styles.center}>
            <article
              className={styles.service}
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <span>
                <img className={styles.img} src={customer1} alt="" />
              </span>
              <h4>Satisfy your appetite</h4>
              <p>From breakfast meal deals to late-night chill we got you!</p>
            </article>
            <article
              className={styles.service}
              data-aos="fade-down"
              data-aos-duration="2500"
            >
              <span>
                <img className={styles.img} src={customer2} alt="" />
              </span>
              <h4>Explore and Tap</h4>
              <p>Effortless ordering in a tap.</p>
            </article>
            <article
              className={styles.service}
              data-aos="fade-left"
              data-aos-duration="2500"
            >
              <span>
                <img className={styles.img} src={customer3} alt="" />
              </span>
              <h4>Track</h4>
              <p>Trace your order from meal prep to delivery.</p>
            </article>
          </div>
        </div>
      </section>
    )
  }
}

export default Services
