import React from "react"
import { graphql } from "gatsby"

import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import styled from "styled-components"
import { BgImage } from "gbimage-bridge"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./pageStyles/about.scss"

export const query = graphql`query{
  contentfulAboutPage{
    pageBody{
      raw
    }
  }
  file(name: {eq: "sunset-3138887_1920"}, extension: {eq: "jpg"}) {
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



const AboutPage = props => {

  return (
    <Layout>
      <SEO title="About Us" />

      <BgImage image={props.data.file.childImageSharp.gatsbyImageData} className="banner-image" >
        <div className="overlay">
          <h1 className="text">Get To Know Us</h1>
        </div>
      </BgImage>

      <div className="page-wrapper">
        <div className="about-body">
          {renderRichText(props.data.contentfulAboutPage.pageBody, options)}
        </div>
      </div>


      
    </Layout>
  );
}

export default AboutPage