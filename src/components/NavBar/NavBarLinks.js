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
  font-weight: 200;
  font-size: 1rem;

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

  :hover,
  a:hover, Link:hover{
    color: #6dc7fc;
    ::after {
      width: 100%;
    }
  }

  a, Link {
    text-decoration: none;
    color: #fff;
  }

  @media (max-width: 768px) {
    padding: 15px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`
const NavbarLinks = () => {
  return (
    <>
      <NavItem>
        <a href="tel:+441622749633">+44 (0)1622 749 633</a>
      </NavItem>
      <NavItem>
        <Link to="/categories/" >Categories</Link>
      </NavItem>
      <NavItem>
        <Link to="/downloads/#brochures" >Brochures</Link>
      </NavItem>
      <NavItem>
        <Link to="/downloads/">Downloads</Link>
      </NavItem>
      <NavItem>
        <a href="https://stl-int.medium.com/" target="_blank">News</a>
      </NavItem>
      <NavItem>
        <Link to="/contact/">Contact</Link>
      </NavItem>
    </>
  )
}

export default NavbarLinks
