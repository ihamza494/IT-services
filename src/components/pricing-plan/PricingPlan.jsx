import React, { useState } from "react";
import "./PricingPlan.css";

const PricingPlan = () => {
  const [pricingInterval, setPricingInterval] = useState("monthly");

  const pricingPlans = [
    {
      name: "Monthly",
      price: "150",
      description: "Stay flexible with no long-term contracts.",
      features: [
        "Design and Development",
        "Basic SEO setup",
        "Mobile-Responsive & Optimized for All Devices",
        "Includes Hosting",
        "5 Pages Included ($50 per page after 5)",
        "Add a Blog ($150 additional)",
        "Unlimited Edits",
        "Lifetime Updates",
      ],
    },
    {
      name: "Yearly",
      price: "1300",
      originalPrice: "1800",
      savingsMessage: "Commit for a year, save $500 instantly!",
      features: [
        "Design and Development",
        "Basic SEO setup",
        "Mobile-Responsive & Optimized for All Devices",
        "Includes Hosting",
        "5 Pages Included ($50 per page after 5)",
        "Add a Blog ($150 additional)",
        "Unlimited Edits",
        "Lifetime Updates",
      ],
    },
  ];

  return (
    <div className="pricing-plan-container">
      <div className="pricing-header">
        <div className="pricing-label">PRICING PLANS</div>
        <h2>Pricing & Packages</h2>
        <p>
          Choose the plan that suits you best—flexible monthly options or save
          big with annual savings of $500!
        </p>
      </div>

      <div className="pricing-toggle">
        <button
          className={`toggle-button ${
            pricingInterval === "monthly" ? "active" : ""
          }`}
          onClick={() => setPricingInterval("monthly")}
        >
          Monthly
        </button>
        <button
          className={`toggle-button ${
            pricingInterval === "yearly" ? "active" : ""
          }`}
          onClick={() => setPricingInterval("yearly")}
        >
          Yearly
        </button>
      </div>

      <div className="pricing-cards">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card ${
              pricingInterval === plan.name.toLowerCase() ? "active-card" : ""
            }`}
          >
            <div className="card-header">
              <h3>{plan.name}</h3>
              <p>{plan.description}</p>
              {plan.name === "Yearly" && pricingInterval === "yearly" && (
                <p className="savings">{plan.savingsMessage}</p>
              )}
              <div className="price">
                {plan.name === "Yearly" && (
                  <span className="original-price">${plan.originalPrice}</span>
                )}
                <span className="current-price">${plan.price}</span>
                {!(plan.name === "Yearly" && pricingInterval === "yearly") && (
                  <span className="interval">
                    /{plan.name === "Monthly" ? "month" : "year"}
                  </span>
                )}
              </div>
            </div>
            <div className="card-content">
              <h4>What will you get:</h4>
              <ul>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✔</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button className="get-started-button">Get Started</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlan;
