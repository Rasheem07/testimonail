import React, { useRef, useState } from "react";
import Checkbox from "../ui/checkbox";
import Label from "../ui/customlabel";
import Image from "next/image";
import Input from "../ui/CustomInput";
import ReactTextareaAutosize from "react-textarea-autosize";
import Switch from "../ui/FormSwitch";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Dot,
  InfoIcon,
} from "lucide-react";
import InputGroup from "../formGroups/InputGroup";
import TextareaGroup from "../formGroups/TextareaGroup";
import ImageInput from "../formGroups/ImageInput";
import { useFormContext } from "react-hook-form";
import SwitchGroup from "../formGroups/SwitchGroup";

export default function ThankyouPageForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="pt-6">
      <div className="pb-6 flex flex-col gap-4 md:items-center">
        <h1 className="text-gray-800 font-bold text-4xl">
          Customize thank you page
        </h1>
        <p className="text-base text-gray-500 md:text-center">
          After the Space is created, it will generate a dedicated page for
          collecting testimonials.
        </p>
      </div>
      <form className="flex flex-col gap-y-5">
        <ImageInput
          formName="thank_page"
          defaultImage="/gifs/thankyou.gif"
          name="thankyouimg"
        />
        <InputGroup
          formName="thank_page"
          label="Thank you title"
          name="thankyoutitle"
          placeholder="Thank you!"
        />
        <TextareaGroup
          formName="thank_page"
          label="Thank you message"
          placeholder="Thank you so much for your shoutout! it means a ton for us!🙏"
          name="thankyoumessage"
        />
        <SwitchGroup
          formName="thank_page"
          label="Allow to share on social media"
          name="allow social media"
        />
        <InputGroup
          formName="thank_page"
          label="Redirect to your own page"
          labelIcon={<InfoIcon className="h-4 w-4 text-gray-700" />}
          name="redirectpage"
          placeholder="https://your-website.com/page"
        />
        <SwitchGroup
          formName="thank_page"
          label="Allow to share on social media"
          name="allow social media"
        />
      </form>
      <div className="flex items-center w-full justify-between pt-8">
        <button className="inline-flex items-center gap-1.5 float-right rounded-md bg-zinc-300 text-sm shadow-inner text-gray-700 py-1.5 px-3">
          <ArrowLeft className="h-4 w-4 text-gray-700" />
          Previous
        </button>
        <div className="inline-flex items-center">
          <Dot className="h-6 w-6 text-zinc-800" />
          <Dot className="h-6 w-6 text-zinc-400" />
          <Dot className="h-6 w-6 text-zinc-400" />
          <Dot className="h-6 w-6 text-zinc-400" />
        </div>
        <button className="inline-flex items-center gap-1.5 bg-purple-600 rounded-md text-white text-sm shadow-sm py-1.5 px-3">
          Next <ArrowRight className="h-4 w-4 text-gray-50" />
        </button>
      </div>
    </div>
  );
}
