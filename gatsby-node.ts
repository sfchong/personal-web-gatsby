import { GatsbyNode } from 'gatsby';
import { resolve } from 'path';
import { MarkdownRemark } from 'types/markdown';

export const createPages: GatsbyNode['createPages'] = async ({
  actions,
  graphql,
  reporter,
}) => {
  const { createPage } = actions;

  const blogListTemplate = resolve(`./src/templates/blogListTemplate.tsx`);

  const blogPostTemplate = resolve(`./src/templates/blogContentTemplate.tsx`);

  const result = await graphql<MarkdownRemark>(`
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
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const { nodes } = result.data.allMarkdownRemark;

  // Create blog list page (/blog)
  if (nodes) {
    createPage({
      path: 'blog',
      component: blogListTemplate,
      context: {
        // pass data to template via context
        nodes,
      },
    });
  }

  // Create blog content page (/blog/{slug})
  nodes.forEach((node, index) => {
    createPage({
      path: `blog/${node.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        // pass data to template via context
        node,
        prev: index === 0 ? null : nodes[index - 1],
        next: index === nodes.length - 1 ? null : nodes[index + 1],
      },
    });
  });
};
