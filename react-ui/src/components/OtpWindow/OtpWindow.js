import React from "react";
import "./OtpWindow.css";
// import OtpInput from "react-otp-input";
import VerificationCode from '../VerificationCode/VerificationCode'


export default function SubgroupWindow(props) {
  const cssClasses = [
    "otpWindow",
    props.show ? "otpWindowOpen" : "otpWindowClosed"
  ];
  

  return (
    <div className={cssClasses.join(" ")}>
      <VerificationCode />
    </div>
  );
}
