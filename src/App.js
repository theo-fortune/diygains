import "./App.css";
import { About, Features, Hero } from "./pages/LandingPage/Pages";
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
      </Router>
    </div>
  );
}

export default App;
