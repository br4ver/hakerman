const path = require("path");

exports.createPages =async({graphql,actions}) => {
const {createPage} = actions
const { data } = await graphql(`
            query {
            posts:allContentfulPost {
                edges {
                node {
                    slug
                }
            }
        }
    }
`)
data.posts.edges.forEach(({node}) =>{
    createPage({
            path: `posts/${node.slug}`,
            component:path.resolve("./src/templates/post-template.js"),
            context:{
                slug:node.slug,
            },
        })
    })
} 