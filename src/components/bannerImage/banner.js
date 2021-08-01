import React from "react"
import { BgImage } from "gbimage-bridge"

import "./banner.scss"

export default function BannerImage(gatsbyImageData, title, subText) {
  return (
    <BgImage image={gatsbyImageData} className="banner-image">
      <div className="overlay">
        <h1 className="text title">{title}</h1>
        <h3 className="text subtitle">{subText}</h3>
      </div>
    </BgImage>
  )
}
