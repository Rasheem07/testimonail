"use client";
import React, { useState } from "react";
import {
  ArrowDown,
  ChevronDown,
  ChevronRight,
  Divide,
  HelpCircle,
  HomeIcon,
  MessageSquare,
  Search,
} from "lucide-react";
import Image from "next/image";
import Home from "./chatbot/home";
import Messages from "./chatbot/messages";
import Help from "./chatbot/help";
import Ask from "./chatbot/Ask";

interface ChatbotProps {
  chatbot: React.ComponentState;
  setchatbot: React.Dispatch<React.SetStateAction<React.ComponentState>>;
}

export const Chatbot: React.FC<ChatbotProps> = ({ chatbot, setchatbot }) => {
  const openPopup = () => {
    setchatbot(!chatbot);
  };

  const [page, setpage] = useState("home");

  enum pageTypes {
    home = "home",
    messages = "messages",
    help = "help",
  }

  const navigate = (page: pageTypes) => {
    setpage(page);
  };

  return (
    <div
      className={`fixed ${
        chatbot ? "inset-y-6" : "-bottom-11"
      } right-5 z-[999]`}
    >
      <div className="space-y-4 h-full pb-14">
        <div
          className={`chatbot h-full ${
            chatbot ? "" : "hidden"
          } ease-in-out duration-[1s] transition animate-[pulse 2s ease] min-w-[80vw] md:max-w-[30vw] md:min-w-[30vw] bg-white rounded-xl shadow-xl relative mr-4`}
        >
          {page === "home" ? (
            <Home setpage={setpage} />
          ) : page === "messages" ? (
            <Messages setpage={setpage}/>
          ) : page === "help" ? (
            <Help />
          ) : page === "ask" ? (
            <Ask setpage={setpage}/>
          ) : null}

          {page != "ask" && (
            <div className=" flex justify-between absolute bottom-0 px-14 inset-x-0 py-6 bg-white shadow-lg border-t border-zinc-200 rounded-br-none rounded-bl-md min-h-[18%] cursor-pointer transition-all">
              <div
                onClick={() => navigate(pageTypes.home)}
                className={`space-y-1 text-base font-medium ${
                  page === "home" ? "text-purple-600" : ""
                } flex flex-col items-center`}
              >
                <HomeIcon
                  className={`h-6 w-6 ${
                    page === "home"
                      ? "text-purple-600 fill-purple-600"
                      : "text-gray-800"
                  }`}
                />
                Home
              </div>
              <div
                onClick={() => navigate(pageTypes.messages)}
                className={`space-y-1 text-base font-medium ${
                  page === "messages" ? "text-purple-600" : ""
                }  flex flex-col items-center`}
              >
                <MessageSquare
                  className={`h-6 w-6 ${
                    page === "messages"
                      ? "text-purple-600 fill-purple-600"
                      : "text-gray-800"
                  }`}
                />
                Messages
              </div>
              <div
                onClick={() => navigate(pageTypes.help)}
                className={`space-y-1 text-base font-medium ${
                  page === "help" ? "text-purple-600" : ""
                }  flex flex-col items-center`}
              >
                <HelpCircle
                  className={`h-6 w-6 ${
                    page === "help"
                      ? "text-white fill-purple-600"
                      : "text-gray-800"
                  }`}
                />
                Help
              </div>
            </div>
          )}
        </div>
        <div className="flex w-full justify-end">
          <span
            onClick={openPopup}
            className=" transition flex items-center justify-center bg-purple-600 rounded-full shadow-md p-3"
          >
            {!chatbot ? (
              <MessageSquare className="h-7 w-7 text-white fill-white shadow-inner focus:scale-75 transition duration-[2.5s] ease-in" />
            ) : (
              <ChevronDown className="h-7 w-7 text-white fill-white shadow-inner focus:scale-75 transition duration-[2.5s] ease-out" />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};
