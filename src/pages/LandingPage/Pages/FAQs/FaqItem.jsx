import React, { useState } from "react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="faq-item">
      <h4 className="faq-question" onClick={toggleAccordion}>
        <span>{question}</span>
        {isOpen ? (
          <BiSolidUpArrow className="faq-icon" />
        ) : (
          <BiSolidDownArrow className="faq-icon" />
        )}
      </h4>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

export default FaqItem;
