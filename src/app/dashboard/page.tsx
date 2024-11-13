"use client";
import { fetchallSpaceData } from "@/actions/fetchAllSpaceData";
import OverviewCard from "@/components/cards/overview";
import Input from "@/components/ui/CustomInput";
import LoadingSpinner from "@/components/ui/loader";
import { useLoginStatus } from "@/hooks/useLoginStatus";
import {
  Briefcase,
  MoreHorizontalIcon,
  Plus,
  Search,
  Smile,
  StarsIcon,
  Video,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

type Props = {};

export default function Page({}: Props) {
  const [isPopup, setIsPopup] = useState(false);

  const handlePopup = () => {
    setIsPopup(!isPopup);
  };

  const { data: spaces, isLoading, error } = useQuery('spaceData', fetchallSpaceData, {
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 30 * 60 * 1000, // 30 minutes
    refetchOnWindowFocus: false, // Disable refetch on window focus
  });

  const router = useRouter();

  const status = useLoginStatus();
   useEffect(() => {
    if(!status){
      router.push('/login')
    }
   }, [router, status]);

  return (
    <main className="mx-auto w-full max-w-screen-xl px-5 md:px-20 md:py-20 space-y-12 md:space-y-20 overflow-x-hidden">
      <div className="flex flex-col lg:flex-row md:items-center lg:gap-x-8 gap-y-8 w-full border-b py-12 border-gray-600">
        <div className="flex flex-1 flex-col gap-4 order-1 lg:order-none">
          <span className="px-2.5 py-1 rounded-full shadow-inner bg-green-100 text-green-800 font-medium text-sm max-w-fit">
            8 mins demo
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Here&apos;s a quick demo for you 👉
          </h1>
          <p className="text-zinc-400 font-sans text-base md:text-lg">
            You will find everything you need to get started to collect
            testimonials and build a wall of love
          </p>
          <button className="max-w-fit rounded-md shadow-lg py-2 px-4 bg-gray-600 hover:bg-gray-500 hover:text-zinc-300 transition text-zinc-100">
            Dismiss
          </button>
        </div>
        <iframe
          className="mx-auto rounded-xl w-[400px] lg:w-[532px] h-[302px]"
          frameBorder="0"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Introducing Testimonial.to - Product Demo"
          width="640"
          height="320"
          src="https://www.youtube.com/embed/a-qT9pbOHkg?enablejsapi=1&amp;origin=https%3A%2F%2Ftestimonial.to&amp;widgetid=1"
          id="widget2"
        ></iframe>
      </div>

      <div className="">
        <h1 className="text-3xl md:text-4xl font-bold text-white">Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 grid-flow-row gap-x-8 pt-6">
          <OverviewCard
            icon={<Video className="h-8 w-8 text-zinc-400" />}
            overview="Videos"
            current={0}
          />
          <OverviewCard
            icon={<Smile className="h-8 w-8 text-zinc-400" />}
            overview="Videos credits"
            current={2}
          />
          <OverviewCard
            icon={<Briefcase className="h-8 w-8 text-zinc-400" />}
            overview="Plan"
            current="Free plan"
          />
        </div>
      </div>

      <div className="py-12">
        <div className="flex w-full justify-between">
          <h1 className="text-4xl font-bold text-white">Spaces</h1>
          <button
            onClick={handlePopup}
            className="relative px-4 py-1 rounded-sm shadow-md font-medium text-zinc-100 bg-purple-600"
          >
            + Create a new space
            <ul
              className={`flex-col gap-1 p-1 bg-[rgb(37,40,44)] flex-1 min-w-64 text-sm rounded-lg shadow-inner border border-gray-700 absolute top-full -left-1/4 mt-5 ${
                isPopup ? "flex" : "hidden"
              }`}
            >
              <Link href='/dashboard/newspace'
                className="py-2.5 px-4 hover:bg-[rgb(21,23,25)] transition-colors cursor-pointer rounded-md flex items-center gap-1.5"
              >
                <Plus className="relative h-5 w-5 text-zinc-200" />
                Create from scratch
              </Link>
              <li
                value="AI"
                className="py-2.5 px-4 hover:bg-[rgb(21,23,25)] transition-colors cursor-pointer rounded-md flex items-center gap-1.5"
              >
                <StarsIcon className="h-5 w-5 text-orange-400" /> AI assistance
              </li>
            </ul>
          </button>
        </div>

        {isLoading ? (
          <LoadingSpinner />
        ) : spaces?.data?.length > 0 ? (
          <div className="py-6 space-y-6 w-full">
            <div className="w-full shadow-md border border-gray-700  focus-within:border-purple-600  bg-gray-800 text-base rounded-md flex flex-1 items-center px-4">
              <Search className="h-5 w-5 text-zinc-100" />
              <input
                type="text"
                placeholder="Search testimonials by name, email or keywords"
                className="w-full py-2 px-4 placeholder:text-zinc-400 bg-transparent outline-0 text-zinc-100"
              />
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-flow-row gap-4">
              {spaces?.data?.map((space: any) => (
                <Link 
                  href={`/products/${space.space_name}`}
                  prefetch={false}
                  aria-label={space?.space_name}
                  className="p-8 hover:bg-zinc-800 transition-colors hover:border-gray-400 bg-gray-800 rounded-lg space-y-8 border-gray-700 border"
                  key={space?.space_id}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5 max-w-[calc(100%-32px)]">
                      <Image
                        src={space.logo}
                        alt=""
                        width={42}
                        height={42}
                        className="rounded-[9999px]"
                      />
                      <h2 className="text-base font-medium text-zinc-100 truncate">
                        {space.space_name}
                      </h2>
                    </div>
                    <MoreHorizontalIcon className="min-h-8 min-w-8 text-zinc-200 hover:bg-zinc-700 rounded-md p-1 hover:shadow-inner transition-colors" />
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-base font-medium text-zinc-300">Videos: {space?.video_testimonials?.length}</p>
                    <p className="text-base font-medium text-zinc-300">Text: {space?.text_testimonials?.length}</p>
                  </div>
                </Link> // Assuming each space has an id and name
              ))}
            </div>
          </div>
        ) : (
          <div className="overflow-hidden mx-auto">
            <Image
              height={192}
              width={192}
              loading="lazy"
              className="w-48 h-48 my-5 mx-auto rounded-lg"
              src="https://testimonial.to/static/media/no-message.18de8749.svg"
              alt="No spaces"
            />
            <p className="max-w-xl mt-5 mx-auto text-center text-lg leading-7 text-gray-400">
              No space yet, add a new one?
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
