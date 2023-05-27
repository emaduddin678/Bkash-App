import React from "react";
import "./components/styles/App.css"
import Layout from './components/Layout'
// import LandingPage from './components/pages/LandingPage'
import SignUp from './components/pages/SignUp'

function App() {

  return (
    <>
      <Layout >
        {/* <LandingPage /> */}
        <SignUp />
      </Layout>
    </>
  )
}

export default App
