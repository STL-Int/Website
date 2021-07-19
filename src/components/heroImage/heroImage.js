import React from "react"

import "./heroImageStyles.scss"

const HeroImage = data => {
  return (
    <>
      <div className="hero-image-wrapper">
        <ul className="textBlock">
          <li className="listItem heroTitleWrapper">
            <h1 className="heroTitle">
              <span className="tagline-bold">SAFE</span> answers
              <br />
              to <span className="tagline-bold">HAZARDOUS</span> questions
            </h1>
          </li>
          <li className="listItem button-wrapper">
            <a href={data.link} target="_blank" rel="noreferrer">
              <button className="button">
                <h2>See our product shortform</h2>
              </button>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default HeroImage
