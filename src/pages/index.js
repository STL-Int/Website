import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroImage from "../components/heroImage/heroImage"
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
              thumbnail {
                gatsbyImageData(width: 750, quality: 80, layout: CONSTRAINED)

                file {
                  fileName
                }
              }
              description {
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

          <Link to="/blog/" className="see-news-link">
            <button className="btn">
              <p>See All News Posts</p>
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
