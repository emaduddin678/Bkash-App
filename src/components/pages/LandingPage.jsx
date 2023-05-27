import React, { useEffect, useRef, useState } from "react";
import classes from "../styles/LandingPage.module.css";
import banner from "../../assets/images/website-banner-anuv-jain-414x334-Dark.png";
import Button from "../Button";
import { Link } from "react-router-dom";

function LandingPage() {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let interval = useRef();
  const startTimer = () => {
    const countdownDate = new Date("June 01 , 2023").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <>
      <div className={classes.banner}>
        <img src={banner} alt="bkash-logo-bangla" />
      </div>
      <div className={classes.tex_center}>
        <p>কনসার্ট শুরু হতে বাকি</p>
      </div>
      <div className={classes.countdown}>
        <div>
          {/* <p className={classes.single_clock}>00</p> */}
          <p className={classes.single_clock}>{days}</p>
          <p className={classes.clock_label}>
            <small>দিন</small>
          </p>
        </div>
        <div>
          {/* <p className={classes.single_clock}>00</p> */}
          <p className={classes.single_clock}>{hours}</p>
          <p className={classes.clock_label}>
            <small>ঘণ্টা</small>
          </p>
        </div>
        <div>
          {/* <p className={classes.single_clock}>00</p> */}
          <p className={classes.single_clock}>{minutes}</p>
          <p className={classes.clock_label}>
            <small>মিনিট</small>
          </p>
        </div>
        <div>
          {/* <p className={classes.single_clock}>00</p> */}
          <p className={classes.single_clock}>{seconds}</p>
          <p className={classes.clock_label}>
            <small>সেকেন্ড</small>
          </p>
        </div>
        <div className={classes.shadow}></div>
      </div>
      <div className={classes.both_button}>
        {/* {console.log(classes.both_button)} */}
        <Link to="/signup">
          <Button text={"রেজিস্ট্রেশন"} />
        </Link>
        <h2>অথবা</h2>
        <Link to="/login">
          <Button text={"লগ ইন"} />
        </Link>
      </div>
      <footer>
        <p>
          Copyright &copy; 2023 <span>bKash Limited</span>. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}

export default LandingPage;
