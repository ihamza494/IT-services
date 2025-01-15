import React from 'react'
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import './Pricing.css'
import PricingPlan from '../../components/pricing-plan/PricingPlan';

const Pricing = () => {
  return (
    <div>
      <Header/>
      <div className="cover-photo-pricing">
        <div className="cover-content-pricing">
          <h1>Learn More About Us</h1>
          <p>We are Passionate about creating exceptional websites that drive results</p>
        </div>
      </div>
      <PricingPlan/>
      <Footer/>
    </div>
  )
}

export default Pricing
