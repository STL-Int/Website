import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroImage from "../components/heroImage/heroImage"
import NewsPostCard from "../components/newsPostCard/newsPostCard"
import CategoryCard from "../components/categoryCard/categoryCard"

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

        allContentfulCategory(
          limit: 9
        ) {
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

        allContentfulNewsPost(
          sort: { fields: publishedDate, order: DESC }
          limit: 6
        ) {
          edges {
            node {
              title
              id
              slug
              publishedDate(formatString: "Do MMMM, YYYY")
              featuredImage {
                gatsbyImageData(width: 750, quality: 80, layout: CONSTRAINED)

                file {
                  fileName
                }
              }
              excerpt {
                childMarkdownRemark {
                  excerpt(pruneLength: 200)
                }
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
        <h2 id="category-title" className="section-title">Categories</h2>
        <hr className="index-rule"/>

        <div id="sector-grid-wrapper-index" className="sector-grid-wrapper">
          <ul id="sector-grid-index"  className="sector-grid">
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
        <Link to="/categories/" id="see-more-categories" className="see-more-link">
          <button className="btn">
            <p>See All Categories</p>
          </button>
        </Link>
      </div>

      
      <div id="Categories" className="index-section">
        <h2 id="news-title" className="section-title">News</h2>
        <hr className="index-rule"/> 
        
        <div className="grid-super-wrapper">
          <div className="grid-boundary-box">
            <ul className="grid">
              {data.allContentfulNewsPost.edges.map(edge => {
                if (edge.node.featuredImage.file !== null) {
                  return (
                    <li key={edge.node.id}>
                      <NewsPostCard
                        imgSrc={edge.node.featuredImage.gatsbyImageData}
                        imgAlt={edge.node.featuredImage.file.fileName}
                        slug={edge.node.slug}
                        title={edge.node.title}
                        date={edge.node.publishedDate}
                        excerpt={edge.node.excerpt.childMarkdownRemark.excerpt}
                      />
                    </li>
                  )
                }
              })}
            </ul>

            <Link to="/blog/" className="see-more-link">
              <button className="btn">
                <p>See All News Posts</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
