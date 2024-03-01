import React from "react";
import "./contact.css";
import { ContactIllustration } from "../../../../assets";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-heading">
        <h1>Contact Us</h1>
        <p>
          Have a question, suggestion, or just want to connect with us? We'd
          love to hear from you! Our dedicated support team is here to assist
          you on your DIYGAINS journey. Feel free to reach out through the
          following channels:
        </p>
      </div>
      <div className="contact-form">
        <form action="">
          <div className="contact-form__input">
            <input type="text" name="name" id="name" placeholder="Name" />
            <input type="email" name="email" id="email" placeholder="Email" />
            <textarea
              name="message"
              id="message"
              // cols="30"
              rows="8"
              placeholder="Message"
            ></textarea>
          </div>
          <button>Submit</button>
        </form>
        <img src={ContactIllustration} alt="contact-illustration" />
      </div>
    </section>
  );
};

export default Contact;
