import React, { useState } from "react";
import classes from "../components/styles/Checkbox.module.css";

function Checkbox({  text, ...rest }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className={classes.form_control}>
      <input
        type="checkbox"
        name="checkbox"
        {...rest}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {text}
    </label>
  );
}

export default Checkbox;

// <div className={classes.form_group_checkbox}>
//   <input type="checkbox" className={classes.input} {...rest} />
//   <label className={classes.rempass}>{text}</label>
// </div>