import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

import "./shareButtons.scss"

export default function ShareButtons(
  pageLink,
  pageName,
  facebookImageData,
  twitterImageData,
  mailImageData
) {
  var pageURI = encodeURI(pageName)

  var facebookShareString =
    "https://www.facebook.com/sharer/sharer.php?u=" +
    pageLink +
    "&amp;title=" +
    pageURI
  var twitterShareString =
    "https://www.twitter.com/intent/tweet?text=" +
    pageURI +
    "%0ALearn%20More:%20" +
    pageLink
  var emailShareString =
    "mailto:?subject=STL%20News:%20" +
    pageURI +
    "&body=" +
    pageURI +
    ":%20" +
    pageLink

  return (
    <div className="social-share-buttons-wrapper">
      <a
        className="social-share-buttons"
        href={facebookShareString}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
      >
        <GatsbyImage
          className="share-icon"
          src={facebookImageData}
          alt="Facebook Logo"
        />
      </a>
      <a
        className="social-share-buttons"
        href={twitterShareString}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Twitter"
      >
        <GatsbyImage
          className="share-icon"
          src={twitterImageData}
          alt="Twitter Logo"
        />
      </a>
      <a
        className="social-share-buttons"
        href={emailShareString}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share via email"
      >
        <GatsbyImage
          className="share-icon"
          src={mailImageData}
          alt="email icon"
        />
      </a>
    </div>
  )
}
