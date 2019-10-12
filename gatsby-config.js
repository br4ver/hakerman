require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "gofer",
    description: "More Money",
    author: "hakkerman",
    twitterUsername: "@norbzbasas",
    image: "/gofer1.png",
    siteUrl: "https://hakkerman.netlify.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        accessToken: "cIkocFgYMK4OwTDOQAlbGTk3WLgj-4FvuRG14OCgVyU",
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
