import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/pageVars.css';
import MainContent from './components/MainContent.jsx';
import EstateAndProbateLaw from './components/EstateAndProbateLaw.jsx';
import CommercialLaw from './components/CommercialLaw.jsx';
import CriminalLaw from './components/CriminalLaw.jsx';
import EmploymentLaw from './components/EmploymentLaw.jsx';
import FamilyLaw from './components/FamilyLaw.jsx';
import ImmigrationLaw from './components/ImmigrationLaw.jsx';
import Litigation from './components/Litigation.jsx';
import PersonalInjuryLaw from './components/PersonalInjuryLaw.jsx';
import PropertyLaw from './components/PropertyLaw.jsx';
import AboutAITechnology from './components/AboutAITechnology.jsx';
import LegalNetwork from './components/LegalNetwork.jsx';
import Careers from './components/Careers.jsx';
import Sailing from './components/Sailing.jsx';
import Company from './components/Company.jsx';
import SignUp from './components/SignUp.jsx';
import SignIn from './components/SignIn.jsx';
import ChatPage from './components/ChatPage.jsx';
import AccountPage from './components/AccountPage.jsx';
import SettingsPage from './components/SettingsPage.jsx';
import FAQs from './components/FAQs.jsx';
import Library from './components/Library.jsx';
import About from './components/About.jsx';
import Insights from './components/Insights.jsx';

function App() {
  return (
    <Router>
      <div className="App layout_body __variable_f367f3 __variable_ad9d8d">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/en-us/commercial-law" element={<CommercialLaw />} />
          <Route path="/en-us/criminal-law" element={<CriminalLaw />} />
          <Route path="/en-us/employment-law" element={<EmploymentLaw />} />
          <Route path="/en-us/estate-and-probate-law" element={<EstateAndProbateLaw />} />
          <Route path="/en-us/family-law" element={<FamilyLaw />} />
          <Route path="/en-us/immigration-law" element={<ImmigrationLaw />} />
          <Route path="/en-us/litigation" element={<Litigation />} />
          <Route path="/en-us/personal-injury-law" element={<PersonalInjuryLaw />} />
          <Route path="/en-us/property-law" element={<PropertyLaw />} />
          <Route path="/en-us/about/ai-technology" element={<AboutAITechnology />} />
          <Route path="/en-us/about/legal-network" element={<LegalNetwork />} />
          <Route path="/en-us/about/company" element={<Company />} />
          <Route path="/en-us/about/careers" element={<Careers />} />
          <Route path="/en-us/about/sailing" element={<Sailing />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/en-us/for-lawyers/sign-up" element={<SignUp />} />
          <Route path="/auth/sign-in" element={<SignIn />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/chat/:chatId" element={<ChatPage />} />
          <Route path="/en-us/library" element={<Library />} />
          <Route path="/en-us/about" element={<About />} />
          <Route path="/en-us/insights" element={<Insights />} />
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
