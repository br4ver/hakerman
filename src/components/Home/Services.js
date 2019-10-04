import React from 'react'
import Title from '../Title'
import styles from '../../css/services.module.css'
import AOS from "aos"
import "aos/dist/aos.css"
import {
  FaMoneyBillWaveAlt,
  FaMoneyBillWave,
  FaMoneyBill,
} from "react-icons/fa"

AOS.init()
const Services = () => {
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
              <h4>Satisfy your appetite</h4>
              <p>From breakfast meal deals to late-night chill we got you!</p>
            </article>
            <article
              className={styles.service}
              data-aos="fade-down"
              data-aos-duration="2500"
            >
              <span>
                <FaMoneyBillWave />
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
                <FaMoneyBill />
              </span>
              <h4>Track</h4>
              <p>Trace your order from meal prep to delivery.</p>
            </article>
          </div>
        </div>
      </section>
    )
}

export default Services
