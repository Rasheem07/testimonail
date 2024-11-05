import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function ThankYouPage() {
  return (
    <>
    <div className=" border min-h-64 border-gray-300 rounded-lg shadow-inner relative px-6 py-10 flex flex-col gap-4 text-center">
      <span className="rounded-full bg-emerald-200 text-green-700 text-sm px-4 py-1 -top-2.5 left-10 absolute">
        Live preview - Thank you Page
      </span>
      <Image src='/gifs/thankyou.gif' alt="" height={150} width={250} className="w-full rounded-md"/>
      <h1 className="text-4xl text-gray-700 font-bold">Thank you!</h1>
      <p className="text-zinc-500 text-base ">Thank you so much for your shoutout! It means a ton for us! 🙏</p>
    </div>
    <button className="border border-gray-300 rounded-md shadow-inner text-gray-800 flex items-center gap-1.5 py-1.5 px-4 my-2 "><ArrowLeft className="text-gray-800 h-5 w-5" /> Go back</button>
    </>
  );
}
