"use client"

import { useState, useEffect } from "react"
import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Education from "../components/Education"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"


export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <Header scrollY={scrollY} />
      <main>
        <Hero />
        <About />
        <Education/>
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

