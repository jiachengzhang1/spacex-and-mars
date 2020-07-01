module.exports = {
  siteMetadata: {
    title: `SpaceX and Mars`,
    author: `Jiacheng Zhang`,
    description: `SpaceX and Mars is an excellent place to display SpaceX launch information, countdown and Mars weather.`,
    url: `https://www.spacexandmars.com`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Orbitron:400,500,600,700,800,900", "Ubuntu"],
        },
      },
    },
  ],
};
