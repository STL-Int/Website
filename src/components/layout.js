import React from "react"
// import ReactDOM from "react-dom"
import PropTypes from "prop-types"

import NavBar from "./NavBar/NavBar"
import Footer from "./footer/footer"

import "./layoutStyles.scss"

function Layout({ children }) {
  return (
    <main>
      <NavBar />

      <div className="main-content">
        <main>{children}</main>
      </div>

      <Footer />
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
