import React from "react"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import About from "./Components/About"
import Projects from "./Components/Projects"
import Footer from "./Components/Footer"
import Skills from "./Components/Skills"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default App
