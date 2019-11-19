import React from 'react'
import styles from "../../css/footer.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Link } from "gatsby"
const Merchantlinks = () => {
    return (
      <div className={styles.quickLinks}>
        <div className={styles.footerdesc1}>
          <div className={styles.footLinks}>
            <h6 className={styles.title}>Getting Started</h6>
            <div className={styles.links}>
              <Link aria-label="footer-benefits" to="/merchant/#merchant-benefits">
                Benefits
              </Link>
            </div>
            <div className={styles.links}>
              <Link aria-label="footer-howitwork" to="/merchant/#merchant-sec">
                How it works
              </Link>
            </div>
            <div className={styles.links}>
              <Link aria-label="footer-download" to="/#home-download">
                Download
              </Link>
            </div>
          </div>
          <div className={styles.footLinks}>
            <h6 className={styles.title}>About Company</h6>
            <div className={styles.links}>
              <AniLink aria-label="footer-about" fade to="/about">
                About Us
              </AniLink>
            </div>
            <div className={styles.links}>
              <AniLink aria-label="footer-contact" fade to="/contact">
                Contact Us
              </AniLink>
            </div>
            <div className={styles.links}>
              <AniLink aria-label="footer-help" fade to="/help">
                Knowledge Base
              </AniLink>
            </div>
            <div className={styles.links}>
              <AniLink aria-label="footer-blog" fade to="/blogs">
                Blog
              </AniLink>
            </div>
          </div>
          <div className={styles.footLinks}>
            <h6 className={styles.title}>Legal</h6>
            <div className={styles.links}>
              <AniLink aria-label="footer-terms" fade to="/terms">
                Terms And Conditions
              </AniLink>
            </div>
            <div className={styles.links}>
              <AniLink aria-label="footer-privacy" fade to="/privacy">
                Privacy Policy
              </AniLink>
            </div>
            <div className={styles.links}>
              <AniLink aria-label="footer-Cookie" fade to="/cookie">
                Cookie Policy
              </AniLink>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Merchantlinks
