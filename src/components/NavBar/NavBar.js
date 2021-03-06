// Navbar.js

import React, { useState } from "react"
import Logo from "./Logo"
import styled from "styled-components"
import NavbarLinks from "./NavBarLinks"

const Navigation = styled.nav`
  height: 80px;
  display: flex;
  background-color: #001035;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0.5em;
  z-index: 2;
  align-self: center;

  @media (max-width: 768px) {
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  margin-right: 1em;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 5vh;
    background-color: #00091f;
    transition: all 0.3s ease-in;
    top: 10vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: #fff;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 15px;
    height: 3px;
    background-color: #fff;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    top: 0;
    left: 0;
  }
  ::after {
    bottom: 0;
    right: 0;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(90deg)  translate(2px, -7.4px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    transform: ${props =>
      props.open ? "rotate(90deg) translate(-2px, 7.4px)" : "rotate(0deg)"};
    top: 10px;
  }
`
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation>
      <Logo />
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <Hamburger open={navbarOpen} />
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
    </Navigation>
  )
}

export default Navbar
