import React from "react";
import FormLayout from "../MainFormLayout/FormLayout";
import classes from "../styles/SetReset.module.css";
import TextInput from "../TextInput";
import Button from "../Button";

function SetReset() {
  const text = "পাসওয়ার্ড পুনরায় সেট করুন";
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
        <TextInput
          type="text"
          id="phone"
          name="phone"
          placeholder="নতুন পাসওয়ার্ড"
          required
        />
        <TextInput
          type="text"
          id="phone"
          name="phone"
          placeholder="পুনরায় নতুন পাসওয়ার্ড"
          required
        />

        <div className={classes.extra_margin}>
          <Button text={"জমা দিন"} className={classes.btn_margin} />
        </div>
      </form>
    </FormLayout>
  );
}
//style={{ marginBottom: "120px" }}
export default SetReset;
