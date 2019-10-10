import React from "react"
import styles from "../../css/tour.module.css"
import {Link} from "gatsby"
import Img from "gatsby-image"

const Help = ({ help }) => {
  const { title, slug, images } = help
  console.log(images);
  

  return (
    <article className={styles.help}>
      <div className={styles.helpCard}>
        <div className={styles.cardPicWrap}>
          <Img
            fluid={images[0].fluid}
            className={styles.helpImg}
            alt="single tour"
          />
        </div>
        <div className={styles.cardContent}>
          <h3>{title}</h3>
          <p>
            Blossom dorset heath scabious ipsum. Grape hyacinth bee balm bird of
            paradise obedient plant african lily lily. Spring foxglove florist’s
            nighmare primrose.
          </p>
          <p>
            <Link to={`/help/${slug}`}>View All</Link>
          </p>
        </div>
      </div>
    </article>
  )
}

export default Help
