import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroImage from "../components/heroImage/heroImage"
import CategoryCard from "../components/categoryCard/categoryCard"
import NewsPostCard from "../components/newsPostCard/newsPostCard"

import "./pageStyles/index.scss"

const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        contentfulAsset(title: { eq: "Product Shortform" }) {
          file {
            url
          }
        }

        allContentfulCategory(limit: 9, sort: { order: ASC, fields: slug }) {
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
      }
    `
  )

  return (
    <Layout>
      <SEO title="Home" />
      <HeroImage link={data.contentfulAsset.file.url} />

      <div id="Categories" className="index-section">
        <h2 id="category-title" className="section-title">
          Categories
        </h2>
        <hr className="index-rule" />

        <div id="sector-grid-wrapper-index" className="sector-grid-wrapper">
          <ul id="sector-grid-index" className="sector-grid">
            {data.allContentfulCategory.edges.map(edge => {
              return (
                <li key={edge.node.id} className="sector-card-wrapper">
                  <CategoryCard
                    imgData={edge.node.image.gatsbyImageData}
                    slug={edge.node.slug}
                    name={edge.node.name}
                  />
                </li>
              )
            })}
          </ul>
        </div>
        <Link
          to="/categories/"
          id="see-more-categories"
          className="see-more-link"
        >
          <button className="btn">
            <p>See All Categories</p>
          </button>
        </Link>
      </div>

      
    </Layout>
  )
}

export default IndexPage
