import React from "react"
import { Link } from "gatsby"

import { BgImage } from 'gbimage-bridge';

import "./categoryCard.scss"

const CategoryCard = ({ imgData, slug, name }) => {
  return (
    <Link
      to={`/categories/${slug}/`}
      className="sector-card"
    >
      <BgImage image={imgData} className="sector-image" >
        <div className="sector-name-overlay">
          <h2 className="sector-name">{name}</h2>
        </div>
      </BgImage>
    </Link>
  )
}

export default CategoryCard
