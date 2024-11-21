import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PhoneVerification from "./component/PhoneVerification";
import ProfileDetails from "./pages/ProfileDetails";
import AddressDetails from "./pages/AddressDetails";
import CourseDetails from "./pages/CourseDetails";
import FooterSection from "./component/FooterSection";

import Try from "./component/Try";

import './App.css'
import ThankYou from "./pages/ThankYou";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< PhoneVerification/>} />
        <Route path="/profile-details" element={<ProfileDetails />} />
        <Route path="/address-details" element={<AddressDetails />} />
        <Route path="/course-details" element={<Try />} />
        <Route path="/footer-details" element={<FooterSection />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </Router>
  );
};

export default App;

