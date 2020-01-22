import React from "react"
import styles from "../../css/contact.module.css"
import "aos/dist/aos.css"
import { ArenguForm } from "gatsby-plugin-arengu-forms"

const RiderReg = () => {
  return (
    <section id="rider-registration" className={styles.contact}>
      <div className="session" data-aos="fade-down" data-aos-duration="2000">
        <div className={styles.contactLeft}></div>
        <div className="contact-login">
          <h4 className={styles.contactTitle}>
            Become a <span className="contact-space">Partner</span>
          </h4>
          <p className={styles.contactText1}>
            Be a gofer driver-partner today!
          </p>

          <ArenguForm id="157414686695086993" />
          <div className={styles.floatingLabel}>
            <div className={styles.instruction}>
              <div className={styles.infoIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 48 48"
                >
                  <title>Requirements</title>
                  <g fill="#ff0076">
                    <path d="M22 34h4V22h-4v12zm2-30C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 8 24 8s16 7.18 16 16-7.18 16-16 16zm-2-22h4v-4h-4v4z"></path>
                  </g>
                </svg>
                <label className={styles.infoLabel} htmlFor="modal-1">
                  Requirements
                </label>
              </div>
            </div>
          </div>
          <input className={styles.modalState} id="modal-1" type="checkbox" />
          <div className={styles.modal}>
            <label className={styles.modal__bg} htmlFor="modal-1"></label>
            <div className={styles.modal__inner}>
              <label className={styles.modal__close} htmlFor="modal-1"></label>
              <h2>Requirements</h2>
              <p>Please bring the following:</p>
              <div className={styles.modalP1}>
                <p>
                  <span className={styles.modalSymb}>✔</span> Driver's License{" "}
                  <span className={styles.modalSpan}>
                    (Original and Photocopy)
                  </span>
                  <br />
                  <span className={styles.modalSymb}>✔</span> Motorcycle Image
                  Softcopy{" "}
                  <span className={styles.modalSpan}>
                    (Front, Back, and side)
                  </span>
                  <br />
                  <span className={styles.modalSymb}>✔</span> Mobile Phone{" "}
                  <span className={styles.modalSpan}>
                    (Android Version 5.0 or newer)
                  </span>
                </p>
                <p>
                  <span className={styles.modalSymb}>✔</span> ORCR{" "}
                  <span className={styles.modalSpan}>
                    (Original and Photocopy)
                  </span>
                </p>
                <p className={styles.modalHint}>
                  • If borrowed motorcycle – Authorization Letter and photocopy
                  of Valid ID.
                  <br />
                  • If a second owner – duly notarized deed of sale.
                  <br />• If reacquired motorcycle – repossession certificate.
                </p>
                <h3 className={styles.modalReq1}>1</h3>
              </div>
              <div className={styles.modalP2}>
                <p>
                  Police/NBI Clearance
                  <br />
                  Tin number
                  <br />
                  Medical Certificate
                  <br />
                  Email Address
                </p>
                <h3 className={styles.modalReq2}>2</h3>
              </div>
              <p>
                Items with (<span className={styles.modalSymb}>✔</span>) symbol
                are mandatory.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RiderReg
