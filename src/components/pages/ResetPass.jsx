import React from "react";
import FormLayout from "../MainFormLayout/FormLayout";
import classes from "../styles/ResetPass.module.css";
import TextInput from "../TextInput";
import Checkbox from "../Checkbox";
import Button from "../Button";

function ResetPass() {
  const text = "পাসওয়ার্ড পুনরায় সেট করুন";
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

        <div>
          <Button text={"কোড পাঠান"} className={classes.btn_margin} />
          <Button text={"ফেরত যান"} className={classes.btn_margin} />
        </div>
      </form>
    </FormLayout>
  );
}
//style={{ marginBottom: "120px" }}
export default ResetPass;
