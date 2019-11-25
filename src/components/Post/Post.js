import React from "react"
import Img from "gatsby-image"
import styles from "../../css/tour.module.css"
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
  const { title, slug, image } = post
  console.log(data)

  // let mainImage
  // if (images) {
  //   mainImage = images[0].fluid
  // } else {
  //   mainImage = img
  // }
  let mainImage = image ? image[0].fluid : img

  return (
    <article
      className={styles.tour}
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="1500"
      id="fp-trigger"
      data-aos-once="true"
    >
      <div className="container-footer">
        <div className={styles.info}>
          <h3>{title}</h3>
          <h6 className={styles.tag}>Featured</h6>
          <AniLink
            aria-label="link-singlepost"
            fade
            className="stretched-links"
            to={`/blog/${slug}`}
          >
            Read More
          </AniLink>

          <div className={styles.details}></div>
        </div>

        <div className={styles.fpImg}>
          <Img
            className={styles.img}
            loading="lazy"
            fluid={mainImage}
            alt="single tour"
          />
        </div>
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
