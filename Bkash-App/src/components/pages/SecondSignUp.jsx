import React from "react";
import FormLayout from "../MainFormLayout/FormLayout";
import classes from "../styles/SecondSignUp.module.css";
import TextInput from "../TextInput";
import Button from "../Button";

function SecondSignUp() {
  const text = "রেজিস্ট্রেশন";
  return (
    <FormLayout>
      <h1 className={classes.form_heading}>{text}</h1>
      <form className={classes.form_width}>
        <TextInput
          type="text"
          id="phone"
          name="phone"
          placeholder="কোড"
          required
        />

        <div>
          <Button text={"জমা দিন"} className={classes.btn_margin} />
        </div>
      </form>
    </FormLayout>
  );
}
//style={{ marginBottom: "120px" }}
export default SecondSignUp;
