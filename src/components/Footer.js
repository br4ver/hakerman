import React from "react"
import styles from "../css/footer.module.css"
import socialIcons from "../constants/social-icons"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import logo from "../images/gofer1.webp"


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerrow}>
          <AniLink fade to="/" aria-label="logo">
            <img src={logo} alt="gofer logo" className="goferlogo" />
          </AniLink>          
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
