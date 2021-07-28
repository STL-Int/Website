import React from "react"
import { graphql } from "gatsby"
import { BgImage } from 'gbimage-bridge';
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./pageStyles/downloads.scss"

export default function Category({ data }) {

  return (
    <Layout>
      <SEO title="Downloads" />

      <BgImage image={data.banner.childImageSharp.gatsbyImageData} className="banner-image" >
        <div className="overlay">
          <h1 className="text">Downloads</h1>
        </div>
      </BgImage>

      <div className="sector-grid-wrapper">
        
        <ul className="document-grid">
          {data.allContentfulDownload.edges.map(docType => {
            return (
              <li key={docType.node.id} className="sector-card-wrapper">
                <h1 className="download__heading">{docType.node.title}</h1>
                {docType.node.documents.map(docs => {
                  return (
                    <ul className="sector-grid">
                      <li key={docs.id}>
                        <a href={docs.file.url} className="download-card-wrapper" target="_blank" rel="noreferrer">
                            <GatsbyImage className="file-icon" image={data.downloadIcon.childImageSharp.gatsbyImageData} alt={"download" + docs.title}/>
                            <div className="download-name-wrapper">
                                <h3 className="download-name">{docs.title}</h3>
                            </div>
                        </a>
                      </li>
                    </ul>
                  )
                })}
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  );
}

export const data = graphql`{
  allContentfulDownload {
    edges {
      node {
        downloadCategory
        documents {
          file {
            url
          }
          title
          id
        }
        id
      }
    }
  }


  banner: file(name: {eq: "sunset-3138887_1920"}, extension: {eq: "jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }

  downloadIcon: file(name: {eq: "download"}, extension: {eq: "png"}) {
    childImageSharp {
      gatsbyImageData(layout: CONSTRAINED, width:150)
    }
  }
}
`
