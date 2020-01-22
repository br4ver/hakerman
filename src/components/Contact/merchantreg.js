import React from "react"
import styles from "../../css/contact.module.css"
import { ArenguForm } from "gatsby-plugin-arengu-forms"
const MerchantReg = () => {
  return (
    <section id="merchant-registration" className={styles.contact}>
      <div className="session" data-aos="fade-down" data-aos-duration="2000">
        <div className={styles.contactLeft2}></div>
        <div className="contact-login">
          <h4 className={styles.contactTitle}>
            Be Our <span className="contact-space">Partner</span>
          </h4>
          <p className={styles.contactText}>
            <span className={styles.highLight}>Extend</span> your restaurant.
          </p>
          <p className={styles.contactText}>
            <span className={styles.highLight}>Increase</span> your customers.
          </p>
          <p className={styles.contactText1}>
            <span className={styles.highLight}>Earn</span> more.
          </p>
          <ArenguForm id="157414509594544219" />
        </div>
      </div>
    </section>
  )
}

export default MerchantReg
