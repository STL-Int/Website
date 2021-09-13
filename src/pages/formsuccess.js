import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./pageStyles/contact.scss"

function ThankYouText() {
  return (
    <div id="contact" className="contact-form form-success" method="post">
      <h2>
        Thanks for getting in contact, we will be in touch as soon as possible!
      </h2>
    </div>
  )
}
function Contact() {
  return (
    <Layout>
      <SEO title="Contact Us" />
      <div className="contact-page-content">
        <h1 className="heading-contact-page">How can we help?</h1>
        <ThankYouText />
      </div>
    </Layout>
  )
}
export default Contact
