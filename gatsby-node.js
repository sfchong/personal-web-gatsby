exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

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

  result.data.allMarkdownRemark.nodes.forEach(
    ({ html, timeToRead, frontmatter }) => {
      createPage({
        path: "blog/" + frontmatter.slug,
        component: blogPostTemplate,
        context: {
          // pass data to template via context
          html: html,
          timeToRead: timeToRead,
          frontmatter: frontmatter,
        },
      })
    }
  )
}
