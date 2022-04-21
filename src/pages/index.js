import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroImage from "../components/heroImage/heroImage"
import CategoryCard from "../components/categoryCard/categoryCard"


import "./pageStyles/index.scss"


// const axios = require('axios').default;
// import NewsCard from "../components/NewsCard/NewsCard"

// function allPostData () {
  
//   if (typeof document !== undefined){
//     console.log(document)
//     const ul = document.getElementById('news');
//     const list = document.createDocumentFragment();
//     const url = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@stl-int';

//     fetch(url)
//     .then(response => {
//       return response.json
//     })
//     .then(data => {
//       let posts = data.items

//       posts.map(function(post) {
//         let li = document.createElement('li');
//         let name = document.createElement('h3');
//         // let subtitle = document.createElement('p');

//         name.innerHTML = `${post.title}`;
//         // email.innerHTML = `${author.email}`;

//         li.appendChild(name);
//         // li.appendChild(email);
//         list.appendChild(li);
//       });
//     })
//     .catch(function(error) {
//       console.log(error);
//     });


//     ul.appendChild(list)


//   }

  

//   // return fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@stl-int')
//   // .then((res) => res.json())
//   // .then((data) => {
//   //   const res = data.items 
//   //   const posts = res.filter(item => item.categories.length > 0)
//   //   // console.log(posts)
//   //   posts.map((p,i) => {
//   //     return(
//   //       <div key={i}>
//   //         <p>{p.title}</p>
//   //       </div>
//   //     )
//   //   })
//   // })
  
// }





const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        contentfulAsset(title: { eq: "Product Shortform" }) {
          file {
            url
          }
        }

        allContentfulCategory(limit: 9, sort: { order: ASC, fields: slug }) {
          edges {
            node {
              name
              id
              slug
              image {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }

        # allMediumPost(sort: { fields: [createdAt], order: DESC }) {
        #   edges {
        #     node {
        #       id
        #       title
        #       virtuals {
        #         subtitle
        #         previewImage {
        #           imageId
        #         }
        #       }
        #     }
        #   }
        # }
      }
    `
  )

  
  // console.log(allPostData())

  
  return (
    <Layout>
      <SEO title="Home" />
      <HeroImage link={data.contentfulAsset.file.url} />

      <div id="News" className="index-section">
        <div className="medium-blog-card">
          <h2>
            Check Out Our New Blog!
          </h2>
          <h3>
            Keep Up To Date With The Latest Industry News
          </h3>
          <a 
            id="medium-link"
            className="see-more-link btn" 
            href="https://stl-int.medium.com"
            target="_blank"
            rel="noreferrer"
          >
            Explore
          </a>
        </div>
      </div>

      <hr className="index-rule" />
        {/* ################ */}

      <div id="Categories" className="index-section">
        <h2 id="category-title" className="section-title">
          Categories
        </h2>

        <div id="sector-grid-wrapper-index" className="sector-grid-wrapper">
          <ul id="sector-grid-index" className="sector-grid">
            {data.allContentfulCategory.edges.map(edge => {
              return (
                <li key={edge.node.id} className="sector-card-wrapper">
                  <CategoryCard
                    imgData={edge.node.image.gatsbyImageData}
                    slug={edge.node.slug}
                    name={edge.node.name}
                  />
                </li>
              )
            })}
          </ul>
        </div>
        <Link
          to="/categories/"
          id="see-more-categories"
          className="see-more-link"
        >
          <button className="btn">
            <p>See All Categories</p>
          </button>
        </Link>

      </div>
        
      
        
      

      
    </Layout>
  )
}

export default IndexPage
