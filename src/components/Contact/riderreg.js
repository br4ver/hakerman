import React from "react"
import styles from "../../css/contact.module.css"
import rider from "../../images/help4.png"
import "aos/dist/aos.css"
import { ArenguForm } from "gatsby-plugin-arengu-forms"

const RiderReg = () => {
  return (
    <section id="rider-registration" className={styles.contact}>
      <div className={styles.contactBody}>
        <div
          className={styles.contactSession}
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <div className={styles.contactLeft}>
            <img loading="lazy" src={rider} alt="fdfdf" />
          </div>
          <div className={styles.contactLogin}>
            <h4 className={styles.contactTitle}>
              Become a <span className={styles.contactSpace}>Partner</span>
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
                <label
                  className={styles.modal__close}
                  htmlFor="modal-1"
                ></label>
                <h2>Requirements</h2>
                <p>
                  Man braid godard banjo chia wolf cliche. Pickled letterpress
                  migas, truffaut humblebrag tousled roof party. Pabst
                  microdosing bushwick chia jianbing williamsburg activated
                  charcoal narwhal truffaut, skateboard vexillologist bicycle
                  rights ethical plaid. Farm-to-table asymmetrical skateboard
                  williamsburg pok pok next level, cardigan tattooed raclette
                  90's knausgaard salvia. Tacos semiotics schlitz palo santo
                  echo park celiac coloring book cliche brunch. Disrupt vegan
                  chillwave ennui, etsy you probably haven't heard of them
                  quinoa semiotics irony meditation live-edge activated
                  charcoal. VHS trust fund kogi, kinfolk taiyaki offal tbh
                  vaporware lo-fi squid meggings coloring book.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RiderReg
