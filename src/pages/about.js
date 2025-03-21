import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/elements/blog/layout"
import Seo from "../components/elements/blog/seo"
import About from "../components/About"

const AboutIndex = ({ data, location }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <About />
    </Layout>
  )
}

export default AboutIndex

export const Head = () => <Seo title="About" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
