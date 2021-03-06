import React from "react"
import { graphql } from "gatsby"
import { BgImage } from "gbimage-bridge"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CategoryCard from "../components/categoryCard/categoryCard"

import "./pageStyles/categories.scss"

export default function Category({ data }) {
  return (
    <Layout>
      <SEO title="Areas we serve" />

      <BgImage
        image={data.file.childImageSharp.gatsbyImageData}
        className="banner-image"
      >
        <div className="overlay">
          <h1 className="text">Areas We Serve</h1>
        </div>
      </BgImage>

      <div className="sector-grid-wrapper">
        <ul className="sector-grid">
          {data.allContentfulCategory.edges.map(edge => {
            if (edge.node.name !== null) {
              return (
                <li key={edge.node.id} className="sector-card-wrapper">
                  <CategoryCard
                    imgData={edge.node.image.gatsbyImageData}
                    slug={edge.node.slug}
                    name={edge.node.name}
                  />
                </li>
              )
            } else {
              return console.log("list item is null")
            }
          })}
        </ul>
      </div>
    </Layout>
  )
}

export const data = graphql`
  {
    allContentfulCategory(sort: { order: ASC, fields: slug }) {
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
    file(name: { eq: "factory_light_LED" }, extension: { eq: "png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`
