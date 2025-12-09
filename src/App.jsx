import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';
import EstateProbate from './components/EstateProbate.jsx';
import AboutAITechnology from './components/AboutAITechnology.jsx';
import LegalNetwork from './components/LegalNetwork.jsx';
import Careers from './components/Careers.jsx';
import Sailing from './components/Sailing.jsx';
import Company from './components/Company.jsx';
import SignUp from './components/SignUp.jsx';
import ChatPage from './components/ChatPage.jsx';

function App() {
  return (
    <Router>
      <div className="App layout_body__hKYsf __variable_f367f3 __variable_ad9d8d">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/en-us/estate-and-probate-law" element={<EstateProbate />} />
          <Route path="/en-us/:areaSlug" element={<EstateProbate />} />
          <Route path="/en-us/about/ai-technology" element={<AboutAITechnology />} />
          <Route path="/en-us/about/legal-network" element={<LegalNetwork />} />
          <Route path="/en-us/about/company" element={<Company />} />
          <Route path="/en-us/about/careers" element={<Careers />} />
          <Route path="/en-us/about/sailing" element={<Sailing />} />
          <Route path="/en-us/for-lawyers/sign-up" element={<SignUp />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
