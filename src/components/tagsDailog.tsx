"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tag } from "lucide-react";
import { Button } from "./ui/button";
import Input from "./ui/CustomInput";
import CustomSwitch from "./ui/Switch";

type Props = {
  hiddenButton?: boolean;
};

export default function TagsDailog({ hiddenButton }: Props) {
  const [createPage, setcreatePage] = useState(false);

  const handleTagcreatePage = () => {
    setcreatePage(true);
  };

  const handleSwitchChange = (checked: boolean) => {
    console.log("Switch is now", checked ? "ON" : "OFF");
  };

  let className =
    "flex text-sm items-center gap-1 max-w-fit text-zinc-200 hover:text-slate-300 transition-colors cursor-pointer hover:ring-[2px] rounded-md hover:bg-gray-800 ring-zinc-500 p-1.5 font-medium";

  return (
    <Dialog>
      <DialogTrigger className={`${hiddenButton? 'w-full' : ''}`}>
        {hiddenButton ? (
          <div className="w-full flex items-center gap-1.5 px-4 py-2 hover:bg-gray-700 cursor-pointer transition duration-150">
            <Tag className="h-4 w-4 text-zinc-200 hover:text-gray-800" />
            <span className="text-zinc-200 hover:text-gray-100">
              Manage tags
            </span>
          </div>
        ) : (
          <div className={className}>
            <Tag className="h-4 w-4 text-zinc-200 hover:text-gray-800" />
            <span className="text-zinc-200 hover:text-gray-100">
              Manage tags
            </span>
          </div>
        )}
      </DialogTrigger>
      <DialogContent>
        {createPage ? (
          <>
            <DialogHeader className="space-y-4">
              <DialogTitle>Manage tags</DialogTitle>
              <DialogDescription className="text-gray-700">
                You can create up to 5 tags
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center gap-2.5">
              <input className="py-2 px-4 rounded-md  outline-none focus:ring outline-2 focus:outline-none border-none outline-gray-600 focus:ring-purple-600 placeholder:text-gray-600 flex-1" />
              <Button size={"lg"} className="bg-purple-600 hover:bg-purple-700">
                Create
              </Button>
            </div>
            <div className="flex items-center gap-2.5 text-gray-700 font-medium mt-3">
              <CustomSwitch
                onChange={handleSwitchChange}
                initialChecked={false}
                className=""
              />
              Display tags on Wall of Love
            </div>
          </>
        ) : (
          <>
            <DialogHeader className="space-y-4">
              <DialogTitle>Apply tags to this testimonial</DialogTitle>
              <DialogDescription className="text-gray-700">
                You don&apos;t have any tags. Click the button below to create
                some 👇
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center flex-1 gap-2.5 w-full mt-4">
              <DialogClose className="flex-1 w-full h-full min-w-[50%] rounded-md hover:text-purple-600 text-gray-700 border border-gray-400 hover:border-purple-600">
                Close
              </DialogClose>
              <Button
                size={"lg"}
                className="bg-purple-600 w-full flex-1 text-slate-100"
                onClick={handleTagcreatePage}
              >
                Create tags
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
