import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from '../components/About'
import Footer from '../components/Footer'
import Home from '../components/Home'
import TopNav from '../components/TopNav'

export default function Layout() {
  return (
    <>
      <Router>
        <TopNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
        </Routes>
        <Footer />
      </Router>

    </>
  )
}
