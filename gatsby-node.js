const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      posts: allContentfulBlog {
        edges {
          node {
            slug
          }
        }
      }
      help: allContentfulHelp {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.slug}`,
      component: path.resolve("./src/templates/post-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
    data.help.edges.forEach(({ node }) => {
      createPage({
        path: `help/${node.slug}`,
        component: path.resolve("./src/templates/help-template.js"),
        context: {
          slug: node.slug,
        },
      })
    })

  // amount of posts
  const posts = data.posts.edges
  // posts per page
  const postsPerPage = 6
  //how many pages
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blogs` : `/blogs/${i + 1}`,
      component: path.resolve("./src/templates/blog-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
