import React from "react"
import { Link } from "gatsby"

import BackgroundImage from "gatsby-background-image"

import "./categoryCard.scss"

const CategoryCard = ({ imgFluid, slug, name }) => {
  return (
    <Link to={`/categories/${slug}/`} className="category-card">
      <BackgroundImage
        Tag="section"
        className="sector-image"
        fluid={imgFluid}
        backgroundColor={`transparent`}
      >
        <div className="overlay">
          <h1 className="category-name">{name}</h1>
        </div>
      </BackgroundImage>
    </Link>
  )
}

export default CategoryCard
