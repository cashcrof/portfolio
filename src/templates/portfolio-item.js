import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/elements/blog/layout"
import Seo from "../components/elements/blog/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"

const PortfolioItemTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const siteTitle = site.siteMetadata?.title || `Title`
  let featuredImg = getImage(
    post.frontmatter.featuredImage?.childImageSharp?.gatsbyImageData
  )
  const tags = post.frontmatter?.tags || []

  return (
    <Layout location={location} title={siteTitle}>
      <article
        className="portfolio-item"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <GatsbyImage
            image={featuredImg}
            imgStyle={{ borderRadius: 50 }}
            style={{ padding: 10 }}
          />
          <div className="flex place-content-between align-bottom w-full mt-20 mb-5">
            <h2 className="m-0 w-1/2 font-bold text-3xl" itemProp="headline">
              {post.frontmatter.title}
            </h2>
            {post.frontmatter.url && (
              <a className="place-self-center" href={post.frontmatter.url}>
                <FontAwesomeIcon icon={faLink} />
              </a>
            )}
          </div>
          <p>{post.frontmatter.date}</p>
          <div className="post-tag-list">
            {tags.map(tag => (
              <Link className="post-tag" to={`/portfolio/tags/${tag}/`}>
                {tag}
              </Link>
            ))}
          </div>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={"/portfolio" + previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={"/portfolio" + next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default PortfolioItemTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM YYYY")
        description
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 800)
          }
        }
        tags
        url
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
