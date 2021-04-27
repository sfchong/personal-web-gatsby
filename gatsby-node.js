exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogListTemplate = require.resolve(
    `./src/templates/blogListTemplate.js`
  )

  const blogPostTemplate = require.resolve(
    `./src/templates/blogContentTemplate.js`
  )

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { slug: { ne: null } } }
      ) {
        nodes {
          id
          html
          timeToRead
          excerpt(pruneLength: 200)
          frontmatter {
            slug
            title
            date(formatString: "D MMM YYYY")
            fromNow: date(fromNow: true)
            tags
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create blog list page (/blog)
  if (result.data.allMarkdownRemark.nodes) {
    createPage({
      path: "blog",
      component: blogListTemplate,
      context: {
        // pass data to template via context
        nodes: result.data.allMarkdownRemark.nodes,
      },
    })
  }

  // Create blog content page (/blog/{slug})
  result.data.allMarkdownRemark.nodes.forEach(
    ({ html, timeToRead, frontmatter, excerpt }) => {
      createPage({
        path: "blog/" + frontmatter.slug,
        component: blogPostTemplate,
        context: {
          // pass data to template via context
          html: html,
          timeToRead: timeToRead,
          frontmatter: frontmatter,
          excerpt: excerpt,
        },
      })
    }
  )
}
