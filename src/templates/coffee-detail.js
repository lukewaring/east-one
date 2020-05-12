import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts/index";
import Img from "gatsby-image";

export const query = graphql`
  query($slug: String!) {
    allDatoCmsProduct(filter: { slug: { eq: $slug } }) {
      edges {
        node {
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
        <div></div>
        <Img fixed={data.image.fixed} />
        <div>
          <h2>${data.price}</h2>
          <br></br>
          <p1>Region: {data.region}</p1>
          <br></br>
          <p1>Producer: {data.producer}</p1>
          <br></br>
          <p1>Elevation: {data.elevation}</p1>
          <br></br>
          <p1>Process: {data.processing}</p1>
          <br></br>
          <p1>Varietal: {data.varietal}</p1>
          <br></br>
          <p1>Crop Year: {data.cropYear}</p1>
          <br></br>
          <p1>{data.notes}</p1>
        </div>
      </div>
    </Layout>
  );
}
