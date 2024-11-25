import React from "react";
import './../styles/App.css';
import Home from "./Home";
import About from "./About";
import {BrowserRouter} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav >
          <link to="/">Home</link>
          <link to="/about">About</link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

        {/* Do not remove the main div */}
      </div>
    </BrowserRouter>
  )
}

export default App
