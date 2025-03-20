import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faItchIo,
  faMastodon,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { ContactForm } from "./Contact"

type Props = {}
export const Footer = ({}: Props) => {
  return (
    <footer className="relative w-100 bottom-0 mt-3">
      <ContactForm />
      <div className="links">
        <h2>Links</h2>
        <a
          className="text-neutral-400 font-thin text-xl hover:text-white hover:font-semibold transition-colors"
          href="https://itch.io/profile/ha1fie"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faItchIo} /> Play my stuff on <b>itch.io</b>
        </a>
        <a
          className="text-neutral-400 font-thin text-xl hover:text-white hover:font-semibold transition-colors"
          href="https://mastodon.social/@ceilidh_ashcroft"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faMastodon} /> Follow me on <b>Mastodon</b>
        </a>
        <a
          className="text-neutral-400 font-thin text-xl hover:text-white hover:font-semibold transition-colors"
          href="https://github.com/cashcrof"
        >
          <FontAwesomeIcon icon={faGithub} /> Check out my <b>GitHub</b>
        </a>
        <a
          className="text-neutral-400 font-thin text-xl hover:text-white hover:font-semibold transition-colors"
          href="mailto:ceilidhashcroft@shaw.ca"
          aria-label="Email link"
        >
          <FontAwesomeIcon icon={faEnvelope} /> Send me an <b>Email</b>
        </a>
        <span id="footer-text">
          Ceilidh Ashcroft - {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  )
}
