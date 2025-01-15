import React from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Mission from "../../components/mission-statement/Mission";
import DesignProcess from "../../components/design-process/DesignProcess";


const Home = () => {
    
  return (
    <div className="home-page">
      <Header/>
      <div className="cover-photo-home">
        <div className="cover-content-home">
          <h1>We are makers who crafts Products and experiences.</h1>
          <p>Transforming your ideas into scalable digital solutions.</p>
          <button className="quote-button">Get a Quote</button>
        </div>
      </div>
      <Mission/>
      <DesignProcess/>
      <Footer/>
    </div>
  );
};

export default Home;
