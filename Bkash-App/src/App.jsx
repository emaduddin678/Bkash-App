import React from "react";
import "./components/styles/App.css";
import Layout from "./components/Layout";
import LandingPage from "./components/pages/LandingPage";
import ResetPass from "./components/pages/ResetPass";
import SetReset from "./components/pages/SetReset";
import SecondLanding from "./components/pages/SecondLanding";
import SecondSignUp from "./components/pages/SecondSignUp";
import SignUp from "./components/pages/SignUp";
import LogInPage from "./components/pages/LogInPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Payment from "./components/pages/Payment";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/resetpass" element={<ResetPass />} />
            <Route path="/setreset" element={<SetReset />} />
            <Route path="/secondlanding" element={<SecondLanding />} />
            <Route path="/signupcode" element={<SecondSignUp />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
