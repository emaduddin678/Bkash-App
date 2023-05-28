import React from "react";
import classes from "./styles/TextInput.module.css"

function TextInput({  ...rest }) {
  return (
    <div className={classes.form_group}>
      <input className={classes.input} {...rest} autoComplete="on" />
    </div>
  );
}

export default TextInput;
