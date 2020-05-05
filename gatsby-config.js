require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteName: "East One Coffee Roasters",
    title: "East One Coffee Roasters",
    menuLinks: [
      {
        name: "Buy Coffee",
        link: "/coffee",
      },
      {
        name: "Locations",
        link: "/locations",
      },
      {
        name: "Wholesale",
        link: "/wholesale",
      },
      {
        name: "Contact",
        link: "/contact",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: process.env.DATO_API_TOKEN },
    },
    {
      resolve: "gatsby-plugin-snipcart",
      options: {
        apiKey: process.env.SNIPCART_API_KEY,
        autopop: false,
      },
    },
  ],
};
