import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="py-24 w-full px-5">
      <div className="max-w-xl space-y-8 mx-auto">
        <div className="space-y-1 text-center">
          <h1 className="text-4xl leading-[1.1] font-bold text-white">
            welcome back! 👋
          </h1>
        </div>

        <form className="bg-gray-800 rounded shadow-md px-11 py-8 space-y-6 max-w-md mx-auto">

          <div className="w-full">
            <button className="py-3 px-6 gap-4 flex flex-1 bg-zinc-50 hover:bg-zinc-100 rounded-sm border border-zinc-300 w-full divide-x divide-gray-800">
               <Image src='/icons/google.png' alt="" height={25} width={25} className="object-contain" />
               <div className="flex items-center justify-center flex-1 w-full">
                 <p className=" text-base font-medium text-gray-800">Sign in with Google</p>
               </div>
            </button>
          </div>

          <div className="flex items-center w-full">
            <div className="border-t border-zinc-500 border-dotted flex-grow mr-3" />
             <span className="text-lg font-medium tracking-normal text-zinc-400">OR sign in with your email</span>
            <div className="border-t border-zinc-500 border-dotted flex-grow ml-3" />
          </div>

          <div className="w-full flex flex-col gap-1.5">
            <label htmlFor="first_name" className="text-sm font-medium text-zinc-300">
              Email <span className="text-red-800">*</span>
            </label>
            <input required type="email" id="first_name" className="rounded-sm shadow-md border border-zinc-300 text-gray-800 px-4 py-2 placeholder:text-zinc-500 outline-none" placeholder="Enter your eamil:" />
          </div>

          <div className="w-full flex flex-col gap-1.5">
            <label htmlFor="first_name" className="text-sm font-medium text-zinc-300">
              Password <span className="text-red-800">*</span>
            </label>
            <input required type="password" id="first_name" className="rounded-sm shadow-md border border-zinc-300 text-gray-800 px-4 py-2 placeholder:text-zinc-500 outline-none" placeholder="Enter your password:" />
          </div>

          <div className="text-purple-600 text-base font-medium mt-2">Forgot Password?</div>

          <button className="text-zinc-100 hover:bg-purple-700 rounded-md w-full bg-purple-600 py-3 px-6 text-center mt-2">
            Sign In
          </button>

          <p className="text-sm text-zinc-400 mx-auto text-center">
            You can also <span className="underline underline-offset-1">continue with SAML SSO</span>
          </p>

          <p className="text-sm text-zinc-400 mx-auto text-center">
            Do not have an account? <Link href='/signup' className="font-medium text-purple-600">Sign up</Link>
          </p>

        </form>
      </div>
    </div>
  );
}
