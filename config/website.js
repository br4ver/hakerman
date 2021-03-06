module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: "gofer", // Navigation and Site Title
  titleAlt: "gofer Website", // Title for JSONLD
  description: "Gofer Website",
  headline: "Gofer", // Headline for schema.org JSONLD
  url: "https://hakkerman.netlify.com", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  logo: "/logos/logo-512.webp", // Used for SEO
  ogLanguage: "en_US", // Facebook Language

  // JSONLD / Manifest
  favicon: "src/favicon.webp", // Used for manifest favicon generation
  shortName: "gofer", // shortname for manifest. MUST be shorter than 12 characters
  author: "hakkerman", // Author for schemaORGJSONLD
  themeColor: "#00dbc7",
  backgroundColor: "#ffffff",

  twitter: "@norbzbasas", // Twitter Username
  facebook: "gofer-ph", // Facebook Site Name
  googleAnalyticsID: "UA-150085850-1",

  skipNavId: "reach-skip-nav", // ID for the "Skip to content" a11y feature
}
