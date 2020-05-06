import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Layout from "../layouts/index";
// import Img from "gatsby-image";

export default () => (
  <StaticQuery
    query={graphql`
      query SiteQuery {
        site {
          siteMetadata {
            siteName
          }
        }
      }
    `}
    render={(data) => (
      <Layout site={data.site}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto",
            gridGap: "300px",
          }}
        >
          <div style={{ gridColumn: "1 / 1", textAlign: "center" }}>
            <br></br>
            <p>BUY COFFEE</p>
            <p>ORDER DELIVERY/PICKUP</p>
            <br></br>
            <p>Watch our Social Media for updates daily!</p>
            <a href="https://www.instagram.com/eastonecoffee/" target="_">
              @eastonecoffee
            </a>
          </div>
          <img
            src="https://secureservercdn.net/166.62.107.20/81r.496.myftpupload.com/wp-content/uploads/2018/03/BBeastone_002.jpg"
            alt="cafe storefront"
            width="700px"
            height="500px"
          />
        </div>
      </Layout>
    )}
  />
);
