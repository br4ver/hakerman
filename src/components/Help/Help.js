import React from "react"
import styles from "../../css/tour.module.css"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Help = ({ help }) => {
  const { title, slug, images, description } = help
  console.log(images)

  return (
    <article className={styles.help}>
      <div className="help-card">
        <div className="card-pic-wrap">
          <Img fluid={images[0].fluid} className="help-img" alt="single tour" />
        </div>
        <div className={styles.cardContent}>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>
            <Link to={`/help/${slug}`}>View All</Link>
          </p>
        </div>
      </div>
    </article>
  )
}

export default Help
