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
    <section id="home-featurepost">
      <div className={styles.tours}>
        <div className={styles.center}>
          {posts.map(({ node }) => {
            return <Post key={node.contentful_id} post={node} />
          })}
        </div>
        <div
          className={styles.rightFp}
          data-aos="fade-left"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <h3 className={styles.titleFp}>Latest Updates</h3>
          <p>
            Flexitarian biodiesel put a bird on it, YOLO poke aesthetic seitan
            la croix microdosing whatever disrupt deep v keffiyeh post-ironic
            kickstarter. Gluten-free pork belly kogi synth twee street art.
            Slow-carb butcher gentrify beard sartorial kombucha ugh palo santo
            lo-fi.
          </p>
          <div id="footer-legal" className={styles.linkFp}>
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
      </div>
    </section>
  )
}

export default FeaturedPost
