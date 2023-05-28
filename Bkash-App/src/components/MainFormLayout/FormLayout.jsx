import React from "react";
import classes from "../styles/FormLayout.module.css";


function FormLayout({children }) {
  return (
    <div className={classes.outer_form}>
      <div className={classes.form_body}>
        {children}
      </div>
    </div>
  );
}

export default FormLayout;
