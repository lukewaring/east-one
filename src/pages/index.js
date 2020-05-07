import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../layouts/index";
import Img from "gatsby-image";
import "../style/index.scss";

function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { regex: "/cafe/" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <div className="gridContainer">
        <div className="gridItem1">
          <br></br>
          <br></br>
          <br></br>
          <a href="/coffee">BUY COFFEE</a>
          <br></br>
          <br></br>
          <a href="https://www.trycaviar.com/m/east-one-coffee-roasters-6537">
            ORDER DELIVERY/PICKUP
          </a>
          <br></br>
          <br></br>
          <br></br>
          <p>Watch our Social Media for updates daily!</p>
          <br></br>
          <a href="https://www.instagram.com/eastonecoffee/">@eastonecoffee</a>
        </div>
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="cafe storefront"
          className="gridItem2"
        />
      </div>
      <div className="indexFooter">
        <p>
          East One is still open at both Carroll Gardens and Chelsea for Take
          out and delivery. (Delivery links:{" "}
          <a href="https://www.trycaviar.com/m/east-one-coffee-roasters-6537">
            Carroll Gardens
          </a>{" "}
          /{" "}
          <a href="https://www.trycaviar.com/m/east-one-coffee-roasters--chelsea-15283">
            Chelsea
          </a>
          )
        </p>
        <br></br>
        <p>Carroll Gardens: 8am – 5pm (kitchen till 3pm)</p>
        <br></br>
        <p>Chelsea: 8am – 4pm</p>
        <br></br>
      </div>
    </Layout>
  );
}

export default IndexPage;
