import React from "react";
import {
  About,
  Contact,
  FAQs,
  Features,
  Footer,
  Hero,
  News,
  Testimonials,
} from "./Pages";
import Hiw from "./Pages/HIW/Hiw";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Hiw />
      <About />
      <News />
      <Testimonials />
      <FAQs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Landing;
