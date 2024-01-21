import React from 'react'
import Hero from "..//Components/Hero/Hero"
import Spotlight from '../Components/Spotlight/Spotlight'
import Offers from '../Components/Offers/Offers'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Spotlight/>
      <Offers />
      <Footer/>
    </div>
  )
}

export default Home
