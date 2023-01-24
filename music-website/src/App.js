import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Live from "./components/Live/Live";
import Navbar from "./components/Navbar/Navbar";
import Merch from "./components/Merch/Merch";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL + "/"}>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/live" element={<Live />} />
          <Route path="/shop" element={<Merch />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
