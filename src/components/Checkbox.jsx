import React from "react";
import classes from "../components/styles/Checkbox.module.css";

function Checkbox({ className, text, ...rest }) {
  return (
    <div className={classes.form_group_checkbox}>
      <input type="checkbox" className={classes.input} {...rest} />
      <label className={classes.rempass}>{text}</label>
    </div>
  );
}

export default Checkbox;
