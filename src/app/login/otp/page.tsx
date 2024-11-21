"use client";
import OTPinput from "@/components/OTP";
import { toast } from "@/hooks/use-toast";
import { handleOTPsubmission } from "@/actions/verify-otp";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import LoadingSpinner from "@/components/ui/loader";

export default function Page() {
  return <OTPcomponent />;
}

function OTPcomponent() {
  const router = useRouter();
  const params = useSearchParams();
  const email = params.get("email") as string;

  const [otp, setOTP] = useState("");
  const [error, seterror] = useState("");
  const [message, setmessage] = useState("");

  const handleOTP = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (otp.length !== 6) {
      seterror("OTP contains 6 digits!");
      return;
    }

    console.log(email);

    const OTP = await handleOTPsubmission(email, otp);

    if (OTP.error) {
      toast({
        description: OTP.error,
        variant: "destructive",
      });
    }

    toast({
      description: OTP.message,
    });

    router.push("/dashboard");
  };

  return (
    <form
      className="space-y-6 transition duration-500 ease-in-out"
      onSubmit={handleOTP}
    >
      <h2 className="text-xl text-zinc-100">Please enter your OTP </h2>
      <OTPinput value={otp} setValue={setOTP} />
      <p className="text-sm text-zinc-200 font-sans">
        OTP has been sent to your email. Please check your email!
      </p>
      <button
        type="submit"
        className="text-zinc-100 hover:bg-purple-700 rounded-md w-full bg-purple-600 py-3 px-6 text-center mt-2"
      >
        Submit OTP
      </button>
      <button className="text-base text-zinc-300 tracking-wide">
        <span className="text-purple-600">Resent OTP?</span> check your mail!
      </button>
    </form>
  );
}
