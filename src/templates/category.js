import React from "react"
import { graphql, Link } from "gatsby"
import { BgImage } from "gbimage-bridge"

import Layout from "../components/layout"
import ProductCard from "../components/productCard/productCard"
import SEO from "../components/seo"

import "../components/bannerImage/banner.scss"
import "./templateStyles/category.scss"

export default function Category({ data }) {
  return (
    <Layout>
      <SEO title={data.contentfulCategory.name} />
      <BgImage
        image={data.file.childImageSharp.gatsbyImageData}
        className="banner-image"
      >
        <div className="overlay">
          <h1 className="text">{data.contentfulCategory.name}</h1>
        </div>
      </BgImage>

      <div className="back-link-super-wrapper">
        <div className="back-link-wrapper">
          <Link to="/categories/" className="all-categories">
            <h3>&lt; Back to all categories</h3>
          </Link>
        </div>
      </div>

      <hr id="line" />

      <div className="content-wrapper">
        <div className="grid-super-wrapper">
          <div className="grid-boundary-box">
            <ul className="grid">
              {data.allContentfulProduct.edges.map(edge => {
                return (
                  <li key={edge.node.id} className="product">
                    <ProductCard
                      imgSrc={edge.node.productImage.gatsbyImageData}
                      imgAlt={edge.node.productName}
                      slug={edge.node.slug}
                      name={edge.node.productName}
                    />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($category: String!) {
    allContentfulProduct(
      filter: { categories: { elemMatch: { name: { eq: $category } } } }
      sort: { fields: productName, order: ASC }
    ) {
      edges {
        node {
          id
          productImage {
            gatsbyImageData(layout: FULL_WIDTH)
          }
          productName
          slug
        }
      }
    }
    contentfulCategory(name: { eq: $category }) {
      name
      slug
    }
    file(name: { eq: "factory_light_LED_2" }, extension: { eq: "png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`
