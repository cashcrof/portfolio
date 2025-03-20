import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/elements/blog/layout"
import Seo from "../components/elements/blog/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const TagTemplate = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const { tag } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <header>
        <p>
          {posts.length} post{posts.length !== 1 ? "s" : ""} for&nbsp;
          <span className="post-tag">{tag}</span>
        </p>
      </header>
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          let featuredImg = getImage(
            post.frontmatter.featuredImage?.childImageSharp?.gatsbyImageData
          )
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <GatsbyImage
                    image={featuredImg}
                    imgStyle={{ borderRadius: 50 }}
                    style={{
                      padding: 10,
                      marginBottom: 20,
                      aspectRatio: "16/9",
                    }}
                  />
                  <h2>
                    <Link
                      className="pulse"
                      to={"../.." + post.fields.slug}
                      itemProp="url"
                    >
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
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

export const Head = ({ pageContext }) => {
  const { tag } = pageContext

  return <Seo title={`${tag} posts`} />
}

export default TagTemplate

export const pageQuery = graphql`
  query BlogPostsByTag($tag: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
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
