import React from "react"
import styles from "../../css/contact.module.css"
import  rider from '../../images/help4.png'
import {Link} from 'gatsby'
import "aos/dist/aos.css"
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
          <form action="" className={styles.contactLogin} autoComplete="off">
            <h4 className={styles.contactTitle}>
              Become a <span className={styles.contactSpace}>Rider</span>
            </h4>
            <p className={styles.contactText}>Be a festive foodie hero!</p>
            <div className={styles.floatingLabel}>
              <input
                className={styles.regCheck}
                placeholder="Name"
                type="text"
                name="ridername"
                id="rider-name"
                autoComplete="off"
              />
              <label>Name:</label>
              <div className={styles.icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <title>single-01</title>
                  <g fill="#608cee">
                    <path
                      fill="#2e2e2e"
                      d="M12,13c3.309,0,6-2.691,6-6V6c0-3.309-2.691-6-6-6S6,2.691,6,6v1C6,10.309,8.691,13,12,13z"
                    ></path>{" "}
                    <path
                      data-color="color-2"
                      d="M19.322,15.981c-4.704-1.303-9.939-1.303-14.644,0C2.513,16.581,1,18.564,1,20.805V24h22 v-3.195C23,18.564,21.487,16.581,19.322,15.981z"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className={styles.floatingLabel}>
              <input
                className={styles.regCheck}
                placeholder="Contact"
                type="tel"
                name="ridercontact"
                pattern="[0-9]{11}"
                id="rider-contact"
                autoComplete="off"
              />
              <label>Contact No.:</label>
              <div className={styles.icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <title>phone-2</title>
                  <g>
                    <path
                      fill="#335262"
                      d="M38,47C17.598,47,1,30.402,1,10c0-0.265,0.105-0.52,0.293-0.707l6-6c0.391-0.391,1.023-0.391,1.414,0l10,10 c0.391,0.391,0.391,1.023,0,1.414L13.414,20L28,34.586l5.293-5.293c0.391-0.391,1.023-0.391,1.414,0l10,10 c0.391,0.391,0.391,1.023,0,1.414l-6,6C38.52,46.895,38.265,47,38,47z"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className={styles.floatingLabel}>
              <input
                className={styles.regCheck}
                placeholder="Address"
                type="text"
                name="rideraddress"
                id="rider-address"
                autoComplete="off"
              />
              <label>Address:</label>
              <div className={styles.icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <title>ic_location_on_48px</title>
                  <g fill="#2e2e2e">
                    <path d="M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className={styles.regcheckBox}>
              <input value="Read" type="checkbox" name="Terms" />{" "}
              <p className={styles.termLabel}>
                I have read the{" "}
                <Link
                  aria-label="link-terms-rider"
                  className={styles.linkTerms}
                  to="/terms"
                >
                  Terms and Conditions
                </Link>
                .
              </p>
            </div>
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
            <button type="submit" className={styles.contactBtn}>
              Register
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default RiderReg
