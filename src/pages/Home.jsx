// import React from 'react'

import About from "../component/About"
import Footer from "../component/Footer"
import Hero from "../component/Hero"
import Nav from "../component/Nav"
import ProductView from "../component/ProductView"
// import Slider from "../component/Slider"

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <ProductView />
      <About/>
      <Footer />
      {/* <Slider/> */}
    </div>
  )
}

export default Home