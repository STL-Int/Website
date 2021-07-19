import React from "react"
import { Link } from "gatsby"

export function searchString(sentence, word) {
  var sentenceLen = sentence.length
  var sentenceLower = sentence.toLowerCase()
  var wordLen = word.length
  var res = false
  var i

  for (i = 0; i < sentenceLen; i++) {
    if (sentenceLower.substring(i, i + wordLen) === word) {
      res = true
    }
  }

  return res
}

export function getButtonText(fileName) {
  let buttonText = "false"

  searchString(fileName, "atex")
    ? (buttonText = "ATEX Certificate")
    : (buttonText = "false")
  searchString(fileName, "catalogue")
    ? (buttonText = "Catalogue Sheet")
    : (buttonText = "false")
  searchString(fileName, "conformity")
    ? (buttonText = "Declaration of Conformity")
    : (buttonText = "false")
  searchString(fileName, "curves")
    ? (buttonText = "Luminous Curves")
    : (buttonText = "false")
  searchString(fileName, "ukca")
    ? (buttonText = "UKCA Certificate")
    : (buttonText = "false")
  searchString(fileName, "mounting")
    ? (buttonText = "Mounting Instructions")
    : (buttonText = "false")
  searchString(fileName, "haccp")
    ? (buttonText = "HACCP")
    : (buttonText = "false")

  return buttonText
}

export default function GetButtonData(buttonData) {
  var buttonName = ""
  var text = ""
  var url = ""
  var btnID = ""
  var btnBaseID = "documents-button-"

  const numButtons = buttonData.length

  for (var i = 0; i < numButtons; i++) {
    buttonName = buttonData[i].title
    text = getButtonText(buttonName)
    url = buttonData[i].url
    btnID = btnBaseID.concat(i)

    return (
      <Link to={url} id={btnID} class="documents-button">
        {text}
      </Link>
    )
  }
}
