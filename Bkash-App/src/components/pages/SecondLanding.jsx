import React, { useEffect, useRef, useState } from "react";
import classes from "../styles/SecondLanding.module.css";
import banner from "../../assets/images/website-banner-anuv-jain-414x334-Dark.png";
// import Button from "../Button";

function SecondLanding() {
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

  //   if you want countdown juct uncomment useEffect

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
        <p>আপনার রেজিস্ট্রেশন সফল হয়েছে।</p>
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
      <div className={classes.dark_bottom}></div>
    </>
  );
}

export default SecondLanding;
