import React from "react"
import { Link } from "gatsby"

import { GatsbyImage } from "gatsby-plugin-image"

import "./newsPostCardStyling.scss"

const NewsPostCard = ({ imgSrc, imgAlt, slug, title, date, excerpt }) => {
  const max_title_chars = 36
  if (title.length > max_title_chars) {
    title = title.substring(0, max_title_chars) + " ..."
  }
  return (
    <div className="post-wrapper">
      <Link to={`/blog/${slug}/`} className="post">
        <GatsbyImage className="featured-image" image={imgSrc} alt={imgAlt} />

        <h2 className="title">{title}</h2>

        <div className="date small-print">
          <span>{date}</span>
        </div>

        <p className="excerpt">{excerpt}</p>
      </Link>
    </div>
  )
}

export default NewsPostCard
