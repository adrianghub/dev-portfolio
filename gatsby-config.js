module.exports = {
  siteMetadata: {
    title: `Adrian Zinko Dev Portfolio`,
    description: `Personal portfolio with about, skills, projects and contact section`,
    author: `@adrianzinko`,
    keywords: `portfolio, react, gatsby, blog`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `adrian-zinko-portfolio`,
        short_name: `dev-portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/cv-icon.png`,
      },
    },
    `gatsby-plugin-offline`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
