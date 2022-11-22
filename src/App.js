
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./components/home/home"
import Contact from "./components/contact/contact"
import About from "./components/about/about"


function App() {
  return (
    <Router> 
        <nav className='nav'>
          <ul>
            <li> <Link to="/">Home</Link>             </li>
            <li> <Link to="/about">About</Link>       </li>
            <li> <Link to="/contact">Contact</Link>   </li>
            
          </ul>
        </nav>

        <Routes>
      
         
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={ <Home />} />

        </Routes>
    </Router>
  );
}

export default App;
