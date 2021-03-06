import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "../css/navbar.module.css"
import { FaBars, FaChevronDown } from "react-icons/fa"
import DarkModeToggle from "./DarkModeToggle"
const Navbar = () => {
  const [isOpen, setNav] = useState()
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }
  return (
    <nav className="navbar">
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <div className="navlogo">
            <AniLink
              aria-label="link-gofer"
              fade
              to="/"
              className="home-link"
              id="navlink-logo"
            ></AniLink>
          </div>

          <button
            aria-label="button"
            type="button"
            className={styles.logoBtn}
            onClick={toggleNav}
          >
            <FaBars className={styles.logoIcon} />
          </button>
        </div>
        <div
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          <div>
            <AniLink fade to="/" id="navlink-home">
              Home
            </AniLink>
          </div>
          <div>
            <div className="down">
              <p className={styles.navp}>
                Become a Partner
                <FaChevronDown className={styles.chev} />
              </p>
              <div className="Soccer-content">
                <AniLink
                  aria-label="link-rider"
                  id="navlink-rider"
                  fade
                  to="/rider"
                >
                  Driver
                </AniLink>
                <AniLink
                  aria-label="link-merchant"
                  id="navlink-merchant"
                  fade
                  to="/merchant"
                >
                  Merchant
                </AniLink>
              </div>
            </div>
          </div>
          <div>
            <AniLink
              aria-label="link-about"
              fade
              to="/about"
              id="navlink-about"
            >
              About Us
            </AniLink>
          </div>
          <div>
            <AniLink
              aria-label="link-help"
              fade
              to="/help"
              className={styles.btnHelp}
              id="navlink-help"
            >
              Help
            </AniLink>
          </div>
        </div>
        <DarkModeToggle />
      </div>
    </nav>
  )
}

export default Navbar
