import React from "react"
import PostList from "./PostList"
import { useStaticQuery, graphql } from "gatsby"

const getPosts = graphql`
  {
    posts: allContentfulPost(sort: { fields: [datePublished], order: DESC }) {
      edges {
        node {
          title
          subtitle
          author
          slug
          datePublished(formatString: "YYYY MM DD")
          category
          content {
            content
          }
          contentful_id
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

const Posts = () => {
  const { posts } = useStaticQuery(getPosts)

  return <PostList posts={posts} />
}

export default Posts
