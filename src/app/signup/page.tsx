"use client";
import { getCookies } from "@/helpers/getCookies";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import Link from "next/link";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

interface Errortype{
  type: string;
  error: string;
}

export default function Page() {
  const {toast} = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({ type: "", error: "" });
  const [message, setmessage] = useState("");

  useEffect(() => {
    if (errors && errors.error) {
      toast({
        variant: "destructive",
        description: errors.error
      });
    }else if(message){
      toast({
        variant: "default",
        description: message
      });
    }
  }, [errors, toast, message]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleRegister = async () => {
    const cookies = getCookies();
    console.log(cookies); // Add this line
    try {
      const response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "xsrf-token": cookies._csrf,
        },
        credentials: 'include',
        mode: "cors",
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      console.log('Server Response:', data); // Add this line
  
      if (!response.ok) {
        setErrors({ type: data.type, error: data.error });
        return;
      }
  
      setmessage(data.message);
      setFormData({
        name: "",
        email: "",
        password: "",
      });
      setErrors({ type: "", error: "" });
    } catch (err: Errortype | any) {
      console.error("Network or server error:", err); // Log the error
      setErrors({ type: err.type, error: err as string});
    }
  };
  
  return (
    <div className="py-24 w-full px-5">
      <div className="max-w-xl space-y-8 mx-auto">
        <div className="space-y-1 text-center">
          <h1 className="text-4xl leading-[1.1] font-bold text-white">
            Sign up for free 🤗
          </h1>
          <p className="md:text-xl text-lg font-sans text-zinc-400">
            You will get 2 video and 10 text testimonial credits for FREE!
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault(); // Prevents the default form submission
            handleRegister(); // Calls your custom register function
          }}
          className="bg-gray-800 rounded shadow-md px-11 py-8 space-y-6 max-w-md mx-auto"
        >
          <p className="flex items-start text-base text-zinc-300 font-sans">
            <input required type="checkbox" className="h-4 w-4 mt-1 mr-2" />{" "}
            {"  "}I agree to the Testimonial Terms of Service and I&apos;m aware
            my personal data is processed in accordance with our Privacy Policy.
            Please read it carefully.
          </p>

          <div className="w-full">
            <button className="py-3 px-6 gap-4 flex flex-1 bg-zinc-50 hover:bg-zinc-100 rounded-sm border border-zinc-300 w-full divide-x divide-gray-800">
              <Image
                src="/icons/google.png"
                alt=""
                height={25}
                width={25}
                className="object-contain"
              />
              <div className="flex items-center justify-center flex-1 w-full">
                <p className=" text-base font-medium text-gray-800">
                  Sign up with Google
                </p>
              </div>
            </button>
          </div>

          <div className="flex items-center w-full">
            <div className="border-t border-zinc-500 border-dotted flex-grow mr-3" />
            <span className="text-lg font-medium tracking-normal text-zinc-400">
              OR Register with your email
            </span>
            <div className="border-t border-zinc-500 border-dotted flex-grow ml-3" />
          </div>

          <div className="w-full flex flex-col gap-1.5">
            <label
              htmlFor="first_name"
              className="text-sm font-medium text-zinc-300"
            >
              First name <span className="text-red-800">*</span>
            </label>
            <input
              onChange={handleChange}
              value={formData.name}
              name="name"
              required
              type="text"
              id="first_name"
              className="rounded-sm shadow-md border border-zinc-300 text-gray-800 px-4 py-2 placeholder:text-zinc-500 outline-none"
              placeholder="Enter your first name:"
            />
          </div>

          <div className="w-full flex flex-col gap-1.5">
            <label
              htmlFor="first_name"
              className="text-sm font-medium text-zinc-300"
            >
              Email <span className="text-red-800">*</span>
            </label>
            <input
              onChange={handleChange}
              value={formData.email}
              name="email"
              required
              type="email"
              id="first_name"
              className="rounded-sm shadow-md border border-zinc-300 text-gray-800 px-4 py-2 placeholder:text-zinc-500 outline-none"
              placeholder="Enter your eamil:"
            />
          </div>

          <div className="w-full flex flex-col gap-1.5">
            <label
              htmlFor="first_name"
              className="text-sm font-medium text-zinc-300"
            >
              Password <span className="text-red-800">*</span>
            </label>
            <input
              onChange={handleChange}
              value={formData.password}
              name="password"
              required
              type="password"
              id="first_name"
              className="rounded-sm shadow-md border border-zinc-300 text-gray-800 px-4 py-2 placeholder:text-zinc-500 outline-none"
              placeholder="Enter your password:"
            />
          </div>

          <button
            type="submit"
            className="text-zinc-100 hover:bg-purple-700 rounded-md w-full bg-purple-600 py-3 px-6 text-center mt-2"
          >
            Sign up
          </button>

          <p className="text-sm text-zinc-400 mx-auto text-center">
            You can also{" "}
            <span className="underline underline-offset-1">
              continue with SAML SSO
            </span>
          </p>

          <p className="text-sm text-zinc-400 mx-auto text-center">
            Already have an Account?{" "}
            <Link href="/login" className="font-medium text-purple-600">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
