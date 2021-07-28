import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NewsPostCard from "../components/newsPostCard/newsPostCard"

import "./templateStyles/newsPost.scss"

export const query = graphql`query ($slug: String!) {
  contentfulNewsPost(slug: {eq: $slug}) {
    title
    publishedDate(formatString: "Do MMMM, YYYY")
    featuredImage {
      file {
        fileName
        url
      }
      gatsbyImageData(width: 750, quality: 80, layout: CONSTRAINED)
    }
    postBody {
      raw
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

  tag: file(name: {eq: "tag"}, extension: {eq: "png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  clock: file(name: {eq: "clock"}, extension: {eq: "png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}
`

//
// ---------------Marks-----------------
//
const Bold = ({ children }) => <span style={{fontWeight: 300}}>{children}</span>
const Italic = ({ children }) => <span style={{fontStyle: "italic"}}>{children}</span>
const Underline = ({ children }) => <span style={{textDecoration: "underline"}}>{children}</span>
const Code = ({ children }) => <span 
  style={{
    fontFamily: "Lucida Console, Courier New, monospace", 
    padding: "1em",
  }}>
    {children}
  </span>

//
// ---------------Blocks-----------------
//
const Text = ({ children }) => <p 
    style={{
      width: "100%"
    }}
  >{children}</p>
const Paragraph = ({ children }) => <p 
    style={{
      padding: "5px 0",
      width: "100%"
    }}
  >{children}</p>
const Heading = ({ children }) => <p 
    style={{
      paddingBottom: "5px",
      fontFamily: "Nunito Sans, sans-serif",    
      fontWeight: "500",
      fontSize: "25px",
    }}
  >{children}</p>
const Hr = ({ children }) => <span 
    style={{
      width: "100%",
      borderBottom: "1px solid #8599b8",
      padding: "1em 0"
    }}
  >{children}</span>
const Quote = ({ children }) => <p 
    style={{
      borderLeft: "3px solid #6dc7fc",
      paddingLeft: ".5em",
      margin: "5px 1em",
      fontWeight: "300",
      fontStyle: "italic",
      fontSize: "20px",
    }}
  >{children}</p>

//
// ---------------Inline-----------------
//
const IframeContainer = styled.span`
  padding-bottom: 56.25%; 
  position: relative; 
  display: block; 
  width: 100%;
  margin: 2rem 0;

  > iframe {
    height: 100%;
    width: 100%;
    position: absolute; 
    top: 0; 
    left: 0;
  }`

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    [MARKS.ITALIC]: text => <Italic>{text}</Italic>,
    [MARKS.UNDERLINE]: text => <Underline>{text}</Underline>,
    [MARKS.CODE]: text => <Code>{text}</Code>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
    [BLOCKS.HEADING_1]: (node, children) => <Heading>{children}</Heading>,
    [BLOCKS.HR]: (node, children) => <Hr>{children}</Hr>,
    [BLOCKS.QUOTE]: (node, children) => <Quote>{children}</Quote>,
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return (
        <>
          <h2>Embedded Asset</h2>
          <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
        </>
      )
    },
    [INLINES.HYPERLINK]: (node) => {
      if((node.data.uri).includes("player.vimeo.com/video")){
        return <IframeContainer><iframe title="Unique Title 001" src={node.data.uri} frameBorder="0" allowFullScreen/></IframeContainer>
      } else if((node.data.uri).includes("youtube.com/embed")) {
        return <IframeContainer><iframe title="Unique Title 002" src={node.data.uri} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" frameBorder="0" allowFullScreen></iframe></IframeContainer>
      }
    },
  },
}



const NewsPost = props => {
  var image_name = props.data.contentfulNewsPost.featuredImage.file.fileName.split(
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
              {/* <GatsbyImage
                image={props.data.clock.childImageSharp.gatsbyImageData}
                className="tag-icon"
                alt="mail tags" 
              />

              <p id="read-time">{props.data.contentfulNewsPost.postBody.childMarkdownRemark.timeToRead} min read</p> */}

              <GatsbyImage
                image={props.data.tag.childImageSharp.gatsbyImageData}
                className="tag-icon"
                alt="post tags" 
              />
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
            image={props.data.contentfulNewsPost.featuredImage.gatsbyImageData}
            className="hero-image"
            alt={props.data.contentfulNewsPost.featuredImage.file.fileName}
            />

          <div className="image-description">
            <p className="image-name">{image_name[0]}</p>
          </div>

          <div className="body-wrapper">
            <div className="post-body">
              {renderRichText(props.data.contentfulNewsPost.postBody, options)}
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="more-posts-wrapper">
        <h1 className="more-posts-title">More Posts</h1>
        <ul className="grid more-posts">
          {props.data.allContentfulNewsPost.edges.map(edge => {
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
      </div>
    </Layout>
  );
}

export default NewsPost