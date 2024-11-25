import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './../styles/App.css';
import Home from "./Home";
import About from "./About";


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App;
