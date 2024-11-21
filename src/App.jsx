import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import PhoneVerification from "./component/PhoneVerification";
import ProfileDetails from "./pages/ProfileDetails";
import AddressDetails from "./pages/AddressDetails";
import CourseDetails from "./pages/CourseDetails";
import FooterSection from "./component/FooterSection";
import { useState, useEffect } from "react";
import Home from "./pages/Home";

import './App.css';
import ThankYou from "./pages/ThankYou";

const AppContent = () => {
  const [component, setComponent] = useState(1);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/profile-details') {
      setComponent(1);
    } else if (location.pathname === '/address-details') {
      setComponent(2);
    } else if (location.pathname === '/course-details') {
      setComponent(3);
    }
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<PhoneVerification />} />
        <Route path="/footer-details" element={<FooterSection />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
      <Home prop={component} />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;