import "./App.css"
import { Pages } from "./components/pages/Pages"
import React, { useEffect } from "react"

// installaos@next
//aos
import AOS from "aos"
import "aos/dist/aos.css"

function App() {
  //aos
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <>
      <Pages />
    </>
  )
}

export default App
