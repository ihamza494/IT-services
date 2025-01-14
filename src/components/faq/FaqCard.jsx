import React, { useState } from "react";
import "./FaqCard.css";

const FaqCard = () => {
  const faqs = [
    {
      question: "What services does your agency provide?",
      answer: "We provide web development, app development, UI/UX design, SEO, and digital marketing services tailored to your needs.",
    },
    {
      question: "What types of businesses do you work with?",
      answer: "We collaborate with startups, small-to-medium businesses, and enterprises across various industries.",
    },
    {
      question: "How long does it take to complete a website project?",
      answer: "The timeline depends on the complexity of the project, but typically ranges from 4 to 12 weeks.",
    },
    {
      question: "Do you offer ongoing website maintenance?",
      answer: "Yes, we offer maintenance packages to keep your website up-to-date and performing optimally.",
    },
    {
      question: "How do you ensure the websites you develop are SEO-friendly?",
      answer: "We follow best practices, including fast loading speeds, mobile responsiveness, and proper meta-tagging to enhance SEO performance.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-card">
      <h4 className="faq-heading">FAQ</h4>
      <p className="faq-tagline">
        We’ve compiled the most common queries to help you get started with us.
      </p>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item"
          onClick={() => toggleAnswer(index)}>
            <div
              className="faq-question"
              
            >
              {faq.question}
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqCard;
