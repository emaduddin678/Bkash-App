import React from "react";
import FormLayout from "../MainFormLayout/FormLayout";
import classes from "../styles/LogInPage.module.css";
import TextInput from "../TextInput";
import Checkbox from "../Checkbox";
import Button from "../Button";
import { Link } from "react-router-dom";

function LogInPage() {
  const text = "লগ ইন";
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

        <div className={classes.flex_div}>
          <Checkbox
            id="passwordlogin"
            name="password"
            text={"পাসওয়ার্ড মনে রাখুন"}
            />
          <Link to="/resetpass">
            <p className={classes.forgotpass}>পাসওয়ার্ড ভুলে গেছেন ?</p>
          </Link>
        </div>

        <Button text={"লগ ইন"} className={classes.btn_margin} />
        <h2>অথবা</h2>
        <div className={classes.gotosignup}>
          <Link to="/signup"> সাইন আপ</Link>
        </div>
      </form>
    </FormLayout>
  );
}
//style={{ marginBottom: "120px" }}
export default LogInPage;
