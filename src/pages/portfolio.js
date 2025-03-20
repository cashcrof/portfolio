import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/elements/blog/layout"
import Seo from "../components/elements/blog/seo"

const PortfolioIndex = ({ data, location }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <main className="max-w-screen min-h-full flex flex-col mx-auto place-items-center">
          <p>No items found.</p>
        </main>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          let featuredImg = getImage(
            post.frontmatter.featuredImage?.childImageSharp?.gatsbyImageData
          )
          const tags = post.frontmatter?.tags || []

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <GatsbyImage
                  image={featuredImg}
                  imgStyle={{ borderRadius: 50 }}
                  style={{ padding: 10, marginBottom: 20, aspectRatio: "16/9" }}
                />
                <header>
                  <h2>
                    <Link
                      className="pulse"
                      to={"/portfolio" + post.fields.slug}
                      itemProp="url"
                    >
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                  <div className="post-tag-list">
                    {tags.map(tag => (
                      <Link className="post-tag" to={`/portfolio/tags/${tag}/`}>
                        {tag}
                      </Link>
                    ))}
                  </div>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default PortfolioIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Portfolio" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "^/content/portfolio/" } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM YYYY")
          title
          description
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 800)
            }
          }
          tags
        }
      }
    }
  }
`
