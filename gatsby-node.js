const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allDatoCmsProduct {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  result.data.allDatoCmsProduct.edges.forEach(({ node }) => {
    createPage({
      path: `coffee/${node.slug}`,
      component: path.resolve(`./src/templates/coffee-detail.js`),
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        slug: node.slug,
      },
    });
  });
};
