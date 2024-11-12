"use client";
import {
  InfoIcon,
  Lock
} from "lucide-react";
import React from "react";
import SelectCollectExtra from "../formGroups/selectCollectExtra";
import Label from "../ui/customlabel";
import Switch from "../ui/Switch";
import ThemeSwitch from "../ui/themeSwitch";
import InputGroup from "../formGroups/InputGroup";
import QuestionInputContainer from "../formGroups/questionContainer";
import LogoInput from "../formGroups/LogoInput";
import TextareaGroup from "../formGroups/TextareaGroup";
import SelectGroup from "../formGroups/SelectGroup";
import {useFormContext } from "react-hook-form";
import { FormData } from "@/lib/validations";

export default function NewSpaceform() {

  const {formState: {errors}} = useFormContext<FormData>();
  return (
    <div className="pt-6">
      <div className="pb-12 flex flex-col gap-4 items-center">
        <h1 className="text-gray-800 font-bold text-4xl">Create a new space</h1>
        <p className="text-base text-gray-500 text-center">
          After the Space is created, it will generate a dedicated page for
          collecting testimonials.
        </p>
      </div>
      <div className="flex flex-col gap-y-5">
        <InputGroup
          formName="spaces"
          label="Space name"
          labelIcon={<span className="text-red-600">*</span>}
          name="space_name"
          placeholder="Space name should be unique"
          desc="Public URL is: testimonial.to/your-space"
        />
        <LogoInput
          formName="spaces"
          label="space logo"
          check="Square"
          labelIcon={<span className="text-red-600">*</span>}
          name="logo"
        />
        <InputGroup
          formName="spaces"
          label="Header title"
          labelIcon={<span className="text-red-600">*</span>}
          name="header_title"
          placeholder="Would you like to give shoutout for xyz?"
        />
        <TextareaGroup
          formName="spaces"
          label="Your custom message"
          labelIcon={<span className="text-red-600">*</span>}
          name="custom_message"
          placeholder="Write a warm message to your customers, and give them simple directions on how to make the best testimonial."
        />
        <QuestionsInputs />
        <ExtrafieldsSelect />
        <CollectExtraInfoGrid />
        <CustomButtonColorPicker />
        <SelectGroup
          formName="spaces"
          name="language"
          label="Language"
          options={languageOptions}
          fullWidth={false}
        />
        <SelectGroup
          formName="spaces"
          fullWidth
          name="auto-translate-language"
          label="Auto translate to other languages?"
          labelIcon={
            <Lock className="h-4 w-4 fill-orange-400 text-orange-400" />
          }
          options={languageOptions}
        />
      </div>
    </div>
  );
}

const languageOptions = [
  { value: "en", name: "English" },
  { value: "es", name: "Español" },
  { value: "de", name: "Deutsch" },
  { value: "nl", name: "Nederlands" },
  { value: "pl", name: "Polski" },
  { value: "fr", name: "Français" },
  { value: "nb", name: "Norwegian" },
  { value: "ro", name: "Românesc" },
  { value: "ru", name: "Русский" },
  { value: "pt-br", name: "Português (Brazil)" },
  { value: "cs", name: "Česky" },
  { value: "ja", name: "日本語" },
  { value: "it", name: "Italian" },
  { value: "sv", name: "Swedish" },
];

function CustomButtonColorPicker() {
  const { register, setValue } = useFormContext();

  // Function to handle color selection
  const handleColorSelect = (color: string) => {
    setValue('spaces.customColor', color); // Update the color value in the form
  };

  return (
    <div className="mt-1 flex flex-col gap-1.5">
      <Label
        label="Custom button colour"
        icon={<Lock className="h-4 w-4 fill-orange-400 text-orange-400" />}
      />
      <div className="grid grid-cols-7 grid-flow-row gap-2 md:w-1/2 bg-white rounded-md border p-3 blur-sm border-gray-300">
        {[
          'bg-orange-500',
          'bg-yellow-500',
          'bg-cyan-500',
          'bg-emerald-500',
          'bg-sky-500',
          'bg-blue-500',
          'bg-zinc-500',
          'bg-red-500',
          'bg-pink-500',
          'bg-purple-600',
        ].map((colorClass) => (
          <div
            key={colorClass}
            className={`w-full h-8 rounded-md cursor-pointer ${colorClass}`}
            onClick={() => handleColorSelect(colorClass)} // Replace to get the hex value
          />
        ))}
        <div className="flex col-span-4 border border-gray-200 rounded-md shadow-sm">
          <div className="flex justify-center h-full w-1/4 text-gray-500 font-bold bg-gray-200 shadow-inner">
            #
          </div>
          <input
            type="text"
            className="px-2 w-full h-full outline-none border-none focus:outline-none"
            {...register('spaces.customColor')} // Register the input with React Hook Form
          />
        </div>
      </div>
    </div>
  );
}


const extraOptions = [
  {
    value: "Text and video",
    name: "Text and video",
  },
  {
    value: "Text only",
    name: "Text only",
  },
  {
    value: "Video only",
    name: "Video only",
  },
];

function CollectExtraInfoGrid() {

  return (
    <div className="grid gap-y-4 md:gap-y-0 gap-x-8 md:grid-cols-3">
      <SelectGroup
        formName="spaces"
        label="Collection Type"
        options={extraOptions}
        name="collection type"
        fullWidth
      />
      <div className="flex items-center gap-x-4 md:col-span-2">
        <div className="w-full flex flex-col gap-1.5 md:px-3">
          <Label label="Collect star ratings" />
          <Switch formName="spaces" name="collect_star_ratings"/>
        </div>
        <div className="w-full flex flex-col gap-1.5 md:px-3">
          <Label label="Choose a theme" />
          <ThemeSwitch formName="spaces" name="theme"/>
        </div>
      </div>
    </div>
  );
}

function ExtrafieldsSelect() {
  return (
    <div className="flex flex-col gap-1">
      <Label
        label="Collect extra information"
        icon={<InfoIcon className="h-4 w-4 text-gray-500" />}
      />
      <SelectCollectExtra />
    </div>
  );
}

function QuestionsInputs() {
  return (
    <div className="flex flex-col gap-1">
      <Label
        label="Questions"
        icon={<InfoIcon className="h-4 w-4 text-gray-500" />}
      />
      <QuestionInputContainer />
    </div>
  );
}
