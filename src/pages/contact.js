import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./pageStyles/contact.scss"

function ContactForm() {
  return (
    // TODO: Add subject field
    <form
      id="contact"
      className="contact-form"
      method="post"
      action="https://formsubmit.co/admin@stl-int.uk"
    >
      <div className="name-wrapper">
        <label htmlFor="name">Full Name</label>
        <input id="name" type="text" name="name" required className="input" />
        <p className="sub-text">e.g. John Smith</p>
      </div>

      <div className="email-wrapper">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="input"
        />
        <p className="sub-text">e.g. you@example.com</p>
      </div>

      <div className="message-wrapper">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required className="input" />
      </div>

      <button className="submit-button" type="submit">
        <h3>Send</h3>
        <span className="arrow">↦</span>
      </button>

      <input
        type="hidden"
        name="_next"
        value="https://www.stl-int.uk/formsuccess/"
      ></input>
      <input id="honeypot" type="text" name="_honey"></input>
      <input type="hidden" name="_template" value="box"></input>
      <input type="hidden" name="_url" value="https://stl-int.uk/contact.html"></input>
    </form>
  )
}
function Contact() {
  return (
    <Layout>
      <SEO title="Contact Us" />
      <div className="contact-page-content">
        <h1 className="heading-contact-page">How can we help?</h1>
        <ContactForm />
      </div>
    </Layout>
  )
}
export default Contact
