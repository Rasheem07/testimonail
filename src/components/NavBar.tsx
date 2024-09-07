"use client";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  Building,
  ChevronDown,
  Menu,
  ShoppingBag,
  ThumbsUp,
  Trophy,
  User,
  X,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function NavBar() {
  const [isPopup, setIsPopup] = useState<boolean>(false);
  const [IsSideBar, setIsSideBar] = useState(false);
  const handlePopup = () => {
    setIsPopup(!isPopup);
  };

  const handleSideMenu = () => {
    setIsSideBar(!IsSideBar);
  };

  useEffect(() => {
    const overlay = document.body.getElementsByClassName("overlay")[0];
    if(IsSideBar){
      document.body.style.overflow = "hidden"
      overlay.classList.remove("hidden");
    }else{
      document.body.style.overflow = "auto"
      overlay.classList.add("hidden");
    }
  }, [ ,IsSideBar])
  return (
    <div className="px-2.5 md:px-12  w-full mx-auto flex justify-between flex-1 items-center py-6 relative">
      <Link href='/' className="text-white font-semibold text-xl flex items-center gap-1 ">
        <span className="p-2 rounded-full bg-purple-600">
          <ThumbsUp className="h-4 w-4 text-zinc-200 font-bold fill-zinc-200" />
        </span>
        Testimonial.io
      </Link>

      <ul className="hidden md:flex items-center gap-8 list-none">
        <li className="text-base text-zinc-100 hover:text-gray-300 font-semibold capitalize relative">
          <button
            onClick={handlePopup}
            className="flex items-center gap-0.5 justify-center h-full px-2 border-none outline-none"
          >
            Customers <ChevronDown className="text-zinc-200 h-5 w-5" />
          </button>
          <ul
            className={`flex-col gap-4 p-2.5 bg-[rgb(37,40,44)] flex-1 min-w-64 text-sm rounded-lg shadow-inner border border-gray-700 absolute top-full -left-1/2 mt-5 ${
              isPopup ? "flex" : "hidden"
            }`}
          >
            <li
              value="Agencies"
              className="py-4 px-6 hover:bg-[rgb(21,23,25)] transition-colors cursor-pointer rounded-md flex items-center gap-1.5"
            >
              <User className="relative h-5 w-5 text-zinc-200" />
              Agencies
            </li>
            <li
              value="E commerce and websites"
              className="py-4 px-6 hover:bg-[rgb(21,23,25)] transition-colors cursor-pointer rounded-md flex items-center gap-1.5"
            >
              <ShoppingBag className="h-5 w-5 text-zinc-200" />E commerce &
              website
            </li>
            <li
              value="Course creators"
              className="py-4 px-6 hover:bg-[rgb(21,23,25)] transition-colors cursor-pointer rounded-md flex items-center gap-1.5"
            >
              <BookOpen className="h-5 w-5 text-zinc-200" />
              Course creators
            </li>
            <li
              value="B2B Companies"
              className="py-4 px-6 hover:bg-[rgb(21,23,25)] transition-colors cursor-pointer rounded-md flex items-center gap-1.5"
            >
              <Building className="text-zinc-200 w-5 h-5" />
              B2B companies
            </li>
          </ul>
        </li>

        <li className="text-base font-medium text-zinc-100 capitalize hover:text-gray-300 cursor-pointer">
          Features
        </li>
        <li className="text-base font-medium text-zinc-100 capitalize hover:text-gray-300 cursor-pointer">
          Integrations
        </li>
        <li className="text-base font-medium text-zinc-100 capitalize hover:text-gray-300 cursor-pointer">
          Pricing
        </li>
      </ul>
      <div className="hidden md:flex items-center gap-8">
        <Link onClick={handleSideMenu} href='/login' className="bg-transparent h-full font-medium text-base font-sans text-zinc-100 hover:text-gray-300">
          Sign in
        </Link>
        <Link onClick={handleSideMenu}  href='/signup' className="bg-purple-600 rounded-sm shadow-md h-full font-medium text-base font-sans text-zinc-100 hover:bg-purple-700 hover:blur-[0.1px] py-2 px-4">
          Sign up
        </Link>
      </div>
      <button onClick={handleSideMenu} className="transition duration-1000 ease md:hidden z-50">
        {!IsSideBar ? (
          <Menu className="h-12 w-12 text-zinc-200 " />
        ) : (
          <X className="h-12 w-12 text-zinc-200" />
        )}
      </button>
      {IsSideBar && (
        <div className="absolute shadow-md inset-x-0 top-full bg-gray-800 m z-10 py-6 pr-4 pl-8 space-y-8">
          <ul className="md:hidden flex flex-col items-start gap-6 list-none">
            <li className="text-base text-zinc-100 hover:text-gray-300 font-semibold capitalize relative">
              <button
                onClick={handlePopup}
                className="flex items-center gap-0.5 justify-center h-full border-none outline-none"
              >
                Customers <ChevronDown className="text-zinc-200 h-5 w-5" />
              </button>
              <ul
                className={`flex-col gap-4 p-2.5 bg-[rgb(37,40,44)] flex-1 min-w-64 text-sm rounded-lg shadow-inner border border-gray-700 absolute top-full mt-5 ${
                  isPopup ? "flex" : "hidden"
                }`}
              >
                <li
                  value="Agencies"
                  className="py-4 px-6 hover:bg-[rgb(21,23,25)] transition-colors cursor-pointer rounded-md flex items-center gap-1.5"
                >
                  <User className="relative h-5 w-5 text-zinc-200" />
                  Agencies
                </li>
                <li
                  value="E commerce and websites"
                  className="py-4 px-6 hover:bg-[rgb(21,23,25)] transition-colors cursor-pointer rounded-md flex items-center gap-1.5"
                >
                  <ShoppingBag className="h-5 w-5 text-zinc-200" />E commerce &
                  website
                </li>
                <li
                  value="Course creators"
                  className="py-4 px-6 hover:bg-[rgb(21,23,25)] transition-colors cursor-pointer rounded-md flex items-center gap-1.5"
                >
                  <BookOpen className="h-5 w-5 text-zinc-200" />
                  Course creators
                </li>
                <li
                  value="B2B Companies"
                  className="py-4 px-6 hover:bg-[rgb(21,23,25)] transition-colors cursor-pointer rounded-md flex items-center gap-1.5"
                >
                  <Building className="text-zinc-200 w-5 h-5" />
                  B2B companies
                </li>
              </ul>
            </li>

            <li className="tracking-wide text-base font-medium text-zinc-100 capitalize hover:text-gray-300 cursor-pointer">
              Features
            </li>
            <li className="text-base font-medium text-zinc-100 capitalize hover:text-gray-300 cursor-pointer">
              Integrations
            </li>
            <li className="text-base font-medium text-zinc-100 capitalize hover:text-gray-300 cursor-pointer">
              Pricing
            </li>
          </ul>
          <div className="flex items-center gap-8">
            <Link onClick={handleSideMenu} href='/login' className="ring-1 ring-purple-600 rounded-sm shadow-md h-full font-medium text-base font-sans text-zinc-100 hover:bg-purple-700 hover:blur-[0.1px] py-2 px-4">
              Sign in
            </Link>
            <Link onClick={handleSideMenu} href='/signup' className="bg-purple-600 rounded-sm shadow-md h-full font-medium text-base font-sans text-zinc-100 hover:bg-purple-700 hover:blur-[0.1px] py-2 px-4">
              Sign up
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
