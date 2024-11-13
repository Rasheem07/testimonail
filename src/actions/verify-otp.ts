import { getCookies } from "@/helpers/getCookies";

export const handleOTPsubmission = async (email: string, otp: string) => {
    const cookies = getCookies();

        const response = await fetch('http://localhost:5000/api/otp/verify', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "xsrf-token": cookies._csrf,
          },
        })

        const data = await response.json();

        return data;
  }