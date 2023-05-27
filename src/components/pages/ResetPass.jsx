import React from "react";
import FormLayout from "../MainFormLayout/FormLayout";
import classes from "../styles/ResetPass.module.css";
import TextInput from "../TextInput";
import Button from "../Button";
import { Link } from "react-router-dom";

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
          <Link to="/setreset">
            <Button text={"কোড পাঠান"} className={classes.btn_margin} />
          </Link>
          <Link to="/login">
          <Button text={"ফেরত যান"} className={classes.btn_margin} />
          </Link>
        </div>
      </form>
    </FormLayout>
  );
}
//style={{ marginBottom: "120px" }}
export default ResetPass;
