import React from "react"
import Image from "gatsby-image"
import styles from "../../css/tour.module.css"
import { FaMap } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const getImage = graphql`
  query {
    file(relativePath: { eq: "defaultBcg.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Post = ({ post }) => {
  const data = useStaticQuery(getImage)
  const img = data.file.childImageSharp.fluid
  const { title, author, featured, slug, image } = post
  console.log(data)

  // let mainImage
  // if (images) {
  //   mainImage = images[0].fluid
  // } else {
  //   mainImage = img
  // }
  let mainImage = image ? image[0].fluid : img

  return (
    <article className={styles.tour}>
      <div className={styles.footer}>
        <h3>{title}</h3>
        <AniLink
          fade
          className={styles.stretchedLink}
          to={`/blog/${slug}`}
        ></AniLink>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            {author || "default country"}
          </h4><h6 className={styles.tag}>Featured</h6>
          <div className={styles.details}>
            <h6>{featured}</h6>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        
        <Image fluid={mainImage} className={styles.img} alt="single tour" />
        <div className={styles.link}>{author}</div>
      </div>
    </article>
  )
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    featured: PropTypes.bool.isRequired,
    image: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
}

export default Post
