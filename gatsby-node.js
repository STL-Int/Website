const path = require("path")

async function turnNewsIntoPage({ graphql, actions }) {
  const { createPage } = actions
  const response = await graphql(`
    query {
      allContentfulNewsPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  response.data.allContentfulNewsPost.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: path.resolve("./src/templates/news-post.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })
}

async function turnCategoryIntoPage({ graphql, actions }) {
  const { createPage } = actions
  const response = await graphql(`
  query {
    allContentfulCategory {
      edges {
        node {
          slug
          name
        }
      }
    }
  }
  `)
  
  let pageArray = []
  response.data.allContentfulCategory.edges.map(edge => {
    if (edge.node.name !== null) {
      pageArray.push(edge.node)
    }
  })

  console.log(pageArray)

  pageArray.forEach(page => {
    createPage({
      path: `/categories/${page.node.slug}`,
      component: path.resolve("./src/templates/category.js"),
      context: {
        category: page.node.name,
      },
    })
  })
}

async function turnProductIntoPage({ graphql, actions }) {
  const { createPage } = actions
  const response = await graphql(`
    query {
      allContentfulProduct {
        edges {
          node {
            slug
            categories {
              slug
            }
          }
        }
      }
    }
  `)

  response.data.allContentfulProduct.edges.forEach(edge => {
    createPage({
      path: `/products/${edge.node.slug}`,
      component: path.resolve("./src/templates/product.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })
}

async function createPages(params) {
  await Promise.all([
    turnNewsIntoPage(params),
    turnCategoryIntoPage(params),
    turnProductIntoPage(params),
  ])
}

module.exports = { createPages }
