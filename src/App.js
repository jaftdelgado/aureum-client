import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.scss";
import "./scss/labels.scss";
import Home from "./pages/home/Home";
import Simulador from "./components/Simulador";

export default function App() {
  return (
    <Router>
      <div className="app">
        <header className="navbar">
          <div className="navbar-logo">Aureum</div>
          <nav className="navbar-links">
            <Link to="/">Inicio</Link>
            <Link to="/simulador">Simulador</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/simulador" element={<Simulador />} />
        </Routes>
      </div>
    </Router>
  );
}
