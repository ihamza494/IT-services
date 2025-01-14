import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './AboutUs.css'
import AboutUsCard from '../../components/about-us-card/AboutUsCard'
import FaqCard from '../../components/faq/FaqCard'

const Aboutus = () => {
  return (
    <div className="About-us-page">
      <Header/>
      <div className="cover-photo-about">
        <div className="cover-content-about">
          <h1>Learn More About Us</h1>
          <p>We are Passionate about creating exceptional websites that drive results</p>
        </div>
      </div>
      <AboutUsCard/>
      <FaqCard/>
      <Footer/>
    </div>
  )
}

export default Aboutus
