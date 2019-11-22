import React from "react"
import Post from "../Post/Post"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const getPost = graphql`
  query {
    featuredPost: allContentfulBlog(
      filter: { featured: { eq: true } }
      limit: 3
      sort: { fields: published, order: DESC }
    ) {
      edges {
        node {
          title
          author
          slug
          featured
          contentful_id
          image {
            fluid(maxHeight: 200) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const FeaturedPost = () => {
  const response = useStaticQuery(getPost)
  const posts = response.featuredPost.edges

  return (
    <section id="home-featurepost" className={styles.fpHolder}>
      <div
        className={styles.bgColor}
        data-aos="slide-right"
        data-aos-offset="200"
        data-aos-duration="1100"
        data-aos-once="true"
      ></div>
      <h4
        className={styles.featureUpdate}
        data-aos="fade-down"
        data-aos-easing="ease-in-sine"
        data-aos-anchor="#fp-trigger"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        Updates
      </h4>
      <div className={styles.tours}>
        <div className={styles.rightFp}>
          <h3
            className={styles.titleFp}
            data-aos="fade-in"
            data-aos-offset="100"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Latest Updates
          </h3>
          <p
            data-aos="fade-in"
            data-aos-offset="150"
            data-aos-delay="400"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Have some fresh pick of updates from your favorite local online
            mobile food delivery here in Dagupan City.
          </p>
          <div
            id="footer-legal"
            className={styles.linkFp}
            data-aos="fade-in"
            data-aos-offset="150"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <AniLink
              aria-label="all-post"
              fade
              to="/blogs"
              id="all-post-link"
              className={styles.btnRead}
            >
              All Posts <span>&rarr;</span>
            </AniLink>
          </div>
        </div>
        <div className={styles.center}>
          {posts.map(({ node }) => {
            return <Post key={node.contentful_id} post={node} />
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturedPost
