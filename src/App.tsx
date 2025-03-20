import { Outlet } from "react-router"
import Blobby from "./components/elements/Blob"
import Navbar from "./components/Navbar"
import { Footer } from "./components/Footer"
import React from "react"
import BackToTopButton from "./components/elements/BackToTopButton"
import Home from "./components/Home"

function App() {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Blobby />
      <Navbar />
      <BackToTopButton />
      <main className="max-w-screen min-h-full flex flex-col mx-auto place-items-center">
        <Home />
      </main>
      <Footer />
    </>
  )
}

export default App
