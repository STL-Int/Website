import React from "react"
import { graphql } from "gatsby"
import { BgImage } from 'gbimage-bridge';
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./pageStyles/downloads.scss"

export default function Category({ data }) {
  var legalDocs = data.allContentfulLegal.edges

  return (
    <Layout>
      <SEO title="Downloads" />

      <BgImage image={data.file.childImageSharp.gatsbyImageData} className="banner-image" >
        <div className="overlay">
          <h1 className="text">Downloads</h1>
        </div>
      </BgImage>

      <div className="sector-grid-wrapper">
        
        <ul className="sector-grid">
          {legalDocs.map(docs => {
            return (
              <li key={docs.node.id} className="sector-card-wrapper">
                <a href={docs.node.document.file.url} className="download-card-wrapper">
                    <GatsbyImage className="file-icon" image={data.contentfulAsset.gatsbyImageData} alt={docs.node.document.title}/>
                    <div className="download-name-wrapper">
                        <h3 className="download-name">{docs.node.document.title}</h3>
                    </div>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  );
}

export const data = graphql`{
  allContentfulLegal {
    edges {
      node {
        id
        document {
          file {
            url
          }
          title
        }
      }
    }
  }

  contentfulAsset(title: {eq: "pdf icon"}) {
    gatsbyImageData(layout: CONSTRAINED, width:200)
  }

  file(name: {eq: "sunset-3138887_1920"}, extension: {eq: "jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}
`
