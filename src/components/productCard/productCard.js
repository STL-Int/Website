import React from "react"
import { Link } from "gatsby"

import { GatsbyImage } from "gatsby-plugin-image";

import "./productCard.scss"

const ProductCard = ({ imgSrc, imgAlt, slug, name }) => {
  return (
    <div className="product-wrapper">
      <Link to={`/products/${slug}/`} className="product">
        <GatsbyImage
          image={imgSrc}
          className="product-image"
          alt={imgAlt} 
        />

        <h2 className="product-name">{name}</h2>
      </Link>
    </div>
  );
}

export default ProductCard
