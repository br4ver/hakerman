import React from "react"
import styles from "../../css/contact.module.css"
import { ArenguForm } from "gatsby-plugin-arengu-forms"
const MerchantReg = () => {
  return (
    <section id="merchant-registration" className={styles.contact}>
      <div className={styles.contactBody}>
        <div
          className={styles.contactSession}
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <div className={styles.contactLeft}></div>
          <div className={styles.contactLogin}>
            <h4 className={styles.contactTitle}>
              Be Our <span className={styles.contactSpace}>Partner</span>
            </h4>
            <p className={styles.contactText}>
              Earn more by having your meals delivered straight to hungry
              customers.
            </p>

            <ArenguForm id="157414509594544219" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MerchantReg
