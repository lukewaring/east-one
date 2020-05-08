import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import "../style/Header.scss";

function Header({ menuLinks }) {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { regex: "/logo/" }) {
        childImageSharp {
          fixed(width: 47, height: 47) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <header className="header">
      <Link to="/">
        <Img
          className="logo"
          fixed={data.file.childImageSharp.fixed}
          alt="East One logo"
        />
      </Link>

      <nav>
        <ul className="ul">
          {menuLinks.map((link) => (
            <li className="li" key={link.name}>
              <Link style={{ color: "black" }} className="a" to={link.link}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
