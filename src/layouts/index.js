import React from "react";
import { StaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
// import Img from "gatsby-image";
import Header from "../components/header";

import "../style/index.scss";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={(data) => (
      <React.Fragment>
        <Helmet title={data.site.siteMetadata.title} />
        <Header
          siteTitle={data.site.siteMetadata.title}
          menuLinks={data.site.siteMetadata.menuLinks}
        />
        <div>{children}</div>
        <div className="Wrap"></div>
        {/* <div className="Footer">
          Copyright 2016-2020 East One Coffee Roasters
        </div> */}
      </React.Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
