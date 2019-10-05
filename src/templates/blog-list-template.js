import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "../css/blog.module.css"
import BlogCard from "../components/Blog/BlogCard"
import Title from "../components/Title"
import StyledHero from "../components/StyledHero"
import HeroTitle from "../components/Home/superBanner"
import SEO from "../components/SEO"

const Blog = props => {
  const { currentPage, numPages } = props.pageContext

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages

  const prevPage =
    currentPage - 1 === 1 ? `/blogs/` : `/blogs/${currentPage - 1}`
  const nextPage = `/blogs/${currentPage + 1}`

  const { data } = props
  return (
    <Layout>
      <SEO title="Blogs"/>
      <StyledHero img={data.blogsBg.childImageSharp.fluid}>
        <HeroTitle text="GOOD FOOD FOR EVERY MOOD" />
      </StyledHero>
      <section className={styles.blog}>
        <Title title="latest" subtitle="posts" />
        <div className={styles.center}>
          {data.posts.edges.map(({ node }) => {
            return <BlogCard key={node.id} blog={node} />
          })}
        </div>
        <section className={styles.links}>
          {!isFirst && (
            <AniLink fade to={prevPage} className={styles.link}>
              Prev
            </AniLink>
          )}

          {Array.from({ length: numPages }, (_, i) => {
            return (
              <AniLink
                key={i}
                fade
                to={`/blogs/${i === 0 ? "" : i + 1}`}
                className={
                  i + 1 === currentPage
                    ? `${styles.link} ${styles.active}`
                    : `${styles.link}`
                }
              >
                {i + 1}
              </AniLink>
            )
          })}
          {!isLast && (
            <AniLink fade to={nextPage} className={styles.link}>
              Next
            </AniLink>
          )}
        </section>
      </section>
    </Layout>
  )
}

export const query = graphql`
         query getPosts($skip: Int!, $limit: Int!) {
           posts: allContentfulBlog(
             skip: $skip
             limit: $limit
             sort: { fields: published, order: DESC }
           ) {
             edges {
               node {
                 slug
                 title
                 id: contentful_id
                 published(formatString: "MMMM Do, YYYY")
                 image {
                   fluid(quality: 90, maxWidth: 4160) {
                     ...GatsbyContentfulFluid
                   }
                 }
               }
             }
           }
           blogsBg: file(relativePath: { eq: "rider.jpg" }) {
             childImageSharp {
               fluid(quality: 90, maxWidth: 4160) {
                 ...GatsbyImageSharpFluid_withWebp
               }
             }
           }
         }
       `
export default Blog
