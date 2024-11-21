"use client";
import {
  BellElectric,
  ChevronDown,
  ChevronUp,
  Download,
  Edit,
  Import,
  Pencil,
  Power,
  SearchIcon,
  Tag,
  Text,
  Video,
} from "lucide-react";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useProductContext } from "@/contexts/productContext";
import { Addtestimonial } from "../addTestimonial";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import TextFormContextProvider from "@/contexts/textForm";
import { TestimonialProps } from "@/types/testimonials";
import VideoFormContextProvider from "@/contexts/videoFormContext";
import { AddVideotestimonial } from "../addVideoTestimonial";
import TagsDailog from "../tagsDailog";

interface Props {
  logo: string | StaticImport;
  space_name: string;
  dropwdown?: string;
  testimonials: TestimonialProps[];
}

export default function TestimonialsHeader({
  space_name,
  logo,
  testimonials,
}: Props) {
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
      <div className="relative text-left">
        <div>
          <button
            className="inline-flex justify-between w-full rounded-md border border-gray-700 shadow-md px-4 py-1.5 bg-gray-800 text-zinc-100 hover:bg-gray-700 focus:outline-none focus:ring transition focus:ring-offset-1 focus:ring-offset-gray-800 focus:ring-gray-600"
            type="button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={HandlePopup}
          >
            <span>Options</span>
            {isPopup ? <ChevronUp /> : <ChevronDown />}
          </button>
        </div>
        {isPopup && (
          <div className="absolute z-10 mt-2 w-auto right-0  border border-gray-700 rounded-md bg-zinc-800 shadow-2xl">
            <div className="min-w-[250px] bg-zinc-800  text-zinc-200 border-none outline-none shadow-2xl rounded-md">
              <TextFormContextProvider>
                <Addtestimonial
                  hiddenButton={true}
                  logo={logo}
                  space_name={space_name}
                />
              </TextFormContextProvider>
              <VideoFormContextProvider>
                <AddVideotestimonial
                  hiddenButton={true}
                  logo={logo}
                  space_name={space_name}
                />
              </VideoFormContextProvider>
              <div className="my-1 h-[1px] w-full bg-zinc-700" />
              <ExportButton data={testimonials} />
              <TagsDailog hiddenButton/>
              <div className="flex items-center gap-1.5 px-4 py-2 hover:bg-gray-700 cursor-pointer transition duration-150">
                <Edit className="h-4 w-4 text-zinc-200 hover:text-gray-800" />
                <span className="text-zinc-200 hover:text-gray-100">
                  Bulk editor
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const ExportButton = ({ data }: { data: TestimonialProps[] }) => {
  // Extract headers dynamically from the TestimonialProps type
  const headers = "name,date,ratings,content,video_url,space,type";

  // Function to convert array of objects to CSV format
  const convertArrayToCSV = (array: TestimonialProps[]) => {
    if (array.length === 0) return ""; // Handle empty data

    // Map each object to a row of CSV values
    const rows = array.map((item) => {
      return Object.values(item)
        .map((value) =>
          value === null || value === undefined ? "" : `"${value}"`
        ) // Handle null/undefined values and escaping quotes
        .join(",");
    });

    // Join headers and rows into a single CSV string
    return [headers, ...rows].join("\n");
  };

  // Function to trigger the download
  const handleDownload = () => {
    // Convert data to CSV format
    const csvData = convertArrayToCSV(data);

    // Create a Blob from the CSV data
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });

    // Create a temporary download link and trigger the download
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "testimonials.csv"; // Customize the file name if needed
    link.click(); // Trigger the click to download
  };

  return (
    <div
      className="flex items-center gap-1.5 px-4 py-2 hover:bg-gray-700 cursor-pointer transition duration-150"
      onClick={handleDownload}
    >
      <Download className="h-4 w-4 text-zinc-200 hover:text-gray-800" />
      <span className="text-zinc-200 hover:text-gray-100">Export to CSV</span>
    </div>
  );
};
