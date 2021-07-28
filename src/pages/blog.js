import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { BgImage } from 'gbimage-bridge';

import Layout from "../components/layout"
import SEO from "../components/seo"
import NewsPostCard from "../components/newsPostCard/newsPostCard"

import "./pageStyles/news.module.scss"
import "../components/bannerImage/banner.scss"

const News = () => {
  const data = useStaticQuery(
    graphql`{
      allContentfulNewsPost(sort: {fields: publishedDate, order: DESC}, limit: 18) {
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
      file(name: {eq: "warehouse_LED"}, extension: {eq: "png"}) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            formats: AUTO
            placeholder: BLURRED
          )
        }
      }
    }
    `
  )


  return (
    <Layout>
      <SEO title="All News Stories" />

        <BgImage image={data.file.childImageSharp.gatsbyImageData} className="banner-image" >
          <div className="overlay">
            <h1 className="text">What's New</h1>
          </div>
        </BgImage>

      <div className="grid-super-wrapper">
        <div className="grid-boundary-box">
          <ul className="grid">
            {data.allContentfulNewsPost.edges.map(edge => {
              return (
                <li key={edge.node.id}>
                  <NewsPostCard
                    imgSrc={edge.node.thumbnail.gatsbyImageData}
                    imgAlt={edge.node.thumbnail.file.fileName}
                    slug={edge.node.slug}
                    title={edge.node.title}
                    date={edge.node.publishedDate}
                    excerpt={edge.node.description.childMarkdownRemark.excerpt}
                  />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default News
