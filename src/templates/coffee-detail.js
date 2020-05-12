import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts/index";
import Img from "gatsby-image";

export const query = graphql`
  query($slug: String!) {
    allDatoCmsProduct(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          id
          country
          cropYear
          elevation
          name
          notes
          price
          processing
          producer
          region
          varietal
          image {
            fixed(width: 400, height: 400) {
              ...GatsbyDatoCmsFixed
            }
          }
        }
      }
    }
  }
`;

export default function(context) {
  const data = context.data.allDatoCmsProduct.edges[0].node;
  return (
    <Layout>
      <h1 className="CoffeeDetailTitle">
        {data.name} — {data.country}
      </h1>
      <div className="CoffeeDetailContainer">
        <Img className="CoffeeDetailImg" fixed={data.image.fixed} />
        <div className="CoffeeDetailDetails">
          <h2 className="CoffeeDetailPrice">${data.price}</h2>
          <br></br>
          <p1>Region: {data.region}</p1>
          <br></br>
          <br></br>
          <p1>Producer: {data.producer}</p1>
          <br></br>
          <br></br>
          <p1>Elevation: {data.elevation}</p1>
          <br></br>
          <br></br>
          <p1>Process: {data.processing}</p1>
          <br></br>
          <br></br>
          <p1>Varietal: {data.varietal}</p1>
          <br></br>
          <br></br>
          <p1>Crop Year: {data.cropYear}</p1>
          <br></br>
          <br></br>
          <p1>{data.notes}</p1>
          <br></br>
          <br></br>
          <button
            className="CoffeeDetail__buy Product snipcart-add-item"
            data-item-id={data.id}
            data-item-name={data.name}
            data-item-price={data.price}
            data-item-country={data.country}
            data-item-region={data.region}
            data-item-producer={data.producer}
            data-item-elevation={data.elevation}
            data-item-processing={data.processing}
            data-item-varietal={data.varietal}
            data-item-cropYear={data.cropyear}
            data-item-notes={data.notes}
            data-item-image={data.image.url}
            data-item-url={`/`}
          >
            Add to cart
          </button>
        </div>
      </div>
    </Layout>
  );
}
