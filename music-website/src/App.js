import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bio from "./components/Bio/Bio";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL + "/"}>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Bio />} />
          {/* <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cv" element={<Cv />} /> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
