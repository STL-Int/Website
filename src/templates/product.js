import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./templateStyles/productPage.scss"

//########################//
//
// Button text parsing
//
//########################//

function searchString(sentence, word) {
  let sentenceLen = sentence.length
  let sentenceLower = sentence.toLowerCase()
  let wordLen = word.length
  let res = false

  for (var i = 0; i < sentenceLen; i++) {
    if (sentenceLower.substring(i, i + wordLen) === word.toLowerCase()) {
      res = true
    }
  }

  return res
}

function getButtonText(fileName, searchData) {
  let buttonText = "false"
  let indexFound = 0

  for (let n = 0; n < searchData.length; n++) {
    let textToSearchFor = searchData[n].searchString

    let res = searchString(fileName, textToSearchFor)

    if (res === true) {
      indexFound = n
    }
  }

  buttonText = searchData[indexFound].displayText

  return buttonText
}

function GetButtonData(buttonData, searchData) {
  let buttonName = ""
  let text = ""
  let url = ""
  let btnID = ""
  let btnBaseID = "documents-button-"
  let btnMetaData = {}
  let btnMetaArray = []

  const numButtons = buttonData.length

  for (let i = 0; i < numButtons; i++) {
    buttonName = buttonData[i].title
    text = getButtonText(buttonName, searchData)

    if (text !== false) {
      url = buttonData[i].file.url
      btnID = btnBaseID.concat(i)

      btnMetaData = {
        fileLink: url,
        buttonID: btnID,
        text: text,
      }

      btnMetaArray.push(btnMetaData)
    }
  }

  return (
    <ul className="button-list-wrapper">
      {btnMetaArray.map((btn, index) => (
        <li key={index} className="btn documents-button">
          <a
            href={btn.fileLink}
            id={btn.buttonID}
            className="documents-button-link"
            target="_blank"
            rel="noreferrer"
          >
            {btn.text}
          </a>
        </li>
      ))}
    </ul>
  )
}

//########################//
//
// Main Body
//
//########################//

export default function Product({ data }) {
  const product = data.contentfulProduct
  const fileParent = product.files

  return (
    <Layout>
      <SEO title={product.productName} />

      <div className="page-content">

        <div className="back-link-super-wrapper">
          <div className="back-link-wrapper">
            <button id="back-to-category" className="back-link" onClick={() => `${typeof window !== "undefined"?window.history.go(-1):null}`}><h3>&lt; Go Back</h3></button>
          </div>
        </div>

        <hr id="line" />

        <div className="header-wrapper">
          <div className="product-title">
            <h1>{product.productName}</h1>
          </div>
        </div>

        <div className="product-info-wrapper">
          <div className="image-wrapper">
            <GatsbyImage
              image={product.productImage.gatsbyImageData}
              className="image"
              alt={product.productName}
            />
          </div>

          {GetButtonData(fileParent, product.buttonsUsed)}

          <div
            className="product-body"
            dangerouslySetInnerHTML={{
              __html: product.bodyText.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    </Layout>
  )
}

//
//
//
//
//
//

export const data = graphql`
  query ($slug: String) {
    contentfulProduct(slug: { eq: $slug }) {
      productImage {
        gatsbyImageData(layout: FULL_WIDTH)
      }

      productName
      slug

      files {
        file {
          url
        }
        id
        title
      }

      bodyText {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }

      buttonsUsed {
        displayText
        searchString
      }
    }
  }
`
