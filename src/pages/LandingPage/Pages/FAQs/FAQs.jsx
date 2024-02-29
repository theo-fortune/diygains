import React from "react";
import "./faq.css";
import FaqItem from "./FaqItem";
import FaqData from "./FaqData";

const FAQs = () => {
  return (
    <section className="faq">
      <div className="faq-heading">
        <h1>Frequently Asked Questions</h1>
        <p>
          Welcome to DIYGAINS! Here, we've compiled answers to some common
          questions to guide you through your creative journey. If you have
          additional queries, feel free to reach out to our support team.
        </p>
      </div>
      <div className="faq-question-flex">
        {FaqData.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      <p className="faq-alt">
        Didn’t find your answer? <span className="faq-alt-alt"> contact us</span>
      </p>
    </section>
  );
};

export default FAQs;
