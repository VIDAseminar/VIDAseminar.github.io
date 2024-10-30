// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'; // Import the Home component
import HistoryTalks from './components/HistoryTalks/HistoryTalks'; // Import the HistoryTalks component
import Navbar from './components/Navbar/Navbar'; // Your navigation component‘
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<HistoryTalks />} />
      </Routes>
    </Router>
  );
}

export default App;
