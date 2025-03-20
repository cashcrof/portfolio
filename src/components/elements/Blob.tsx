import React from "react"
import { useEffect, useState } from "react"

function Blobby() {
  const [hue, setHue] = useState("0deg")
  useEffect(() => {
    const blob = document.getElementById("blob")
    document.body.onpointermove = event => {
      const { clientX, clientY } = event
      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 1000, fill: "forwards" }
      )
    }

    document.body.onscroll = () => {
      const { scrollTop } = document.documentElement
      setHue(`${scrollTop / 5}deg`)
    }
  }, [])

  return (
    <>
      <div id="blob"></div>
      <div id="blur"></div>
    </>
  )
}

export default Blobby
