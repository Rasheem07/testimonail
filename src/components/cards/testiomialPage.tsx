import { Pencil, Videotape } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Testimonail_page() {
  return (
    <>
      <div className=" border min-h-64 border-gray-300 rounded-lg shadow-inner relative px-6 py-10 flex flex-col gap-8">
        <span className="rounded-full bg-emerald-200 text-green-700 text-sm px-4 py-1 -top-2.5 left-10 absolute">
          Live preview - Testimonial Page
        </span>
        <div className="flex flex-col items-center w-full gap-2.5">
          <Image src="/just-logo.svg" alt="" height={100} width={100} />
          <h1 className="text-[32px] font-bold text-gray-600 leading-tight">
            Header goes here...
          </h1>
          <p className="text-base text-zinc-500 leading-relaxed">
            Your custom message goes here...
          </p>
        </div>

        <div className="flex flex-col gap-y-2.5 items-start">
          <h4 className="text-xl font-semibold capitalize text-gray-600">
            Questions
          </h4>
          <div className="h-[3px] w-[20%] bg-purple-600 rounded-md mb-2" />
          <ul className="space-y-1.5 list-disc pl-5">
            <li className="text-base text-zinc-500 leading-snug">
              Who are you / What are you working on?
            </li>
            <li className="text-base text-zinc-500 leading-snug">
              How has our product helped you?
            </li>
            <li className="text-base text-zinc-500 leading-snug">
              What is the best thing about our product?
            </li>
          </ul>
        </div>

        <div className="space-y-2 mt-4 w-full">
          <button className="flex items-center justify-center gap-2 py-2 bg-purple-600 text-white text-base font-medium rounded-[6px] shadow-md text-center w-full">
            <Videotape className="h-5 w-5 text-white" />{" "}
            {/* Increased icon size */}
            Record a video
          </button>
          <button className="flex items-center justify-center gap-2 py-2 bg-gray-800 text-white text-base font-medium rounded-[6px] shadow-md text-center w-full">
            <Pencil className="h-5 w-5 text-white" />{" "}
            {/* Increased icon size */}
            Send in text
          </button>
        </div>
      </div>
      <p className="text-base font-medium text-gray-700 underline underline-offset-1 mt-4 px-2">
        👉 Upgrade to Premium or above to add your own video message
      </p>
    </>
  );
}
