import React from "react";
import "./Services.css"; // Import CSS for styling

const ServiceCard = ({ title, description, bgImage }) => {
  const cardStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "10px",
    height: "350px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#ffffff",
    padding: "10px",
    
  };

  return (
    <div className="service-card" style={cardStyle}>
      <h2 className="service-card-title">{title}</h2>
      <p className="service-card-description">{description}</p>
    </div>
  );
};

export default ServiceCard;
