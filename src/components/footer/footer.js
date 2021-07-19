import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

import "./footer.scss"

export default function Footer() {
  const data = useStaticQuery(graphql`{
  file(name: {eq: "STLLogo"}, extension: {eq: "png"}) {
    childImageSharp {
      gatsbyImageData(
        width: 80
        quality: 80
        layout: FULL_WIDTH
        placeholder: BLURRED
      )
    }
  }
  site {
    siteMetadata {
      companyNumber
    }
  }
}
`)

  return (
    <footer>
      <div className="content-wrapper">
        <div className="links-wrapper">
          <ul className="links-list">
            <li className="list-item">
              <Link to="/legal/" className="link">
                Legal
              </Link>
            </li>
            <li className="list-item">
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li className="list-item">
              <Link to="/categories" className="link">
                Categories
              </Link>
            </li>
            <li className="list-item">
              <Link to="/about" className="link">
                About Us
              </Link>
            </li>
            <li className="list-item">
              <Link to="/contact" className="link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="brand-wrapper">
          <ul className="brand-list">
            <li className="logo-list-item brand-item">
              <div className="logo-wrapper" as={Link} to="/">
                <Link to="/">
                  <GatsbyImage
                    image={data.file.childImageSharp.gatsbyImageData}
                    alt="STL International Ltd Logo" />
                </Link>
              </div>
            </li>
            <li className="brand-item">
              <p className="copyright">
                &copy; {new Date().getFullYear()}: STL International Ltd
              </p>
            </li>
            <li className="brand-item">
              <p className="company-number">
                Company N<sup>o</sup>: {data.site.siteMetadata.companyNumber}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
