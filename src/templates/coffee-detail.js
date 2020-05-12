import React, { Fragment } from "react";
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
          slug
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
        {data.country ? `${data.name} — ${data.country}` : `${data.name}`}
      </h1>
      <div className="CoffeeDetailContainer">
        <Img className="CoffeeDetailImg" fixed={data.image.fixed} />
        <div className="CoffeeDetailDetails">
          <h2 className="CoffeeDetailPrice">${data.price}</h2>
          <br></br>
          {data.region ? (
            <Fragment>
              <p>Region: {data.region}</p>
              <br></br>
            </Fragment>
          ) : null}
          {data.producer ? (
            <Fragment>
              <p>Producer: {data.producer}</p>
              <br></br>
            </Fragment>
          ) : null}
          {data.elevation ? (
            <Fragment>
              <p>Elevation: {data.elevation}</p>
              <br></br>
            </Fragment>
          ) : null}
          {data.processing ? (
            <Fragment>
              <p>Process: {data.processing}</p>
              <br></br>
            </Fragment>
          ) : null}
          {data.varietal ? (
            <Fragment>
              <p>Varietal: {data.varietal}</p>
              <br></br>
            </Fragment>
          ) : null}
          {data.cropYear ? (
            <Fragment>
              <p>Crop Year: {data.cropYear}</p>
              <br></br>
            </Fragment>
          ) : null}
          {data.notes ? (
            <Fragment>
              <p>{data.notes}</p>
              <br></br>
            </Fragment>
          ) : null}
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
            data-item-url={`https://east-one.netlify.app/coffee/${data.slug}`}
          >
            Add to cart
          </button>
        </div>
      </div>
    </Layout>
  );
}
