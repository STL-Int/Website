// Logo.js
import React from "react"
import { GatsbyImage } from "gatsby-plugin-image";
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import 'core-js'; 

const LogoWrapper = styled.nav`
  width: 80px;
  margin-left: 2em;

  @media (max-width: 768px) {
    width: 50px;
  }
`

const Logo = () => {
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
}
`)

  return (
    <LogoWrapper as={Link} to="/">
      <GatsbyImage
        image={data.file.childImageSharp.gatsbyImageData}
        className="logo-img"
        alt="STL International Ltd Logo" />
    </LogoWrapper>
  );
}

export default Logo
