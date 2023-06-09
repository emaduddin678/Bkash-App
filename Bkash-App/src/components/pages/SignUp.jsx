import React from "react";
import FormLayout from "../MainFormLayout/FormLayout";
import classes from "../styles/SignUp.module.css";
import TextInput from "../TextInput";
import Checkbox from "../Checkbox";
import Button from "../Button";

function SignUp() {
  const text = "রেজিস্ট্রেশন";
  return (
    <FormLayout>
      <h1 className={classes.form_heading}>{text}</h1>
      <form className={classes.form_width}>
        
        <TextInput
          type="text"
          id="phone"
          name="phone"
          placeholder="মোবাইল নাম্বার"
          required
        />

        <TextInput
          type="password"
          id="password"
          name="password"
          placeholder="পাসওয়ার্ড"
          required
        />
        <div className={classes.left}>
          <Checkbox
            id="password"
            name="password"
            text={"পাসওয়ার্ড মনে রাখুন"}
          />

          <Checkbox id="condition" name="condition" text={"শর্তাবলী"} />
        </div>
        <Button
          text={"রেজিস্ট্রেশন"}
          className={classes.btn_margin}
          style={{ marginBottom: "120px" }}
        />
      </form>
    </FormLayout>
  );
}

export default SignUp;
