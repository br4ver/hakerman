require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const website = require('./config/website')

const pathPrefix = website.pathPrefix === "/" ? "" : website.pathPrefix

module.exports = {
  /* General Information */
  pathPrefix: website.pathPrefix,
  siteMetadata: {
    siteUrl: website.url + pathPrefix, // For gatsby-plugin-sitemap
    pathPrefix,
    title: website.title,
    titleAlt: website.titleAlt,
    description: website.description,
    banner: website.logo,
    headline: website.headline,
    siteLanguage: website.siteLanguage,
    ogLanguage: website.ogLanguage,
    author: website.author,
    twitter: website.twitter,
    facebook: website.facebook,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["gilroy-extrabold", "gilroy-light"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: "#ff0076",
        easing: "ease",
        showSpinner: false,
      },
    },
    `gatsby-plugin-preload-fonts`,
    {
      resolve: "gatsby-plugin-preconnect",
      options: {
        domains: [
          "https://images.ctfassets.net",
          "https://www.google-analytics.com",
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://hakkerman.netlify.com`,
      },
    },
    `gatsby-plugin-advanced-sitemap`,
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
    {
      resolve: "gatsby-plugin-lunr",
      options: {
        languages: [{ name: "en" }],
        fields: [
          { name: "answer", store: true, attributes: { boost: 20 } },
          { name: "question", store: true, attributes: { boost: 5 } },
          { name: "title" },
        ],
        resolvers: {
          allContentfulHelp: {
            answer: edges => edges.node.customer.answer,
            question: edges => edges.node.customer.question,
          },
        },
        filename: "search_index.json",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-transition-link`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-KZV57P3",
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: function() {
          return {
            pageType: window.pageType,
          }
        },
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: website.googleAnalyticsID,
        head: false,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: website.title,
        short_name: website.titleAlt,
        description: website.description,
        start_url: "/",
        background_color: website.backgroundColor,
        theme_color: website.themeColor,
        display: "standalone",
        icon: website.favicon,
      },
    },
    "gatsby-plugin-offline",
  ],
}
