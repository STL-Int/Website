import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default function AboutPage() {
  return (
    <Layout>
      <SEO title="About Us" />
      <div class="map-responsive">
        <iframe
          title="responsive map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24451.93133408075!2d0.529994866229714!3d51.25546200776696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1dac41d914622bd4!2sSTL%20International%20Ltd!5e0!3m2!1sen!2suk!4v1626432941228!5m2!1sen!2suk"
          width="600"
          height="450"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen
        />
      </div>
    </Layout>
  )
}
