import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>What is NITS MUN?</h1>
        <p>NITSMUN, the National Institute of Technology Model United Nations Club, is a dynamic platform cultivating global leaders. Committed to fostering diplomacy, critical thinking, and public speaking, NITSMUN provides students with opportunities to engage in enriching discussions, simulations, and conferences, shaping informed and empowered individuals for active participation in international affairs.</p>
        <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
