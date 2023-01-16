import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bio from "./components/Bio/Bio";
import Live from "./components/Live/Live";
import Navbar from "./components/Navbar/Navbar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL + "/"}>
        <Navbar />
        <div className="page-container">
          <Routes>
            <Route path="/" element={<Bio />} />
            <Route path="/live" element={<Live />} />
            {/* <Route path="/contact" element={<Contact />} />
          <Route path="/cv" element={<Cv />} /> */}
          </Routes>
          {/* <Footer /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
