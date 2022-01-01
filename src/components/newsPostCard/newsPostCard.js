import React from "react"
import { Link } from "gatsby"

import { GatsbyImage } from "gatsby-plugin-image"

import "./newsPostCardStyling.scss"

class NewsPostCard extends React.Component {

  constructor(){
    super()
    this.blogs = [];
  }

  componentDidMount(){
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://stl-int.medium.com')
    .then(resp => resp.json())
    .then(blogs => this.setState({blogs}))
  }

  renderBlogs = () => {
    if(this.state.blogs.items){
      return (
          <ul id="sector-grid-index" className="sector-grid">
            {this.state.blogs.items.map(post => {
              return (
                <li key={edge.node.id} className="sector-card-wrapper">
                  <div className="card">
                    <img src = {post.thumbnail} className = "Img"/>
                    <h1 className = "cardHeader">{post.title}</h1>
                    <p className = "cardText">Posted on: {post.pubDate}</p>
                    <a href = {post.link} className = "Link"> Read the Full Blog Here!</a>
                  </div> 
                </li>
              )
            })}
          </ul>
        )
      }
    }
  }

  render = () => {
    return(
      <div>
      {this.renderBlogs()}
      </div>
    )
  }
}

export default NewsPostCard
