module.exports = {
  siteMetadata: {
    title: "SF Chong",
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdowns`,
        name: `markdowns`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdowns/images`,
        name: `markdownImages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              wrapperStyle: `margin-bottom:20px`,
            },
          },
        ],
      },
    },
  ],
}
