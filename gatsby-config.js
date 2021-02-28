module.exports = {
  siteMetadata: {
    title: "Charles Roberts Design",
    siteUrl: "https://charlesrobertsdesign"
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "fb17W8uwwOUXZd1O4K-ZJ5Q0BhWjD9NoStN-VlqwNPM",
        spaceId: "22440r8nc9lr",
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-158025383-3",
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
