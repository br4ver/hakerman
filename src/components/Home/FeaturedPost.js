import React from "react"
import Post from "../Post/Post"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
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
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
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
    <section id="home-featurepost" className={styles.tours}>
      <Title title="Latest" subtitle="Update" />
      <div className={styles.center}>
        {posts.map(({ node }) => {
          return <Post key={node.contentful_id} post={node} />
        })}
      </div>
      <AniLink aria-label="all-post" fade to="/blogs" className="btn-read">
        all Posts
      </AniLink>
    </section>
  )
}

export default FeaturedPost
