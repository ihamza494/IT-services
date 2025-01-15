import React from "react";
import "./DesignProcess.css"; // Import your custom CSS file
import coverImage from "../../assets/design-process-bg.png";

const DesignProcess = () => {
  return (
    <section className="design-process">
      <div className="container">
        <h2 className="heading">Our Custom Designs Process</h2>
        <p className="subheading">
          We follow a systematic approach to transform your vision into a powerful digital presence. Our proven process ensures quality, innovation, and results that exceed expectations.
        </p>

        <div className="illustration">
          <img
            src={coverImage}
            alt="Design Process Illustration"
          />
        </div>

        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Discovery & Planning</h3>
              <p>
                We begin with in-depth consultations to understand your business goals, target audience, and technical requirements. Our team creates a comprehensive project roadmap that aligns with your vision and objectives.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>UX Design & Prototyping</h3>
              <p>
                Our UX experts craft intuitive user flows and interactive wireframes, ensuring your website delivers an exceptional user experience. We validate designs through user testing and stakeholder feedback.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Development & Integration</h3>
              <p>
                Our development team brings designs to life using cutting-edge technologies and best practices. We ensure robust functionality, seamless integrations, and optimal performance across all devices.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Testing & Launch</h3>
              <p>
                We conduct thorough quality assurance testing, optimize for performance, and ensure security measures are in place. After final approval, we handle the deployment and provide post-launch support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
