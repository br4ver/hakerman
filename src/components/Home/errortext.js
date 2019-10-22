import React from 'react'
import styles from '../../css/error.module.css'
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Errortext = () => {
    return (
      <div className={styles.errorContainer}>
        <p className={styles.errorP}>
          <a
            className={styles.errorA}
            href="/"
          >
            404
          </a>
        </p>
        <div className={styles.errorText}>
        <h1>There is no light down here.</h1>
        <p>
          Just because your path is different doesn't mean you are lost.<br/> The page
          you are looking for is not available right now.
        </p> 
        <AniLink className={styles.errorLink} fade to="/">Go back home.</AniLink>
        </div>

      </div>
    )
}

export default Errortext
