import React from "react"
import styles from "../../css/contact.module.css"
import {Link} from 'gatsby'
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
          <form action="" className={styles.contactLogin} autoComplete="off">
            <h4 className={styles.contactTitle}>
              Become a <span className={styles.contactSpace}>Partner</span>
            </h4>
            <p className={styles.contactText}>
              Earn more by having your meals delivered straight to hungry
              customers.
            </p>
            <div className={styles.floatingLabel}>
              <input
                className={styles.regCheck}
                placeholder="Business Name"
                type="text"
                name="bussinessname"
                id="business-name"
                autoComplete="off"
              />
              <label>Business Name:</label>
              <div className={styles.icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <title>ic_restaurant_menu_48px</title>
                  <g fill="#2e2e2e">
                    <path d="M16.2 26.69l5.66-5.66L7.83 7c-3.12 3.12-3.12 8.19 0 11.31l8.37 8.38zm13.57-3.63c3.05 1.43 7.36.42 10.54-2.76 3.83-3.83 4.56-9.3 1.63-12.23C39 5.14 33.52 5.87 29.7 9.7c-3.18 3.18-4.18 7.49-2.76 10.54-4.45 4.44-19.53 19.52-19.53 19.52l2.83 2.83L24 28.83l13.76 13.76 2.83-2.83L26.83 26l2.94-2.94z"></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className={styles.floatingLabel}>
              <input
                className={styles.regCheck}
                placeholder="Name"
                type="text"
                name="merchantname"
                id="merchant-name"
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
                placeholder="Position"
                type="text"
                name="merchantposition"
                id="merchant-position"
                autoComplete="off"
              />
              <label>Position:</label>
              <div className={styles.icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <title>briefcase-24</title>
                  <g fill="#608cee">
                    <path
                      data-color="color-2"
                      d="M15,18v2H9v-2H1v5c0,0.552,0.448,1,1,1h20c0.552,0,1-0.448,1-1v-5H15z"
                    ></path>{" "}
                    <path
                      fill="#2e2e2e"
                      d="M23,4h-6V1c0-0.552-0.448-1-1-1H8C7.448,0,7,0.448,7,1v3H1C0.448,4,0,4.448,0,5v10c0,0.552,0.448,1,1,1h8v-3 h6v3h8c0.552,0,1-0.448,1-1V5C24,4.448,23.552,4,23,4z M15,4H9V2h6V4z"
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
                name="merchantcontact"
                pattern="[0-9]{11}"
                id="merchant-contact"
                autoComplete="off"
              />
              <label>Contact No:</label>
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
                placeholder="Email(optional)"
                type="email"
                name="merchantemail"
                id="merchant-email"
                autoComplete="off"
              />
              <label>Email:</label>
              <div className={styles.icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <title>email-84</title>
                  <g fill="#608cee">
                    <path
                      fill="#2e2e2e"
                      d="M23,2H1C0.4,2,0,2.4,0,3v18c0,0.6,0.4,1,1,1h22c0.6,0,1-0.4,1-1V3C24,2.4,23.6,2,23,2z M20.7,6.8l-8,7 C12.5,13.9,12.2,14,12,14s-0.5-0.1-0.7-0.2l-8-7c-0.4-0.4-0.5-1-0.1-1.4c0.4-0.4,1-0.5,1.4-0.1l7.3,6.4l7.3-6.4 c0.4-0.4,1-0.3,1.4,0.1C21.1,5.8,21.1,6.4,20.7,6.8z"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className={styles.floatingLabel}>
              <input
                className={styles.regCheck}
                placeholder="Merchant Address"
                type="text"
                name="merchantaddress"
                id="merchant-address"
              />
              <label>Merchant Address:</label>
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
                  aria-label="link-terms-merchant"
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
                <div className={styles.infoIcon}></div>
              </div>
            </div>
            <input className={styles.modalState} id="modal-1" type="checkbox" />
            <button type="submit" className={styles.contactBtn}>
              Register
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default MerchantReg
