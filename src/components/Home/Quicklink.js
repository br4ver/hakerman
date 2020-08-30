import React from "react"
import styles from "../../css/footer.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
const Quicklink = () => {
  return (
    <div className="quick-links">
      <div className={styles.footerdesc1}>
        <div className={styles.footLinks}>
          <h6 className={styles.title}>Getting Started</h6>
          <div className={styles.links}>
            <AniLink aria-label="footer-about" fade to="/#home-benefits">
              Benefits
            </AniLink>
          </div>
          <div className={styles.links}>
            <AniLink aria-label="footer-about" fade to="/#home-howitwork">
              How it works?
            </AniLink>
          </div>
          <div className={styles.links}>
            <AniLink aria-label="footer-about" fade to="/#home-download">
              Download
            </AniLink>
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
            <AniLink aria-label="footer-contact" fade to="/support">
              Contact Us
            </AniLink>
          </div>
          <div className={styles.links}>
            <AniLink aria-label="footer-help" fade to="/help">
              Help Center
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
            <AniLink aria-label="footer-terms" fade to="/terms-of-use">
              Terms of Use
            </AniLink>
          </div>
          <div className={styles.links}>
            <AniLink aria-label="footer-privacy" fade to="/privacy">
              Privacy Policy
            </AniLink>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Quicklink
