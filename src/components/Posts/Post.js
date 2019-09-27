import React from "react"
import Image from "gatsby-image"
import styles from "../../css/tour.module.css"
import { FaNintendoSwitch } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types"
import {useStaticQuery, graphql} from 'gatsby'

const getImage = graphql`
  query {
    file(relativePath: { eq: "defaultBcg.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
const Post = ({ post }) => {
const data = useStaticQuery(getImage)
const img = data.file.childImageSharp.fluid 
const { title, category, author, datePublished, slug, images } = post
 
  let mainImage
  if (images){
    mainImage = images[0].fluid
  }
  else{
    mainImage = img
  }

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="we bare bears" />
        <AniLink fade className={styles.link} to={`/posts/${slug}`}>
          details
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{title}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaNintendoSwitch className={styles.icon} />
            {category || "Category"}
          </h4>
          <div className={styles.details}>
            <h6>{datePublished}</h6>
            <h6>from {author}</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    images:PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
}

export default Post
