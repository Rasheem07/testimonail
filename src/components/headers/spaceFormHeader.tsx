"use client";
import { ValueState } from "@/types/reactstate";
import { Filter, Heart, Mail, Settings } from "lucide-react";
import React, { useEffect, useState } from "react";
import Tooltip from "../ui/tooltip";

export default function SpaceFormHeader({ value, setValue }: ValueState) {
  const handleNavigate = (value: string) => {
    setValue(value);
  };

  useEffect(() => {
   if(typeof window !== "undefined")
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [value])
  const [tooltip, setTooltip] = useState({ visible: false, text: "" });

  const showTooltip = (text: string) => {
    setTooltip({
      visible: true,
      text,
    });
  };

  const hideTooltip = () => {
    setTooltip({ visible: false, text: "" });
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-1 w-full items-center divide-zinc-300 rounded-md  px-0 border border-gray-300 justify-between divide-x transition-transform duration-500 ease-in-out">
        <button
          aria-label="settings"
          onClick={() => handleNavigate("basic")}
          className={`flex items-center gap-1.5 text-sm ${
            value === "basic" ? "text-white bg-purple-600" : "text-gray-700"
          } py-2 flex-1 justify-center rounded-tl-md rounded-bl-md transition-transform relative`}
          onMouseEnter={(e) => showTooltip("Basic")}
          onFocus={(e) => showTooltip("Basic")}
          onMouseLeave={hideTooltip}
          onBlur={hideTooltip}
        >
          {tooltip.text == "Basic" && (
            <Tooltip visible={tooltip.visible} text={tooltip.text} />
          )}
          <Settings
            className={`md:h-4 md:w-4  ${
              value === "basic" ? "text-white bg-purple-600" : "text-gray-700"
            }`}
          />{" "}
          <span className="md:block hidden">Basic</span>
        </button>

        <button
          onClick={() => handleNavigate("thankyoupage")}
          className={`flex items-center gap-1.5 text-sm ${
            value === "thankyoupage"
              ? "text-white bg-purple-600"
              : "text-gray-700"
          } py-2 flex-1 justify-center transition-transform relative`}
          aria-label="thank you page"
          onMouseEnter={(e) => showTooltip("Thank you page")}
          onFocus={(e) => showTooltip("Thank you page")}
          onMouseLeave={hideTooltip}
          onBlur={hideTooltip}
        >
          {tooltip.text == "Thank you page" && (
            <Tooltip visible={tooltip.visible} text={tooltip.text} />
          )}
          <Heart
            className={`md:h-4 md:w-4  ${
              value === "thankyoupage"
                ? "text-white bg-purple-600"
                : "text-gray-700"
            }`}
          />{" "}
          <span className="md:block hidden">Thank you page</span>
        </button>

        <button
          aria-label="extra settings"
          onClick={() => handleNavigate("extrasettings")}
          className={`flex items-center gap-1.5 text-sm ${
            value === "extrasettings"
              ? "text-white bg-purple-600"
              : "text-gray-700"
          } py-2 flex-1 justify-center transition-transform relative`}
          onMouseEnter={(e) => showTooltip("Extra settings")}
          onFocus={(e) => showTooltip("Extra settings")}
          onMouseLeave={hideTooltip}
          onBlur={hideTooltip}
        >
          {tooltip.text == "Extra settings" && (
            <Tooltip visible={tooltip.visible} text={tooltip.text} />
          )}
          <Filter
            className={`md:h-4 md:w-4  ${
              value === "extrasettings"
                ? "text-white bg-purple-600"
                : "text-gray-700"
            }`}
          />{" "}
          <span className="md:block hidden">Extra settings</span>
        </button>

        <button
          aria-label="notifications"
          onClick={() => handleNavigate("notifications")}
          className={`flex items-center gap-1.5 text-sm ${
            value === "notifications"
              ? "text-white bg-purple-600"
              : "text-gray-700"
          } py-2 flex-1 justify-center rounded-tr-md rounded-br-md transition-transform relative`}
          onMouseEnter={(e) => showTooltip("Notifications")}
          onFocus={(e) => showTooltip("Notifications")}
          onMouseLeave={hideTooltip}
          onBlur={hideTooltip}
        >
          {tooltip.text == "Notifications" && (
            <Tooltip visible={tooltip.visible} text={tooltip.text} />
          )}
          <Mail
            className={`md:h-4 md:w-4  ${
              value === "notifications"
                ? "text-white bg-purple-600"
                : "text-gray-700"
            }`}
          />{" "}
          <span className="md:block hidden">Notifications</span>
        </button>
      </div>

      <div className="flex justify-center flex-1 w-full">
          <div className="h-[1px] w-[40%] bg-zinc-200 rounded-sm shadow-md" />
      </div>
    </div>
  );
}
