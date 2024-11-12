import { getCookies } from "@/helpers/getCookies";

export const sendOTP = async (email: string) => {
  const cookies = getCookies();
  const response = await fetch(`${process.env.PROD_BASE_URL}/api/otp/sendmail`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "xsrf-token": cookies._csrf,
    },
    mode: "cors",
    body: JSON.stringify({user: email}),
  });

  const data = await response.json();

  let error;
  if (!response.ok) {
    error = data.error;
  }

  return {data, error};
};
