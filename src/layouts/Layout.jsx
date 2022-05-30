import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
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
        </Routes>
        <Footer />
      </Router>

    </>
  )
}
