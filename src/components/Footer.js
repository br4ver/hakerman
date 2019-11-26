import React from "react"
import styles from "../css/footer.module.css"
import socialIcons from "../constants/social-icons"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Footer = () => {
  return (
    <footer className="footer">
      <div className={styles.footerrow}>
        <div className="navlogo">
          <AniLink
            aria-label="logo-gofer"
            fade
            to="/"
            id="navlink-logo"
          ></AniLink>
        </div>
        <div className={styles.copyright}>
          copyright &copy; {new Date().getFullYear()} all rights reserved
        </div>
        <div className={styles.icons}>
          {socialIcons.map((item, index) => {
            return (
              <a
                aria-label="social-links"
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
      </div>
    </footer>
  )
}

export default Footer
