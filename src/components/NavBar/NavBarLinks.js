// NavbarLinks.js

import React from "react"
import { Link } from "gatsby"
// import styled from "styled-components"

import "./navLink.scss"

const NavbarLinks = () => {
  return (
    <>
      
        <a className="navLink" href="tel:+441622749633">+44 (0)1622 749 633</a>
      
        <Link className="navLink" to="/categories/" >Categories</Link>
      
        <Link className="navLink" to="/downloads/#brochures" >Brochures</Link>
      
        <Link className="navLink" to="/downloads/">Downloads</Link>
      
        <a className="navLink" href="https://stl-int.medium.com/" target="_blank">News</a>
      
        <Link className="navLink" to="/contact/">Contact</Link>
    </>
  )
}

export default NavbarLinks
