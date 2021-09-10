import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useForm, ValidationError } from '@formspree/react';

import "./pageStyles/contact.scss"

function ContactForm() {
  const [state, handleSubmit] = useForm("mgerrqlz");
  if (state.succeeded) {
      return (
        <form
            id="contact"
            className="contact-form form-success"
            method="post"
            onSubmit={handleSubmit}
        >
            <h2>Thanks for getting in contact, we will be in touch as soon as possible!</h2>
        </form>
      );
  }
  
  return (
    <form
        id="contact"
        className="contact-form"
        method="post"
        onSubmit={handleSubmit}
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
        <ValidationError field="email" prefix="Email" errors={state.errors} />
        </div>

        <div className="message-wrapper">
        <label htmlFor="message">Message</label>
        <textarea
            id="message"
            name="message"
            required
            className="input"
        />
        <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
        />
        </div>

        <button className="submit-button" type="submit" disabled={state.submitting}>
        <h3>Send</h3>
        <span className="arrow">↦</span>
        </button>
    </form>
  );
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
    );
}
export default Contact;
