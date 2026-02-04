import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/pageVars.css';
import UnderConstruction from './components/UnderConstruction.jsx';
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
import ContactUs from './components/ContactUs.jsx';
import Terms from './components/Terms.jsx';
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import PaymentListener from './pages/PaymentListener.jsx';

function App() {
  return (
    <Router>
      <div className="App layout_body __variable_f367f3 __variable_ad9d8d">
        {/* <UnderConstruction /> */}
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/commercial-law" element={<CommercialLaw />} />
          <Route path="/criminal-law" element={<CriminalLaw />} />
          <Route path="/employment-law" element={<EmploymentLaw />} />
          <Route path="/estate-and-probate-law" element={<EstateAndProbateLaw />} />
          <Route path="/family-law" element={<FamilyLaw />} />
          <Route path="/immigration-law" element={<ImmigrationLaw />} />
          <Route path="/litigation" element={<Litigation />} />
          <Route path="/personal-injury-law" element={<PersonalInjuryLaw />} />
          <Route path="/property-law" element={<PropertyLaw />} />
          <Route path="/about/ai-technology" element={<AboutAITechnology />} />
          <Route path="/about/legal-network" element={<LegalNetwork />} />
          <Route path="/about/company" element={<Company />} />
          <Route path="/about/careers" element={<Careers />} />
          <Route path="/about/sailing" element={<Sailing />} />
          <Route path="/sign-up" element={<SignUp />} />
          {/* <Route path="/for-lawyers/sign-up" element={<SignUp />} /> */}
          <Route path="/auth/sign-in" element={<SignIn />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/chat/:chatId" element={<ChatPage />} />
          <Route path="/library" element={<Library />} />
          <Route path="/about" element={<About />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/payment-listener" element={<PaymentListener />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
