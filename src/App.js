import "./App.css";
import { Features, Hero } from "./pages/LandingPage/Pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Hero />
        <Features />
      </Router>
    </div>
  );
}

export default App;
