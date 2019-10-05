require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "gofer",
    description: "More Money",
    author: "hakkerman",
    twitterUsername: "@norbzbasas",
    image: "Phone.jpg",
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
        accessToken: "G8zyLURG0CXEJdat7GaSv0oy2R-RCRO1bcNzFfAVZi4",
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
