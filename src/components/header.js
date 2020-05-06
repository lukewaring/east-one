import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      marginTop: "3rem",
      marginBottom: "7.5rem",
    }}
  >
    <div
      style={{
        marginBottom: "1.45rem",
      }}
    >
      <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: "1.45rem 1.0875rem",
          display: "flex",
          justifyItems: "space-between",
          alignItems: "center",
        }}
      >
        <h1>
          <Link
            to="/"
            style={{
              color: "black",
              textDecoration: "none",
              marginRight: "2rem",
            }}
          >
            <img
              src="https://secureservercdn.net/166.62.107.20/81r.496.myftpupload.com/wp-content/uploads/2017/09/square.png"
              alt="East One logo"
              width="50px"
              height="50px"
            />
          </Link>
        </h1>
        <div>
          <nav>
            <ul style={{ display: "flex", flex: 1 }}>
              {menuLinks.map((link) => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                    textTransform: "uppercase",
                    fontWeight: 700,
                  }}
                >
                  <Link
                    style={{ color: "black", textDecoration: "none" }}
                    to={link.link}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
