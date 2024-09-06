import { MailQuestion, MessageSquare } from "lucide-react";
import React from "react";

type Props = {
  setpage: React.Dispatch<React.SetStateAction<React.ComponentState>>;
};

export default function Messages({ setpage }: Props) {

  const navigate = () => {
    setpage("ask");
  }
  return (
    <div className="h-full">
      <div className="flex items-center justify-center py-4 rounded-t-lg bg-purple-600 shadow-md">
        <h4 className="text-lg text-white font-bold">Messages</h4>
      </div>

      <div className="h-full gap-4 flex flex-col items-center mt-14">
        <MessageSquare className="h-12 w-12 text-gray-800" />
        <h3 className="text-lg font-bold text-gray-800 capitalize">
          no messages
        </h3>
        <p className="text-base text-zinc-500">
          Messages from team will be shown here
        </p>
        <button onClick={navigate} className="mt-2 gap-2 flex items-center rounded-md shadow-md bg-purple-600 py-2 px-5 text-white">
          Ask a question <MailQuestion className="h-4 w-4 text-white" />
        </button>
      </div>
    </div>
  );
}
