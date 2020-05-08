import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../layouts/index";
import Img from "gatsby-image";

import "../style/snipcart.scss";

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
            }
          }
        }
      }
    `}
    render={(data) => (
      <Layout>
        <div className="Catalogue">
          {data.products.edges.map(({ node: product }) => (
            <div className="Catalogue__item" key={product.id}>
              <div>
                <div>
                  <Img sizes={product.image.sizes} />
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
                    data-item-url={`/`}
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
