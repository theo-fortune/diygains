import "./App.css";
import { Hero } from "./pages/LandingPage/Pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Hero />
      </Router>
    </div>
  );
}

export default App;
