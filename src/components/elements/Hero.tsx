import React from "react"
import { MouseEvent, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import Loader from "./Loader"
import ComputerModel from "../models/Computer"
import { motion } from "motion/react"

export default function Hero() {
  const hackertext = (
    event: MouseEvent<HTMLSpanElement, MouseEvent> | MouseEvent | TouchEvent
  ) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let iterations = 0

    const interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((_letter: any, index: number) => {
          if (index < iterations) {
            return event.target.dataset.value[index]
          }
          return letters[Math.floor(Math.random() * letters.length)]
        })
        .join("")

      if (iterations > event.target.dataset.value.length) {
        clearInterval(interval)
        if (event.target.dataset.value === "ceilidh. ") {
          event.target.dataset.value = "(kaylee)"
        } else {
          event.target.dataset.value = "ceilidh. "
        }
      }
      iterations += 1 / 3
    }, 30)
  }

  return (
    <motion.div
      className="sm:w-lvw mx-0"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.8, ease: [0, 0.7, 0.2, 1] }}
    >
      <div className="absolute z-10 flex flex-col max-w-lvh px-0 items-center sm:min-h-screen sm:w-2/5 sm:left-1/2 sm:my-16 sm:pt-16">
        <motion.h1
          className="m-0 text-6xl font-thin text-center py-14 sm:px-0 sm:mx-0 sm:text-start"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0, 0.7, 0.2, 1] }}
        >
          hey, i'm{" "}
          <motion.span
            data-value="(kaylee)"
            className="font-medium pulse"
            onMouseOverCapture={event => {
              event.preventDefault()
              event.stopPropagation()
              hackertext(event)
            }}
            onTap={event => {
              event.preventDefault()
              event.stopPropagation()
              hackertext(event)
            }}
          >
            ceilidh.
          </motion.span>
        </motion.h1>
        <motion.h2
          className="m-0 text-2xl font-thin p-14 sm:text-5xl sm:py-0 sm:px-0 sm:justify-self-end"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2, ease: [0, 0.7, 0.2, 1] }}
        >
          i'm a{" "}
          <span className="font-normal">full stack software developer</span>{" "}
          located in <span className="font-normal text-end">halifax, ns.</span>
        </motion.h2>
        <motion.a
          className="mail-button mt-10 sm:justify-self-end"
          href="mailto:ceilidhashcroft@shaw.ca"
          aria-label="Get in touch"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3, ease: [0, 0.7, 0.2, 1] }}
        >
          Get in touch
        </motion.a>
      </div>
      <Canvas
        style={{
          height: "100svh",
          width: "100svw",
          zIndex: 0,
          overflow: "visible",
        }}
      >
        <pointLight position={[-3, 1, 0]} intensity={5} color={"magenta"} />
        <pointLight position={[-1, 1, -2]} intensity={5} color={"cyan"} />
        <Suspense fallback={<Loader />}>
          <ComputerModel />
        </Suspense>
      </Canvas>
    </motion.div>
  )
}
