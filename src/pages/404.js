import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./pageStyles/404.scss"

const NotFoundPage = () => (
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
        <Link id="error-button" type="button" className="button" to="/">
          Back To Homepage
        </Link>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
