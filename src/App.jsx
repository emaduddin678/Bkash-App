import React from "react";
import "./components/styles/App.css"
import Layout from './components/Layout'
import ResetPass from "./components/pages/ResetPass";
// import LandingPage from './components/pages/LandingPage'
// import SignUp from './components/pages/SignUp'
// import LogInPage from './components/pages/LogInPage'

function App() {

  return (
    <>
      <Layout >
        {/* <LandingPage /> */}
        {/* <SignUp /> */}
        {/* <LogInPage /> */}
        <ResetPass />
      </Layout>
    </>
  )
}

export default App
