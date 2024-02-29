import "./App.css";
import {
  About,
  Features,
  Hero,
  News,
  Testimonials,
  FAQs
} from "./pages/LandingPage/Pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hiw from "./pages/LandingPage/Pages/HIW/Hiw";

function App() {
  return (
    <div className="App">
      <Router>
        <Hero />
        <Features />
        <Hiw />
        <About />
        <News />
        <Testimonials />
        <FAQs />
      </Router>
    </div>
  );
}

export default App;
