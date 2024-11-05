"use client";
import { SearchIcon, Video } from "lucide-react";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type Props = {};

export default function TestimonialsHeader({}: Props) {
  const [isPopup, setIspopup] = useState(false);

  const HandlePopup = () => {
    setIspopup(!isPopup);
  };

  return (
    <div className="grid grid-cols-5 items-center gap-4 w-full">
      <div className="rounded-md col-span-3 border border-gray-700 shadow-md flex items-center gap-2.5 px-4 bg-gray-800 focus:border-pruple-600">
        <SearchIcon className="h-5 w-5 text-zinc-200 max-w-fit flex-0" />
        <input
          type="text"
          className="bg-transparent py-2 text-sm w-full text-zinc-100 border-none outline-none placeholder:text-gray-500"
          placeholder="Search testimonials by name, email or testimonial keywords"
        />
      </div>
      <Select>
        <SelectTrigger
          className="col-span-1 bg-gray-800 text-zinc-100 shadow-md"
          disabled
        >
          <SelectValue placeholder="Review tone" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
      <div className="relative inline-block text-left">
        <div>
          <button
            className="inline-flex justify-between w-full rounded-md border border-gray-700 shadow-md px-4 py-1.5 bg-gray-800 text-zinc-100 hover:bg-gray-700 focus:outline-none focus:ring focus:ring-offset-1 focus:ring-offset-gray-800 focus:ring-gray-600"
            type="button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={HandlePopup}
          >
            <span>Options</span>
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {isPopup && (
          <div className="absolute z-10 mt-2 w-full rounded-md bg-gray-800 shadow-lg">
            <div className="min-w-[160px] bg-gray-800 border border-gray-500 text-zinc-200 border-none outline-none shadow-2xl">
              {[
                "Add a video",
                "Another option",
                "Something else",
                "More options",
              ].map((option, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 px-4 py-2 hover:bg-gray-700 cursor-pointer transition duration-150"
                >
                  <Video className="h-4 w-4 text-zinc-200 hover:text-gray-800" />
                  <span className="text-zinc-200 hover:text-gray-300">
                    {option}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
