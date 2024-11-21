"use client";
import { fetchSpaceData } from "@/actions/fetchSpaceData";
import {
  getAllTestimonials,
  getAlltextTestimonials,
  getAllVideoTestimonials,
} from "@/actions/fetchTestimonials";
import { Addtestimonial } from "@/components/addTestimonial";
import { AddVideotestimonial } from "@/components/addVideoTestimonial";
import TestimonialVideoCard from "@/components/cards/testimonialVideoCard";
import TestimonialCard from "@/components/cards/TextCard";
import TestimonialTextCard from "@/components/cards/TextCard";
import TestimonialsHeader from "@/components/headers/testimonialsHeader";
import { Button } from "@/components/ui/button";
import LoadingSpinner from "@/components/ui/loader";
import MaxWidthWrapper from "@/components/wrappers/maxWidth";
import ProductContextProvider from "@/contexts/productContext";
import { queryClient } from "@/contexts/reactqueryProvider";
import TextFormContextProvider from "@/contexts/textForm";
import VideoFormContextProvider from "@/contexts/videoFormContext";
import { toast } from "@/hooks/use-toast";
import { TestimonialSpaceData } from "@/types/spacetype";
import { TestimonialProps } from "@/types/testimonials";
import {
  AlertOctagon,
  Archive,
  BarChart,
  ChevronRight,
  Code,
  Edit,
  ExternalLink,
  FormInput,
  Ghost,
  Globe,
  Group,
  Hand,
  HardDrive,
  HardDriveUpload,
  Heart,
  Import,
  Inbox,
  Lock,
  Mail,
  Pencil,
  PencilLine,
  Rotate3D,
  Send,
  SquareStack,
  Star,
  StarIcon,
  Tag,
  Text,
  ThumbsUp,
  Trash,
  User2,
  Video,
  VideoIcon,
  Videotape,
} from "lucide-react";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { SetStateAction, useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import useWebSocket from "../useSocket";

const TestimonialsComponent = dynamic(
  () => import("@/components/testimonials")
);

type tab = "all" | "video" | "text" | "liked" | "archived" | "spam";
export default function Page({ params }: any) {
  const { product_name }: any = React.use(params);

  const [nav, setnav] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const inboxtab = useRef<tab | "all">("all");
  useEffect(() => {
    if (typeof window != "undefined") {
      sessionStorage.setItem("testimonial-tab", "all");
    }
  }, []);

  // Use React Query to fetch space data and testimonials asynchronously
  const {
    data: space,
    error: spaceError,
    isLoading: spaceLoading,
  } = useQuery(["space", product_name], () => fetchSpaceData(product_name), {
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
  });

  const {
    data: testimonials,
    error: testimonialsError,
    isLoading: testimonialsLoading,
  } = useQuery(
    ["testimonials", product_name],
    () => getAllTestimonials(product_name),
    {
      staleTime: 10 * 60 * 1000,
      cacheTime: 15 * 60 * 1000,
      refetchIntervalInBackground: true,
      refetchInterval: 60 * 10000,
    }
  );

  const [tab, setTab] = useState<tab>(inboxtab.current || "all");

  const handleNav = (navparam: string) => {
    setnav(navparam);
    if (nav === navparam) setnav("");
  };

  useEffect(() => {
    if (errorMessage) {
      toast({
        title: errorMessage,
        description: "Please try again!",
        variant: "destructive",
      });
    }
  }, [errorMessage]);

  const getFilteredTestimonials = () => {
    if (!testimonials) return [];

    switch (tab) {
      case "video":
        return testimonials.filter(
          (testimonial: TestimonialProps) =>
            testimonial.type === "video" &&
            !testimonial.is_archived &&
            !testimonial.is_spam
        );
      case "text":
        return testimonials.filter(
          (testimonial: TestimonialProps) =>
            testimonial.type === "text" &&
            !testimonial.is_archived &&
            !testimonial.is_spam
        );
      case "liked":
        return testimonials.filter(
          (testimonial: TestimonialProps) =>
            testimonial.is_liked && !testimonial.is_archived
        );
      case "archived":
        return testimonials.filter(
          (testimonial: TestimonialProps) => testimonial.is_archived
        );
      case "spam":
        return testimonials.filter(
          (testimonial: TestimonialProps) => testimonial.is_spam
        );
      default:
        return testimonials.filter(
          (testimonial: TestimonialProps) =>
            !testimonial.is_archived && !testimonial.is_spam
        );
    }
  };

  const filteredTestimonials = getFilteredTestimonials();

  const handleTestimonialtabs = (newTab: tab) => {
    setTab(newTab);
    if (typeof window != "undefined") {
      sessionStorage.setItem("inbox-tab", newTab); // Store the current tab in session storage
    }
  };

  

  return (
    <ProductContextProvider>
      <div className="min-h-screen">
        {spaceLoading ? (
          <div className="transition flex flex-col items-center justify-center my-24 gap-4 h-full w-full ">
            <div className="w-12 h-12 border-2 border-blue-400 border-t-transparent border-solid rounded-full animate-spin" />
            <h1 className="text-3xl text-zinc-100 font-medium">
              Your space is being loaded!
            </h1>
            <p className="text-zinc-200 font-sans text-base">
              Please wait! It will ready in a second.
            </p>
          </div>
        ) : errorMessage != "" ? (
          <div className="transition flex flex-col items-center justify-center my-24 gap-4 h-full w-full ">
            <Ghost className="h-24 w-24 text-zinc-200" />
            <h1 className="text-2xl text-red-100 font-medium">
              Something went wrong while retreiving your space.
            </h1>
            <p className="text-zinc-200 font-sans text-base space-x-2">
              Please try again!{" "}
              <span className="text-purple-600 underline underline-offset-1">
                Or report the problem here!
              </span>
            </p>
          </div>
        ) : (
          <>
            <MaxWidthWrapper className="flex  md:flex-row flex-col justify-between items-center  border-y gap-y-5 md:gap-y-0 px-4 py-8 border-gray-800">
              <div className="flex items-center gap-x-4">
                <Image
                  src={space?.logo! && space?.logo}
                  alt=""
                  width={56}
                  height={56}
                  className="h-14 w-14 rounded-full shadow-inner border bg-slate-300"
                />
                <h2 className="text-3xl font-bold text-white">
                  {space?.space_name}
                </h2>
              </div>
              <div className="flex flex-col md:flex-row items-stretch md:gap-x-10 md:gap-y-0 gap-y-4 w-full md:w-fit">
                <div className="flex md:gap-x-10 justify-between w-full md:w-fit px-4 md:px-0">
                  <div className="flex items-start gap-2">
                    <VideoIcon className="h-5 w-5 text-zinc-200" />
                    <div className="flex flex-col gap-1-5 items-start">
                      <p className="text-sm font-meidum text-zinc-100">
                        Video credits
                      </p>
                      <span className="text-gray-400 font-bold text-sm">2</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Text className="h-5 w-5 text-zinc-200" />
                    <div className="flex flex-col items-start">
                      <p className="text-sm font-meidum text-zinc-100">
                        Text credits
                      </p>
                      <span className="text-gray-400 font-bold text-sm">
                        10
                      </span>
                    </div>
                  </div>
                </div>
                <button className="bg-zinc-100 flex items-center rounded-md shadow-md text-gray-800 py-1.5 px-3 text-sm md:text-base hover:bg-zinc-200 border-none max-w-fit md:max-w-none mx-auto">
                  <Pencil className="h-5 w-5 text-gray-700 pr-1.5" />
                  Edit space
                </button>
              </div>
            </MaxWidthWrapper>

            <MaxWidthWrapper className="py-8 grid grid-cols-12 grid-flow-row w-full h-full min-h-64">
              <div className="col-span-3 space-y-6 border-r border-gray-800">
                <div className="space-y-2 w-full">
                  <h4 className="text-lg font-semibold text-gray-300">Inbox</h4>
                  <ul className="space-y-1">
                    <button
                      onClick={() => handleTestimonialtabs("all")}
                      className={`flex items-center gap-4 py-1.5 px-2.5 hover:bg-gray-700 rounded-md text-base text-zinc-100 w-full ${
                        tab == "all" ? "bg-gray-800" : ""
                      }`}
                    >
                      <Inbox className="text-zinc-200 h-4 w-4" />
                      All
                    </button>
                    <button
                      onClick={() => handleTestimonialtabs("video")}
                      className={`flex items-center gap-4 py-1.5 px-2.5 hover:bg-gray-700 rounded-md text-base text-zinc-100 w-full ${
                        tab == "video" ? "bg-gray-800" : ""
                      }`}
                    >
                      <Video className="text-zinc-200 h-4 w-4" />
                      Video
                    </button>
                    <button
                      onClick={() => handleTestimonialtabs("text")}
                      className={`flex items-center gap-4 py-1.5 px-2.5 hover:bg-gray-700 rounded-md text-base text-zinc-100 w-full ${
                        tab == "text" ? "bg-gray-800" : ""
                      }`}
                    >
                      <Text className="text-zinc-200 h-4 w-4" />
                      Text
                    </button>
                    <li
                      onClick={() => handleTestimonialtabs("liked")}
                      className={`flex items-center gap-4 py-1.5 px-2.5 hover:bg-gray-700 rounded-md text-base text-zinc-100 w-full ${
                        tab == "liked" ? "bg-gray-800" : ""
                      }`}
                    >
                      <Heart className="text-zinc-200 h-4 w-4" />
                      Liked
                    </li>
                    <li
                      onClick={() => handleTestimonialtabs("archived")}
                      className={`flex items-center gap-4 py-1.5 px-2.5 hover:bg-gray-700 rounded-md text-base text-zinc-100 w-full ${
                        tab == "archived" ? "bg-gray-800" : ""
                      }`}
                    >
                      <Archive className="text-zinc-200 h-4 w-4" />
                      Archived
                    </li>
                    <li
                      onClick={() => handleTestimonialtabs("spam")}
                      className={`flex items-center gap-4 py-1.5 px-2.5 hover:bg-gray-700 rounded-md text-base text-zinc-100 w-full ${
                        tab == "spam" ? "bg-gray-800" : ""
                      }`}
                    >
                      <AlertOctagon className="text-zinc-200 h-4 w-4" />
                      Spam
                    </li>
                  </ul>
                </div>
                <div className="space-y-2 w-full">
                  <div
                    className="flex items-center justify-between flex-1 w-full group"
                    onClick={() => handleNav("Integrations")}
                  >
                    <h4 className="text-lg font-semibold text-gray-300 transition-colors group-hover:text-zinc-100 group-hover:font-bold">
                      Integrations
                    </h4>
                    <ChevronRight
                      className={`h-6 w-6 stroke-2 text-zinc-400 mr-4 group-hover:rotate-90 transform transition ${
                        nav === "Integrations" ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                  {nav === "Integrations" && (
                    <ul className="space-y-1.5 transition">
                      <li className="flex items-center gap-4 py-1.5 px-2.5 hover:bg-gray-800 rounded-md text-base text-zinc-100">
                        <Group className="text-zinc-200 h-4 w-4" />
                        Social media
                      </li>
                      <li className="flex items-center gap-4 py-1.5 px-2.5 hover:bg-gray-800 rounded-md text-base text-zinc-100">
                        <ExternalLink className="text-zinc-200 h-4 w-4" />
                        External videos
                      </li>
                      <li className="flex items-center gap-4 py-1.5 px-2.5 hover:bg-gray-800 rounded-md text-base text-zinc-100">
                        <ThumbsUp className="text-zinc-200 h-4 w-4" />
                        Other reviews
                      </li>
                      <li className="flex items-center gap-4 py-1.5 px-2.5 hover:bg-gray-800 rounded-md text-base text-zinc-100">
                        <SquareStack className="text-zinc-200 h-4 w-4" />
                        Custom cards
                        <Lock className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      </li>
                      <li className="flex items-center gap-4 py-1.5 px-2.5 hover:bg-gray-800 rounded-md text-base text-zinc-100">
                        <Mail className="text-zinc-200 h-4 w-4" />
                        Testimonial email assistant
                        <Lock className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      </li>
                      <li className="flex items-center gap-4 py-1.5 px-2.5 hover:bg-gray-800 rounded-md text-base text-zinc-100">
                        <Rotate3D className="text-zinc-200 h-4 w-4" />
                        Automation
                      </li>
                    </ul>
                  )}
                </div>
                <div className="space-y-2 w-full">
                  <div
                    className="flex items-center justify-between flex-1 w-full group"
                    onClick={() => handleNav("widgets")}
                  >
                    <h4 className="text-lg font-semibold text-gray-300 transition-colors group-hover:text-zinc-100 group-hover:font-bold">
                      Embeded widgets
                    </h4>
                    <ChevronRight
                      className={`h-6 w-6 stroke-2 text-zinc-400 mr-4 group-hover:rotate-90 ${
                        nav === "widgets" ? "rotate-90" : ""
                      } transform transition`}
                    />
                  </div>
                  {nav === "widgets" && (
                    <ul className="space-y-1.5 transition">
                      <li className="flex items-center gap-4 py-1.5 px-2.5 hover:bg-gray-800 rounded-md text-base text-zinc-100">
                        <Heart className="text-zinc-200 h-4 w-4" />
                        Wall of love
                      </li>
                      <li className="flex items-center gap-4 py-1.5 px-2.5 hover:bg-gray-800 rounded-md text-base text-zinc-100">
                        <Code className="text-zinc-200 h-4 w-4" />
                        Single testimonial
                      </li>
                      <li className="flex items-center gap-4 py-1.5 px-2.5 hover:bg-gray-800 rounded-md text-base text-zinc-100">
                        <Star className="text-zinc-200 h-4 w-4" />
                        Badge
                      </li>
                      <li className="flex items-center gap-4 py-1.5 px-2.5 hover:bg-gray-800 rounded-md text-base text-zinc-100">
                        <HardDriveUpload className="text-zinc-200 h-4 w-4" />
                        Collecting widgets
                      </li>
                    </ul>
                  )}
                </div>
                <div className="space-y-2 w-full">
                  <div
                    className="flex items-center justify-between flex-1 w-full group"
                    onClick={() => handleNav("pages")}
                  >
                    <h4 className="text-lg font-semibold text-gray-300 transition-colors group-hover:text-zinc-100 group-hover:font-bold">
                      Pages
                    </h4>
                    <ChevronRight
                      className={`h-6 w-6 stroke-2 text-zinc-400 mr-4 group-hover:rotate-90 ${
                        nav === "widgets" ? "rotate-90" : ""
                      } transform transition`}
                    />
                  </div>
                  {nav === "pages" && (
                    <ul className="space-y-1.5 transition">
                      <li className="flex items-center gap-4 py-1.5 px-2.5 hover:bg-gray-800 rounded-md text-base text-zinc-100">
                        <Send className="text-zinc-200 h-4 w-4" />
                        Request testimonials
                      </li>
                      <li className="flex items-center gap-4 py-1.5 px-2.5 hover:bg-gray-800 rounded-md text-base text-zinc-100">
                        <Heart className="text-zinc-200 h-4 w-4" />
                        Wall of love
                      </li>
                    </ul>
                  )}
                </div>
                <div className="space-y-2 w-full">
                  <div
                    className="flex items-center justify-between flex-1 w-full group"
                    onClick={() => handleNav("analytics")}
                  >
                    <h4 className="text-lg font-semibold text-gray-300 transition-colors group-hover:text-zinc-100 group-hover:font-bold">
                      Analytics
                    </h4>
                    <ChevronRight
                      className={`h-6 w-6 stroke-2 text-zinc-400 mr-4 group-hover:rotate-90 ${
                        nav === "widgets" ? "rotate-90" : ""
                      } transform transition`}
                    />
                  </div>
                  {nav === "analytics" && (
                    <ul className="space-y-1.5 transition">
                      <li className="flex items-center gap-4 py-1.5 px-2.5 hover:bg-gray-800 rounded-md text-base text-zinc-100">
                        <BarChart className="text-zinc-200 h-4 w-4" />
                        Metrics
                      </li>
                    </ul>
                  )}
                </div>
                <div className="space-y-2 w-full">
                  <div
                    className="flex items-center justify-between flex-1 w-full group"
                    onClick={() => handleNav("settings")}
                  >
                    <h4 className="text-lg font-semibold text-gray-300 transition-colors group-hover:text-zinc-100 group-hover:font-bold">
                      Space settings
                    </h4>
                    <ChevronRight
                      className={`h-6 w-6 stroke-2 text-zinc-400 mr-4 group-hover:rotate-90 ${
                        nav === "widgets" ? "rotate-90" : ""
                      } transform transition`}
                    />
                  </div>
                  {nav === "settings" && (
                    <ul className="space-y-1.5 transition">
                      <li className="flex items-center gap-4 py-1.5 px-2.5 hover:bg-gray-800 rounded-md text-base text-zinc-100">
                        <Edit className="text-zinc-200 h-4 w-4" />
                        Edit the space
                      </li>
                      <li className="flex items-center gap-4 py-1.5 px-2.5 hover:bg-gray-800 rounded-md text-base text-zinc-100 opacity-85">
                        <FormInput className="text-zinc-200 h-4 w-4" />
                        Manage forms
                        <Lock className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      </li>
                      <li className="flex items-center gap-4 py-1.5 px-2.5 hover:bg-gray-800 rounded-md text-base text-zinc-100 opacity-85">
                        <Tag className="text-zinc-200 h-4 w-4" />
                        Manage Tags
                      </li>
                      <li className="flex items-center gap-4 py-1.5 px-2.5 hover:bg-gray-800 rounded-md text-base text-zinc-100 opacity-85">
                        <Hand className="text-zinc-200 h-4 w-4" />
                        Customise wall of love
                      </li>
                      <li className="flex items-center gap-4 py-1.5 px-2.5 hover:bg-gray-800 rounded-md text-base text-zinc-100 opacity-85">
                        <User2 className="text-zinc-200 h-4 w-4" />
                        Invite people to this space
                        <Lock className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      </li>
                      <li className="flex items-center gap-4 py-1.5 px-2.5 hover:bg-gray-800 rounded-md text-base text-zinc-100 opacity-85">
                        <Globe className="text-zinc-200 h-4 w-4" />
                        Set up Custom domain
                        <Lock className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      </li>
                    </ul>
                  )}
                </div>
              </div>
              <div className="col-span-9">
                {testimonialsLoading ? (
                  <div className="flex flex-col gap-2.5 items-center justify-center w-full mt-24">
                    <LoadingSpinner />
                    <p className="text-zinc-300 text-base">
                      Please wait a moment...
                    </p>
                  </div>
                ) : filteredTestimonials && filteredTestimonials.length > 0 ? ( // Corrected the syntax here
                  <div className="space-y-4 mx-4">
                    <TestimonialsHeader
                      testimonials={filteredTestimonials}
                      space_name={space?.space_name!}
                      logo={space?.logo! && space?.logo!}
                    />
                    <TestimonialsComponent
                      space_name={space?.space_name!}
                      testimonials={filteredTestimonials}
                    />
                  </div>
                ) : !filteredTestimonials || filteredTestimonials.length < 1 ? (
                  <div className="flex flex-col items-center gap-4 mx-auto mt-16">
                    <HardDrive className="h-12 w-12 text-zinc-200" />

                    {tab == "all" ? (
                      <h4 className="text-xl text-zinc-100">
                        No testimonials yet{" "}
                      </h4>
                    ) : (
                      <h4 className="text-xl text-zinc-100">
                        No {tab} testimonials yet{" "}
                      </h4>
                    )}

                    {tab !== "liked" &&
                      tab !== "archived" &&
                      tab !== "spam" && (
                        <div className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 gap-x-0 items-center md:gap-x-4">
                          <VideoFormContextProvider>
                            <AddVideotestimonial
                              space_name={space?.space_name!}
                              logo={space?.logo! && space?.logo!}
                            />
                          </VideoFormContextProvider>
                          <div>
                            <TextFormContextProvider>
                              <Addtestimonial
                                space_name={space?.space_name!}
                                logo={space?.logo!}
                              />
                            </TextFormContextProvider>
                          </div>
                          <button
                            className="bg-purple-600 text-zinc-100 py-2 px-4 text-sm rounded-md shadow-md disabled:opacity-85 hover:opacity-70 cursor-not-allowed disabled:bg-gradient-to-b from-purple-500 to-purple-600 flex items-center gap-1.5"
                            disabled
                          >
                            <Import className="text-zinc-200 h-4 w-4" />
                            Bulk import
                            <Lock className="fill-yellow-500 text-yellow-500 h-4 w-4" />
                          </button>
                        </div>
                      )}
                  </div>
                ) : null}
              </div>
            </MaxWidthWrapper>
          </>
        )}
      </div>
    </ProductContextProvider>
  );
}
