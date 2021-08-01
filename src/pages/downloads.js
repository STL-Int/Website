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
        {data.allContentfulDownloadType.edges.map(docType => {
          var download_category_name = docType.node.downloadCategory
          var category_id = download_category_name.toLowerCase()

          return (
            <li key={docType.node.id} className="doc-type-wrapper">
              <h1 id={category_id} className="download__heading">
                {download_category_name}
              </h1>

              <ul className="card-grid">
                {docType.node.documents.map(docs => {
                  const max_name_chars = 47
                  var name = docs.documentName
                  if (name.length > max_name_chars) {
                    name = name.substring(0, max_name_chars) + "..."
                  }

                  return (
                    <li key={docs.id}>
                      <a
                        href={docs.document.file.url}
                        className="download-card"
                        target="_blank"
                        rel="noreferrer"
                        aria-label={"download" + name}
                      >
                        <GatsbyImage
                          className="file-icon"
                          image={docs.coverImage.gatsbyImageData}
                        />
                        <div className="download-name-wrapper">
                          <h3 className="download-name">{name}</h3>
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
    allContentfulDownloadType {
      edges {
        node {
          downloadCategory
          documents {
            id
            documentName
            document {
              file {
                url
              }
            }
            coverImage {
              gatsbyImageData(layout: CONSTRAINED, width: 400)
            }
          }
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
