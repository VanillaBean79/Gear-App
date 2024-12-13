import React from 'react';
import GearPage from './GearPage.js'
import About from './About.js'
import './App.css';
import Home from './Home.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar.js'


function App() {
  return (
    <Router>
      
       <div className="App">
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gear" element={<GearPage />} />
              <Route path="/About" element={<About />} />
            </Routes>
       </div>
     
    </Router>
  );
}

export default App;
