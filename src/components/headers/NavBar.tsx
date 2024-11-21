"use client";
import { cn } from "@/lib/utils";
import {
  Bell,
  BellOff,
  BookOpen,
  Building,
  ChevronDown,
  Dot,
  Ghost,
  Menu,
  ShoppingBag,
  ThumbsUp,
  Trophy,
  User,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import MaxWidthWrapper from "../wrappers/maxWidth";
import { useAuth } from "@/contexts/authContext";
import { Button } from "../ui/button";

interface notification {
  message: string;
  type: string;
  status: string;
  created_at: Date;
}

export default function NavBar() {
  const [isPopup, setIsPopup] = useState<boolean>(false);
  const [IsSideBar, setIsSideBar] = useState(false);
  const handlePopup = () => {
    setIsPopup(!isPopup);
  };
  const [isClient, setIsClient] = useState(false);

  const path = usePathname();

  const handleSideMenu = () => {
    setIsSideBar(!IsSideBar);
  };
  // Ensure that this code only runs on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  const [messages, setmessages] = useState<notification[]>([]);

  useEffect(() => {
    const getAllNotifications = async () => {
      const notifications = await fetch(
        "http://localhost:5000/api/notifications",
        {
          method: "GET",
          credentials: "include",
        }
      );
      const json = await notifications.json();
      setmessages(json);
    };

    getAllNotifications();
  }, []);

  useEffect(() => {
    const socket = new WebSocket("http://localhost:8080");

    socket.onopen = () => {
      console.log("WebSocket connection established");
    };

    socket.onmessage = (event) => {
      console.log("Received message:", event.data);
      setmessages((prev) => [...prev, JSON.parse(event.data)]);
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed");
    };

    socket.onerror = (error) => {
      console.error("WebSocket Error:", error);
    };

    return () => {
      socket.close();
    };
  }, []);

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  useEffect(() => {
    let overlay = document.body.getElementsByClassName("overlay")[0];
    if (IsSideBar) {
      document.body.style.overflow = "hidden";
      overlay &&
        (overlay as HTMLDivElement).classList &&
        (overlay as HTMLDivElement).classList.remove("hidden");
    } else {
      document.body.style.overflow = "auto";
      overlay &&
        (overlay as HTMLDivElement).classList &&
        (overlay as HTMLDivElement).classList.add("hidden");
    }
  }, [IsSideBar]);

  const { LoginStatus } = useAuth();
  return (
    <>
      <div className="z-10 overlay bg-gray-800 opacity-75 fixed inset-x-0 inset-y-0 hidden blur-md  transition duration-200 ease-in" />
      <MaxWidthWrapper
        className={`${
          path == "/dashboard/newspace" ? "hidden" : "flex"
        } justify-between flex-1 items-center py-6 relative`}
      >
        <Link
          href="/"
          className="text-white font-semibold text-xl flex items-center gap-1 "
        >
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
        {isClient && !LoginStatus ? (
          <AuthButtons />
        ) : (
          <div className="flex items-center gap-5">
            <NotificationBar notifications={messages} />
            <div className="rounded-full h-10 w-10 shadow-md bg-emerald-500 text-zinc-100 font-extrabold flex items-center justify-center flex-0">
              R
            </div>
          </div>
        )}

        <button
          onClick={handleSideMenu}
          className="transition duration-1000 ease md:hidden z-50"
        >
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
                    <ShoppingBag className="h-5 w-5 text-zinc-200" />E commerce
                    & website
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
            {isClient && !LoginStatus ? <AuthButtons /> : null}
          </div>
        )}
      </MaxWidthWrapper>
    </>
  );
}

const AuthButtons = () => {
  return (
    <div className="hidden md:flex items-center gap-8">
      <Link
        href="/login"
        className="bg-transparent h-full font-medium text-base font-sans text-zinc-100 hover:text-gray-300"
      >
        Sign in
      </Link>
      <Link
        href="/signup"
        className="bg-purple-600 rounded-sm shadow-md h-full font-medium text-base font-sans text-zinc-100 hover:bg-purple-700 hover:blur-[0.1px] py-2 px-4"
      >
        Sign up
      </Link>
    </div>
  );
};

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Testimonial } from "@/types/testimonials";

const NotificationBar = ({
  notifications,
}: {
  notifications: notification[];
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Bell className="h-6 w-6 text-gray-300 hover:text-white transition duration-200" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[400px] mt-4 mr-4 bg-zinc-900 border border-zinc-700 rounded-lg shadow-md text-zinc-200">
        <DropdownMenuLabel className="text-lg font-semibold text-zinc-300">
          Notifications
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-zinc-700" />
        {notifications.length > 0 ? (
          notifications.map((message: any) => (
            <DropdownMenuItem
              key={Math.floor(Math.random() * 99999999)}
              className="hover:bg-zinc-800 p-2 group rounded-md  transition-colors ease-in-out duration-150"
            >
              <div className="flex items-center space-x-2">
                <Dot className="h-8 w-8 scale-150 text-emerald-500" />
                <div className="flex flex-col gap-1">
                  <span className="text-sm group-hover:text-gray-700">
                    {message?.message!}
                  </span>
                  <span className="text-xs text-zinc-300 group-hover:text-gray-500 float-right">
                    {message?.created_at!}
                  </span>
                </div>
              </div>
            </DropdownMenuItem>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center w-full my-4 text-zinc-400">
            <BellOff className="h-8 w-8 text-zinc-600" />
            <span className="text-sm mt-2">No notifications yet!</span>
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
