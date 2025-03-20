/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// Define the template for blog post
const blogPost = path.resolve(`./src/templates/blog-post.js`)
const portfolioItem = path.resolve(`./src/templates/portfolio-item.js`)
const tagTemplate = path.resolve(`./src/templates/tag.js`)
/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Get all markdown blog posts sorted by date
  const blogResult = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "^/content/blog/" } }
        sort: { frontmatter: { date: DESC } }
        limit: 1000
      ) {
        nodes {
          id
          frontmatter {
            title
            description
            date
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  `)

  const portfolioResult = await graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "^/content/portfolio/" } }
        sort: { frontmatter: { date: DESC } }
        limit: 1000
      ) {
        nodes {
          id
          frontmatter {
            title
            description
            date
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  `)

  if (blogResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      blogResult.errors
    )
    return
  }

  if (portfolioResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your portfolio posts`,
      portfolioResult.errors
    )
    return
  }

  const blogPosts = blogResult.data.allMarkdownRemark.nodes
  const portfolioPosts = portfolioResult.data.allMarkdownRemark.nodes
  const blogTags = new Set()
  const portfolioTags = new Set()

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (blogPosts.length > 0) {
    blogPosts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : blogPosts[index - 1].id
      const nextPostId =
        index === blogPosts.length - 1 ? null : blogPosts[index + 1].id

      post.frontmatter.tags?.forEach(tag => {
        blogTags.add(tag)
      })

      createPage({
        path: "blog" + post.fields.slug,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })

    Array.from(blogTags).forEach(tag => {
      createPage({
        path: `/blog/tags/${tag}/`,
        component: tagTemplate,
        context: {
          tag,
        },
      })
    })
  }

  if (portfolioPosts.length > 0) {
    portfolioPosts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : portfolioPosts[index - 1].id
      const nextPostId =
        index === portfolioPosts.length - 1
          ? null
          : portfolioPosts[index + 1].id

      post.frontmatter.tags?.forEach(tag => {
        portfolioTags.add(tag)
      })
      createPage({
        path: "portfolio" + post.fields.slug,
        component: portfolioItem,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })

    Array.from(portfolioTags).forEach(tag => {
      createPage({
        path: `/portfolio/tags/${tag}/`,
        component: tagTemplate,
        context: {
          tag,
        },
      })
    })
  }
}

/**
 * @type {import('gatsby').GatsbyNode['onCreateNode']}
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

/**
 * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
