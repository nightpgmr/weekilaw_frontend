import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';
import CommercialLaw from './components/CommercialLaw.jsx';
import EstateProbate from './components/EstateProbate.jsx';

function App() {
  return (
    <Router>
      <div className="App layout_body__hKYsf __variable_f367f3 __variable_ad9d8d">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/en-us/commercial-law" element={<CommercialLaw />} />
          <Route path="/en-us/estate-and-probate-law" element={<EstateProbate />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
