module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'gofer', // Navigation and Site Title
  titleAlt: 'gofer PH', // Title for JSONLD
  description: 'More Money',
  headline: 'More Money', // Headline for schema.org JSONLD
  url: 'https://hakkerman.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/logo-512.webp', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.webp', // Used for manifest favicon generation
  shortName: 'gofer', // shortname for manifest. MUST be shorter than 12 characters
  author: 'hakkerman', // Author for schemaORGJSONLD
  themeColor: '#00dbc7',
  backgroundColor: '#2f2478',

  twitter: '@norbzbasas', // Twitter Username
  facebook: 'gofer-ph', // Facebook Site Name
  googleAnalyticsID: 'UA-47519312-7',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
