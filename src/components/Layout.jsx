import React from "react";
import classes from "./styles/Layout.module.css";
import logo from '../assets/images/bkash-logo.png'

function Layout({ children }) {
  return (
    <div className={classes.container}>
      <div className={classes.logo_heading}>
        <img
          src={logo}
          alt="bkash-logo-bangla"
        />
      </div>
      {children}
    </div>
  );
}

export default Layout;
