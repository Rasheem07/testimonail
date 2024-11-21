import { getCookies } from "@/helpers/getCookies";

export const handleOTPsubmission = async (email: string, OTP: string) => {

        const response = await fetch('http://localhost:5000/api/otp/verify', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({email, OTP})
        })

        const data = await response.json();

        return data;
  }