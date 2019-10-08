import React from "react"
import styles from "../../css/tour.module.css"
import {Link} from "gatsby"


const Help = ({ help }) => {
  const { title, slug } = help

  return (
    <article className={styles.help}>
      <div className={styles.imgContainer}>

      </div>
      <div className={styles.footer}>
        <h3>{title}</h3>
        <div className={styles.info}>     
          <Link to={`/help/${slug}`}>
          View All
          </Link>
          <div className={styles.details}></div>
        </div>
      </div>
    </article>
  )
}

export default Help
