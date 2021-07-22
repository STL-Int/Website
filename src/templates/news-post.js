import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NewsPostCard from "../components/newsPostCard/newsPostCard"

import "./templateStyles/newsPost.scss"

export const query = graphql`query ($slug: String!) {
  contentfulNewsPost(slug: {eq: $slug}) {
    title
    publishedDate(formatString: "Do MMMM, YYYY")
    thumbnail {
      file {
        fileName
        url
      }
      gatsbyImageData(width: 750, quality: 80, layout: CONSTRAINED)
    }
    postBody {
      childMarkdownRemark {
        html
        timeToRead
      }
    }
    category {
      id
      categoryName
    }
  }
  allContentfulNewsPost(sort: {fields: publishedDate, order: ASC}, limit: 3) {
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
  file(name: {eq: "tag"}, extension: {eq: "png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}
`

const NewsPost = props => {
  var image_name = props.data.contentfulNewsPost.thumbnail.file.fileName.split(
    "."
  )

  return (
    <Layout>
      <SEO title={props.data.contentfulNewsPost.title} />
      <div className="page-wrapper">
        <div className="post-content">
          <Link to="/blog/" className="all-posts">
            All Posts
          </Link>
          <div className="title-wrapper">
            <h1 className="post-title">
              {props.data.contentfulNewsPost.title}
            </h1>
          </div>

          <span className="meta">
            <span className="posted-date">
              <span role="img" aria-label="Calendar icon">
                &#128197;
              </span>{" "}
              {props.data.contentfulNewsPost.publishedDate}
            </span>
            <span className="tag-wrapper">
              <GatsbyImage
                image={props.data.file.childImageSharp.gatsbyImageData}
                className="tag-icon"
                alt="post tags" />

              <ul className="tag-list">
                {props.data.contentfulNewsPost.category.map(category => {
                  return (
                    <li className="tag-item" key={category.id}>
                      <p className="tag">{category.categoryName}</p>
                    </li>
                  )
                })}
              </ul>
            </span>
          </span>

          <GatsbyImage
            image={props.data.contentfulNewsPost.thumbnail.gatsbyImageData}
            className="hero-image"
            alt={props.data.contentfulNewsPost.thumbnail.file.fileName} />

          <div className="image-description">
            <p className="image-name">{image_name[0]}</p>
          </div>

          <div className="body-wrapper">
            <div
              className="post-body"
              dangerouslySetInnerHTML={{
                __html: props.data.contentfulNewsPost.postBody.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </div>

      <hr />

      <div className="more-posts-wrapper">
        <h1 className="more-posts-title">More Posts</h1>
        <ul className="grid more-posts">
          {props.data.allContentfulNewsPost.edges.map(edge => {
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
    </Layout>
  );
}

export default NewsPost
