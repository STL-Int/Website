import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import "./downloadCard.scss"

export default function DownloadCard(imageData, fileName, fileURL) {
  var imageAlt = "Download" + fileName
  return (
    <a href={fileURL} className="download-card-wrapper">
      <GatsbyImage className="file-icon" image={imageData} alt={imageAlt} />
      <div className="download-name-wrapper">
        <h3 className="download-name">{fileName}</h3>
      </div>
    </a>
  )
}
