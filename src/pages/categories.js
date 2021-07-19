import React from "react"
import { graphql, Link } from "gatsby"
import { BgImage } from 'gbimage-bridge';

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./pageStyles/categories.scss"

export default function Category({ data }) {
  return (
    <Layout>
      <SEO title="Areas we serve" />

      <BgImage image={data.file.childImageSharp.gatsbyImageData} className="banner-image" >
        <div className="overlay">
          <h1 className="text">Areas We Serve</h1>
        </div>
      </BgImage>

      <div className="sector-grid-wrapper">
        <ul className="sector-grid">
          {data.allContentfulCategory.edges.map(edge => {
            return (
              <li key={edge.node.id} className="sector-card-wrapper">
                <Link
                  to={`/categories/${edge.node.slug}/`}
                  className="sector-card"
                >
                  <BgImage image={edge.node.image.gatsbyImageData} className="sector-image" >
                    <div className="sector-name-overlay">
                      <h2 className="sector-name">{edge.node.name}</h2>
                    </div>
                  </BgImage>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  );
}

export const data = graphql`{
  allContentfulCategory {
    edges {
      node {
        name
        id
        slug
        image {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
  file(name: {eq: "factory_light_LED"}, extension: {eq: "png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}
`
