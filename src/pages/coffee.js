import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Layout from "../layouts/index";
import Img from "gatsby-image";

export default () => (
  <StaticQuery
    query={graphql`
      query CatalogueQuery {
        products: allDatoCmsProduct {
          edges {
            node {
              id
              name
              price
              country
              region
              producer
              elevation
              processing
              varietal
              cropYear
              notes
              image {
                url
                sizes(maxWidth: 150, imgixParams: { fm: "jpg" }) {
                  ...GatsbyDatoCmsSizes
                }
              }
              slug
            }
          }
        }
        file(relativePath: { regex: "/coffee/" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <Layout>
        <div id="banner">Coffee</div>
        <div className="Catalogue">
          {data.products.edges.map(({ node: product }) => (
            <div className="Catalogue__item" key={product.id}>
              <div>
                <div>
                  <Link to={`coffee/${product.slug}`}>
                    <Img sizes={product.image.sizes} />
                  </Link>
                </div>
                <div className="Product__details">
                  <div className="Product__name">
                    {product.name}
                    <div className="Product__price">${product.price}</div>
                  </div>
                  <button
                    className="Product__buy Product snipcart-add-item"
                    data-item-id={product.id}
                    data-item-name={product.name}
                    data-item-price={product.price}
                    data-item-country={product.country}
                    data-item-region={product.region}
                    data-item-producer={product.producer}
                    data-item-elevation={product.elevation}
                    data-item-processing={product.processing}
                    data-item-varietal={product.varietal}
                    data-item-cropYear={product.cropyear}
                    data-item-notes={product.notes}
                    data-item-image={product.image.url}
                    data-item-url={`https://east-one.netlify.app/coffee`}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    )}
  />
);
