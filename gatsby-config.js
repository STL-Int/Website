require("dotenv").config({
  path: `.env`,
})

module.exports = {
  pathPrefix: "/Website",

  siteMetadata: {
    title: `STL International Ltd`,
    description: `SAFE answers to HAZERDOUS questions`,
    author: `Ruben Heyse`,
    companyNumber: `04523345`,
    siteUrl: `http://www.stl.co.uk`,
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `babel-plugin-styled-components`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sitemap`,

    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              maxWidth: 590,
              linkImagesToOriginal: true,
              withWebp: true,
              loading: "lazy",
            },
          },
        ],
      },
    },

    //     {
    //       resolve: `gatsby-source-medium`,
    //       options: {
    //         username: `@stl-int`,
    //       },
    //     },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `STL International Ltd`,
        short_name: `STL Int.`,
        start_url: `/`,
        background_color: `#021b57`,
        theme_color: `#021b57`,
        display: `standalone`,
        icon: `src/images/STLLogo.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: `/src/images/SVG/`,
        },
      },
    },

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },

    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        configFile: "robots-txt.config.js",
      },
    },
  ],
}
