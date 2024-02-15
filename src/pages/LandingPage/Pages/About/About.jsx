import React from "react";
import "./about.css";
import { Hexagon, S21u } from "../../../../assets";

const About = () => {
  return (
    <section className="about">
      <img src={Hexagon} alt="hexagon" className="hexagon" />
      <div className="about-card">
        <div className="about-card__text">
          <h1>About Us</h1>
          <p>
            At DIYGAINS, we believe in the transformative power of creativity
            and the joy it brings to individuals. Our platform is a vibrant
            community where DIY enthusiasts come together to explore, create,
            and earn rewards. With a passion for innovation and a commitment to
            fostering a supportive environment, DIYGAINS provides a space for
            makers to showcase their skills, connect with like-minded
            individuals, and embark on a journey of endless possibilities.
            Whether you're a seasoned DIY veteran or just starting, DIYGAINS is
            here to celebrate your unique creations and offer a rewarding
            experience. Join us in the celebration of craftsmanship, community,
            and the boundless potential of DIY projects.
          </p>
        </div>
        <button>Learn More</button>
      </div>
      <img src={S21u} alt="s21u" className="s21u"/>
    </section>
  );
};

export default About;
