import * as React from "react"
import Blobby from "../Blob"
import Navbar from "../../Navbar"
import { Footer } from "../../Footer"
import BackToTopButton from "../BackToTopButton"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <>
      <Blobby />
      <Navbar />
      <BackToTopButton />
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
