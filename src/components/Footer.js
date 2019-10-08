import React from "react"
import styles from "../css/footer.module.css"
import socialIcons from "../constants/social-icons"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import logo from "../images/gofer1.png"

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
                <AniLink fade to="/">
                  Benefits
                </AniLink>
              </div>
              <div className={styles.links}>
                <AniLink fade to="/">
                  How it works
                </AniLink>
              </div>
              <div className={styles.links}>
                <AniLink fade to="/">
                  Download
                </AniLink>
              </div>
            </ul>
          </div>
          <div>
            <h6 className={styles.title}>About Company</h6>
            <ul>
              <div className={styles.links}>
                <AniLink fade to="/">
                  About Us
                </AniLink>
              </div>
              <div className={styles.links}>
                <AniLink fade to="/">
                  Contact Us
                </AniLink>
              </div>
              <div className={styles.links}>
                <AniLink fade to="/">
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
                <AniLink fade to="/">
                  Terms And Conditions
                </AniLink>
              </div>
              <div className={styles.links}>
                <AniLink fade to="/">
                  Privacy Policy
                </AniLink>
              </div>
              <div className={styles.links}>
                <AniLink fade to="/">
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
