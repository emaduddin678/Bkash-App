import React from "react";
import FormLayout from "../MainFormLayout/FormLayout";
import classes from "../styles/Payment.module.css";
import Button from "../Button";

function Payment() {
  return (
    <div>
      <FormLayout>
        <h1 className={classes.form_heading}>
          কনসার্ট দেখার জন্য এখনি পেমেন্ট করুন
        </h1>

        <Button text={"পেমেন্ট"} className={classes.btn_margin} />
      </FormLayout>
    </div>
  );
}

export default Payment;
