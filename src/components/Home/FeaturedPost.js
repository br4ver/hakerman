import React from "react"
import Post from "../Posts/Post"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import styles from "../../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const getPosts = graphql`
  query {
    featuredPost: allContentfulPost(filter: { featured: { eq: true } }) {
      edges {
        node {
          title
          subtitle
          slug
          author
          datePublished(formatString: "YYYY MM DD")
          contentful_id
          category
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          featured
        }
      }
    }
  }
`

const FeaturedPosts = () => {
  const response = useStaticQuery(getPosts)
  const posts = response.featuredPost.edges

  return (
    <section className={styles.tours}>
      <Title title="featured" subtitle="posts" />
      <div className={styles.center}>
        {posts.map(({ node }) => {
          return <Post key={node.contentful_id} post={node} />
        })}
      </div>
      <AniLink fade to="/posts" className="btn-primary">
        All Articles
      </AniLink>
    </section>
  )
}

export default FeaturedPosts
