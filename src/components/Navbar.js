import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "../css/navbar.module.css"
import { FaBars } from "react-icons/fa"
import logo from "../images/gofer1.webp"


const Navbar = () => {
  const [isOpen, setNav] = useState()
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <AniLink aria-label="link-gofer"  fade to="/">
            <img src={logo} alt="gofer logo" className="goferlogo" />
          </AniLink>
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaBars className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          <div>
            <AniLink fade to="/">
              Home
            </AniLink>
          </div>
          <ul>
            <li className={styles.down}>
              <p className={styles.napv}>Become a Partner</p>
              <div className={styles.SoccerContent}>
                <AniLink aria-label="link-rider" fade to="/rider">
                  Rider
                </AniLink>
                <AniLink aria-label="link-merchant" fade to="/merchant">
                  Merchant
                </AniLink>
              </div>
            </li>
          </ul>

          <div>
            <AniLink aria-label="link-about" fade to="/about">
              About Us
            </AniLink>
          </div>
          <div>
            <AniLink aria-label="link-help" to="/help" className="btn-help">
              Help
            </AniLink>
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
