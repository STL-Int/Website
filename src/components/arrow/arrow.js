import React from "react"
import { Link } from "gatsby"

import "./arrow.module.scss"

export default function Arrow(slug, name, direction) {
  if (slug !== "empty") {
    const delimiter = "/"
    const url = delimiter.concat(slug)

    switch (direction) {
      case "right":
        return (
          <Link to={url}>
            {name}: <i class="arrow right"></i>
          </Link>
        )
      case "left":
        return (
          <Link to={url}>
            {name}: <i class="arrow left"></i>
          </Link>
        )
      case "up":
        return (
          <Link to={url}>
            {name}: <i class="arrow up"></i>
          </Link>
        )
      case "down":
        return (
          <Link to={url}>
            {name}: <i class="arrow down"></i>
          </Link>
        )
      default:
        break
    }
  } else {
    switch (direction) {
      case "right":
        return (
          <p className="inactive">
            <i class="arrow right"></i>
          </p>
        )
      case "left":
        return (
          <p className="inactive">
            <i class="arrow left"></i>
          </p>
        )
      case "up":
        return (
          <p className="inactive">
            <i class="arrow up"></i>
          </p>
        )
      case "down":
        return (
          <p className="inactive">
            <i class="arrow down"></i>
          </p>
        )
      default:
        break
    }
  }
}
