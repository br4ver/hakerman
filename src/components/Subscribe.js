import React from "react"
import { ArenguForm } from "gatsby-plugin-arengu-forms"

import styles from "../css/subscribe.module.css"
const Subscribe = () => {
  return (
    <div className={styles.subsBody}>
      <div className={styles.subsCard}>
        <h2>Subscribe</h2>
        <p>Never miss the latest news</p>
        <ArenguForm id="157421847644968057" />
      </div>
    </div>
  )
}

export default Subscribe
