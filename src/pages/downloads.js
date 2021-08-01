import React from "react"
import { graphql } from "gatsby"
import { BgImage } from "gbimage-bridge"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./pageStyles/downloads.scss"

export default function Category({ data }) {
  return (
    <Layout>
      <SEO title="Downloads" />

      <BgImage
        image={data.banner.childImageSharp.gatsbyImageData}
        className="banner-image"
      >
        <div className="overlay">
          <h1 className="text">Downloads</h1>
        </div>
      </BgImage>

      <ul className="document-grid">
        {data.allContentfulDownload.edges.map(docType => {
          var docType_name = docType.node.downloadCategory
          var type_id = docType_name.toLowerCase()
          return (
            <li key={docType.node.id} className="doc-type-wrapper">
              <h1 id={type_id} className="download__heading">
                {docType_name}
              </h1>

              <ul className="card-grid">
                {docType.node.documents.map(docs => {
                  return (
                    <li key={docs.id}>
                      <a
                        href={docs.file.url}
                        className="download-card"
                        target="_blank"
                        rel="noreferrer"
                        aria-label={"download" + docs.title}
                      >
                        <GatsbyImage
                          className="file-icon"
                          image={
                            data.downloadIcon.childImageSharp.gatsbyImageData
                          }
                        />
                        <div className="download-name-wrapper">
                          <p className="download-name">{docs.title}</p>
                        </div>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export const data = graphql`
  {
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

    banner: file(
      name: { eq: "sunset-3138887_1920" }
      extension: { eq: "jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }

    downloadIcon: file(name: { eq: "download" }, extension: { eq: "png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 150)
      }
    }
  }
`
