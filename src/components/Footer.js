import React from "react"
import styles from "../css/footer.module.css"
import socialIcons from "../constants/social-icons"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import logo from "../images/gofer1.webp"
import {Link} from 'gatsby'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerrow}>
        <div className={styles.footerdesc}>
          <AniLink fade to="/">
            <img src={logo} alt="gofer logo" className="goferlogo" />
          </AniLink>
          <div className={styles.icons}>
            {socialIcons.map((item, index) => {
              return (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </a>
              )
            })}
          </div>
          <div className={styles.copyright}>
            copyright &copy; {new Date().getFullYear()} all rights reserved
          </div>
        </div>
        <div className={styles.footerdesc1}>
          <div>
            <h6 className={styles.title}>Getting Started</h6>
            <ul>
              <div className={styles.links}>
                <Link to="/#home-benefits">
                  Benefits
                </Link>
              </div>
              <div className={styles.links}>
                <Link to="/#home-howitwork">
                  How it works
                </Link>
              </div>
              <div className={styles.links}>
                <Link to="/#home-download">
                  Download
                </Link>
              </div>
            </ul>
          </div>
          <div>
            <h6 className={styles.title}>About Company</h6>
            <ul>
              <div className={styles.links}>
                <AniLink fade to="/about">
                  About Us
                </AniLink>
              </div>
              <div className={styles.links}>
                <AniLink fade to="/contact">
                  Contact Us
                </AniLink>
              </div>
              <div className={styles.links}>
                <AniLink fade to="/help">
                  Knowledge Base
                </AniLink>
              </div>
              <div className={styles.links}>
                <AniLink fade to="/blogs">
                  Blog
                </AniLink>
              </div>
            </ul>
          </div>
          <div>
            <h6 className={styles.title}>Legal</h6>
            <ul>
              <div className={styles.links}>
                <AniLink fade to="/terms">
                  Terms And Conditions
                </AniLink>
              </div>
              <div className={styles.links}>
                <AniLink fade to="/privacy">
                  Privacy Policy
                </AniLink>
              </div>
              <div className={styles.links}>
                <AniLink fade to="/cookie">
                  Cookie Policy
                </AniLink>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
