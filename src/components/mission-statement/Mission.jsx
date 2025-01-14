import React from "react";
import "./Mission.css";
import homepagebg1 from "../../assets/web-dev-service-bg.jpeg";
import homepagebg2 from "../../assets/seo-service-bg.jpeg";
import homepagebg3 from "../../assets/app-dev-service-bg.jpeg";
import homepagebg4 from "../../assets/A1.avif";
import homepagebg5 from "../../assets/A2.avif";
import homepagebg6 from "../../assets/A3.jpg";

const Mission = () => {
  const services = [
    {
      title: "Web Development",
      description: "We create modern, responsive, and scalable websites tailored to your needs.",
      bgImage: homepagebg1,
    },
    {
      title: "App Development",
      description: "Feature-rich mobile applications built for Android and iOS platforms.",
      bgImage: homepagebg2,
    },
    {
      title: "UI/UX Design",
      description: "Visually appealing and user-friendly designs for your projects.",
      bgImage: homepagebg3,
    },
    {
      title: "SEO/Content Writing",
      description: "Writing informative and value-driven articles tailored to your audience.",
      bgImage: homepagebg4,
    },
    {
      title: "Data Analytics",
      description: "Turn data into actionable insights and empower your business decisions with precision and confidence.",
      bgImage: homepagebg5,
    },
    {
      title: "Ads/Marketing",
      description: "Captivate your audience, amplify your brand, and drive real results with scroll-stopping ads and social media strategies that stand out in the digital crowd.",
      bgImage: homepagebg6,
    },
  ];

  return (
    <div className="mission-main">
      <div className="top-text">What we do</div>
      <div className="statement-text">
        Our mission is to transform your vision into reality by focusing on creativity, precision, and strategies that drive growth and elevate your brand.
      </div>
      <div className="services-card-container">
        <h1 style={{ textAlign: "center", margin: "20px 0" }}>Our Services</h1>
        <div className="scroll-wrapper">
          <div className="services-scroll-container">
            {services.concat(services).map((service, index) => ( // Duplicate array for seamless looping
              <div
                key={index}
                className="services-card"
                style={{
                  backgroundImage: `url(${service.bgImage})`,
                }}
              >
                <div className="services-card-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
