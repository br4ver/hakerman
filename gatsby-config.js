require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "gofer",
    description: "More Money",
    author: "hakkerman",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `image`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "1l3lduuea9n7",
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "PRjLy4Sn20CNzT8QsmUSdxrL2Ylz36cVLW7QW8Dx33U",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-transition-link`,
  ],
}
