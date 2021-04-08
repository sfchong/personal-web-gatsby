module.exports = {
  siteMetadata: {
    title: "SF Chong",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdowns`,
        name: `markdowns`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
