import React from "react"
import { graphql } from "gatsby"
import { BgImage } from 'gbimage-bridge';

import Layout from "../components/layout"
import ProductCard from "../components/productCard/productCard"
import SEO from "../components/seo"

import "../components/bannerImage/banner.scss"
import "./templateStyles/category.scss"

export default function Category({ data }) {
  let currentCategory = data.contentfulCategory

  return (
    <Layout>
      <SEO title={currentCategory.name} />
      
      <BgImage image={data.file.childImageSharp.gatsbyImageData} className="banner-image" >
        <div className="overlay">
          <h1 className="text">{currentCategory.name}</h1>
        </div>
      </BgImage>

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
  );
}

export const data = graphql`query ($category: String!) {
  allContentfulProduct(filter: {categories: {elemMatch: {name: {eq: $category}}}}) {
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
  contentfulCategory(name: {eq: $category}) {
    name
    slug
  }
  file(name: {eq: "factory_light_LED_2"}, extension: {eq: "png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}
`
