// NavbarLinks.js

import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import "./navLink.scss"

const NavItem = styled(Link)`
  text-decoration: none;
  color: #fff;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1em;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #6dc7fc;
    height: 1px;
    transition: all 0.3s ease-in;
  }

  :hover {
    color: #6dc7fc;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`
const NavbarLinks = () => {
  return (
    <>
      <a className="phone" href="tel:+441622749633">
        +44 (0)1622 749 633
      </a>
      <NavItem as={Link} to="/blog/">
        News
      </NavItem>
      <NavItem as={Link} to="/categories/">
        Categories
      </NavItem>
      <NavItem as={Link} to="/downloads/#brochures">
        Brochures
      </NavItem>
      <NavItem as={Link} to="/contact/">
        Contact
      </NavItem>
    </>
  )
}

export default NavbarLinks
