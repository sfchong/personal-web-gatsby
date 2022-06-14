import { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Adrian Chong',
    titleTemplate: '%s | Adrian Chong',
    url: `https://adrianchongsf.com`,
    description: `Software engineer's personal website and blog`,
  },
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
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
              maxWidth: 600,
              wrapperStyle: `margin-bottom:20px`,
              showCaptions: ['title'],
              markdownCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
            },
          },
          'gatsby-remark-static-images',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Adrian Chong`,
        short_name: `Adrian Chong`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/sf.png`,
      },
    },
  ],
};

export default config;
