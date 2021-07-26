import React from "react"
// import ReactDOM from "react-dom"
import PropTypes from "prop-types"


import NavBar from "./NavBar/NavBar"
import Footer from "./footer/footer"

import "./layoutStyles.scss"

export function embedlyScript(){
  return
    
  
}

function Layout ({ children }){
  
  return (
    <body>
      <NavBar />

      <div className="main-content">
        <main>{children}</main>
      </div>

      <Footer />


    </body>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
