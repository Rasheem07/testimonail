import React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { ValueState } from "@/types/reactstate";

const OTPInput: React.FC<ValueState> = ({ value, setValue }) => {
  const customStyles: React.CSSProperties = {
    width: "50px",
    height: "50px",
    fontSize: "14px",
    color: "white", // You can change the background color as needed
    border: "1px solid #ccc",
    textAlign: "center",
    margin: "0 5px",
    fontWeight: "medium",
    caretColor: "none",
    caret: "white !important",
  };

  return (
    <InputOTP maxLength={6} value={value} onChange={(value) => setValue(value)}>
      <InputOTPGroup>
        <InputOTPSlot index={0} style={customStyles} />
        <InputOTPSlot index={1} style={customStyles} />
        <InputOTPSlot index={2} style={customStyles} />
        <InputOTPSlot index={3} style={customStyles} />
        <InputOTPSlot index={4} style={customStyles} />
        <InputOTPSlot index={5} style={customStyles} />
      </InputOTPGroup>
    </InputOTP>
  );
};

export default OTPInput;
