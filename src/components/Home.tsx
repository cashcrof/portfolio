import React from "react"
import Hero from "./elements/Hero"
import Stack from "./elements/Stack"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowAltCircleLeft,
  faArrowRight,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Stack />
      <div className="flex flex-col sm:flex-row w-100 m-10 py-10">
        <h2 className="text-center sm:text-left sm:ml-16 text-4xl sm:mb-16 pb-16 font-thin">
          wanna check out some of my work?
          <Link
            to={"/portfolio"}
            className="text-center sm:text-left sm:ml-16 pulse text-4xl mb-16 pb-16 font-semibold"
          >
            view my portfolio ➜
          </Link>
        </h2>
      </div>
    </>
  )
}

export default Home
