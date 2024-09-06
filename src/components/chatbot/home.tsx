'use client'
import React, { useState } from "react";
import {
  ArrowDown,
  ChevronDown,
  ChevronRight,
  HelpCircle,
  HomeIcon,
  MessageSquare,
  Search,
} from "lucide-react";
import Image from "next/image";

interface props {
  setpage: React.Dispatch<React.SetStateAction<React.ComponentState>>;
}

export default function Home({setpage}: props) {
  const [ask, setask] = useState(false);

  const navigatetoask = () => {
    setpage("ask");
  }
  return (
    <div className="overflow-y-scroll max-h-[82%] p-5 bg-gradient-to-b from-purple-600 to-white from-70% rounded-t-lg">
      <div className="flex -space-x-2 py-4 px-6">
        <Image src="/dp1.png" alt="" height={40} width={40} />
        <Image
          src="/dp2.jpg"
          alt=""
          height={40}
          width={40}
          className="rounded-full"
        />
      </div>

      <div className="space-y-3 mt-20">
        <h1 className="px-2 text-4xl text-white font-bold">
          Hi there 👋
          <br />
          How can we help?
        </h1>

        <div className="mt-1 w-full py-4 px-6 group bg-white rounded-md shadow-md flex justify-between">
          <div onClick={navigatetoask} className="space-y-1">
            <h4 className="text-[15px] font-medium text-black group-hover:text-purple-700">
              Ask a question
            </h4>
            <span className="text-[13px] text-zinc-500">
              AI agent and team can help
            </span>
          </div>

          <div className="flex items-center -space-x-2">
            <Image
              src="/dp2.jpg"
              alt=""
              height={30}
              width={30}
              className="rounded-full object-contain"
            />
            <Image
              src="/dp3.png"
              alt=""
              height={35}
              width={35}
              className="z-10 object-contain"
            />
            <Image
              src="/dp4.png"
              alt=""
              height={30}
              width={30}
              className="-z-1 rounded-full object-contain"
            />
          </div>
        </div>

        <div className="w-full p-2.5 bg-white rounded-md shadow-md space-y-2">
          <div onClick={() => setpage("help")} className="rounded-[6px] shadow-inner flex w-full justify-between px-3 py-2 bg-[rgb(242,242,242)]">
            <h4 className="text-sm font-medium text-black hover:text-purple-700">
              Search for help
            </h4>
            <Search className="h-5 w-5 text-purple-600 hover:text-purple-700" />
          </div>

          <div className="px-1 space-y-2 pt-2">
            <div className="flex w-full justify-between px-2 hover:bg-purple-100 py-2 rounded-[6px]">
              <p className="text-[13px] font-medium text-gray-500 hover:text-purple-700">
                Embed a single-text testimonial
              </p>
              <ChevronRight className="h-5 w-5 text-purple-600 hover:text-purple-700" />
            </div>
            <div className="flex w-full justify-between px-2 hover:bg-purple-100 py-2 rounded-[6px]">
              <p className="text-[13px] font-medium text-gray-500 hover:text-purple-700">
                Add a custom domain
              </p>
              <ChevronRight className="h-5 w-5 text-purple-600 hover:text-purple-700" />
            </div>
            <div className="flex w-full justify-between px-2 hover:bg-purple-100 py-2 rounded-[6px]">
              <p className="text-[13px] font-medium text-gray-500 hover:text-purple-700">
                Embed a Wall of Love
              </p>
              <ChevronRight className="h-5 w-5 text-purple-600 hover:text-purple-700" />
            </div>

            <div className="flex w-full justify-between px-2 hover:bg-purple-100 py-2 rounded-[6px]">
              <p className="text-[13px] font-medium text-gray-500 hover:text-purple-700">
                Embed a single video
              </p>
              <ChevronRight className="h-5 w-5 text-purple-600 hover:text-purple-700" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}