import React from "react"
import { Link } from "gatsby"

import { GatsbyImage } from "gatsby-plugin-image"

import "./productCard.scss"

const ProductCard = ({ imgSrc, imgAlt, slug, name }) => {
  const max_name_chars = 17
  if (name.length > max_name_chars) {
    name = name.substring(0, max_name_chars) + " ..."
  }
  return (
    <div className="product-wrapper">
      <Link to={`/products/${slug}/`} className="product">
        <GatsbyImage image={imgSrc} className="product-image" alt={imgAlt} />

        <p className="product-name">{name}</p>
      </Link>
    </div>
  )
}

export default ProductCard
