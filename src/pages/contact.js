import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./pageStyles/contact.scss"

export default function Contact() {
  return (
    <Layout>
      <SEO title="Contact Us" />
      <div className="contact-page-content">
        <h1 className="heading-contact-page">How can we help?</h1>

        <form
          className="contact-form"
          method="post"
          action="https://formspree.io/f/mgerrqlz "
        >
          <div className="name-wrapper">
            <label htmlFor="name">Full name</label>
            <input
              id="name"
              type="text"
              name="fullname"
              required
              className="input"
            />
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
            <textarea
              id="message"
              name="message"
              required
              className="input"
            ></textarea>
          </div>

          <button className="submit-button" type="submit">
            <h3>Send</h3>
            <span className="arrow">↦</span>
          </button>

          <input type="hidden" name="_recaptcha" id="_recaptcha"/>
          <script src="https://www.google.com/recaptcha/api.js?render=6Lf7UsoUAAAAACT2Z6gLyh7RTDfyYGxfZ-M4D0ph"></script>
          <script src="https://www.flexyform.com/js/recaptcha.js"></script>
        </form>
      </div>
    </Layout>
  )
}
