import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import {
  faBars,
  faTimeline,
  faTimes,
  faTimesCircle,
  faTimesRectangle,
  faWindowClose,
  faX,
} from "@fortawesome/free-solid-svg-icons"
import { NavLink } from "react-router"
import { Link } from "gatsby"

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false)

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    )
  }, [])

  const navLinks = (
    <>
      <a
        className="text-neutral-400 hover:text-white transition-colors"
        href="https://github.com/cashcrof"
        target="_blank"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        className="text-neutral-400 hover:text-white transition-colors"
        href="https://www.linkedin.com/in/ceilidh-ashcroft"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        className="text-neutral-400 hover:text-white transition-colors"
        href="/ceilidh-ashcroft-resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        resume
      </a>
      <Link
        className="text-neutral-400 hover:text-white transition-colors"
        to="/about"
      >
        about
      </Link>
      <Link
        className="text-neutral-400 hover:text-white transition-colors"
        to="/portfolio"
      >
        portfolio
      </Link>
      <Link
        className="text-neutral-400 hover:text-white transition-colors"
        to="/blog"
      >
        blog
      </Link>
    </>
  )

  return (
    <nav className="top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-row flex-wrap justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            ceilidh ashcroft
          </a>
          {!openNav ? (
            <>
              <div
                id="nav-links"
                className="hidden sm:flex sm:flex-row justify-around grow mx-0"
              >
                {navLinks}
              </div>
              <button
                className="text-neutral-400 font-bold hover:text-white transition-colors sm:hidden"
                onClick={() => setOpenNav(!openNav)}
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
            </>
          ) : (
            <div className="block min-w-full sm:hidden">
              <div
                id="nav-links"
                className="flex flex-col place-items-center gap-y-1"
              >
                {navLinks}
                <button
                  className="text-neutral-400 font-bold hover:text-white transition-colors"
                  onClick={() => setOpenNav(!openNav)}
                >
                  <FontAwesomeIcon icon={faTimesRectangle} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
