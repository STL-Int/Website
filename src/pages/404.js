import React from "react"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./pageStyles/404.scss"

function NotFoundPage () {
  return (
    <Layout> 
      <SEO title="404: Not found" />
      <div className="error-page-wrapper">
        <div className="error-title-wrapper">
          <h1 className="error-title">404</h1>
        </div>
        <div className="error-message-wrapper">
          <h2 className="error-message">
            The Page You Requested Could Not Be Found
          </h2>
        </div>
      
        <div className="error-button-wrapper">
          
          <button 
            className="btn-white error-button" 
            onClick={() => navigate("/")}
          >
            <p>Go To Homepage</p>
          </button>
          <button 
            className="btn-white error-button" 
            onClick={() => navigate("/contact")}
          >
            <p>Contact Us</p>
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
