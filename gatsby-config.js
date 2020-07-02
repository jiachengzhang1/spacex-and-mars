module.exports = {
  siteMetadata: {
    title: `SpaceX and Mars`,
    author: `Jiacheng Zhang`,
    description: `SpaceX and Mars is an excellent place to display SpaceX launch information, countdown and Mars weather.`,
    url: `https://www.spacexandmars.com`,
    siteUrl: `https://www.spacexandmars.com`,
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
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.spacexandmars.com",
        sitemap: "https://www.spacexandmars.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
        {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map((edge) => {
            const path = edge.node.path;
            return {
              url: site.siteMetadata.siteUrl + path,
              changefreq: `daily`,
              priority: path === "/about/" ? 0.7 : 0.9,
            };
          }),
      },
    },
  ],
};
