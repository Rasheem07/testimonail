import React, { useState } from "react";
import SelectGroup from "../formGroups/SelectGroup";
import InputGroup from "../formGroups/InputGroup";
import { ChevronDown, ChevronUp, InfoIcon } from "lucide-react";
import LogoInput from "../formGroups/LogoInput";
import SwitchGroup from "../formGroups/SwitchGroup";

import ImageInput  from "../formGroups/ImageInput";
import { useFormContext } from "react-hook-form";

export default function ExtraSettingsForm() {
  const videoDurations = [
    {
      value: "30",
      name: "30 seconds",
    },
    {
      value: "60",
      name: "60 seconds",
    },
    {
      value: "90",
      name: "90 seconds",
    },
    {
      value: "120",
      name: "120 seconds",
    },
  ];

  const consentdisplayOptions = [
    {
      value: "required",
      name: "Required",
    },
    {
      value: "optional",
      name: "Optional",
    },
    {
      value: "hidden",
      name: "Hidden",
    },
  ];
  const thirdparties = [
    {
      value: "google",
      name: "google",
    },
    {
      value: "facebook",
      name: "facebook",
    },
    {
      value: "trustpilot",
      name: "trustpilot",
    },
    {
      value: "capterra",
      name: "capterra",
    },
    {
      value: "G2",
      name: "G2",
    },
    {
      value: "Yelp",
      name: "Yelp",
    },
    {
      value: "Twitter",
      name: "Twitter",
    },
  ];

  const {
    formState: { errors },
  } = useFormContext();

  return (
    <div className="pt-6">
      <div className="pb-12 flex flex-col gap-4 items-center">
        <h1 className="text-gray-800 font-bold text-3xl md:text-4xl">
          Some extra settings
        </h1>
        <p className="text-base text-gray-500 text-center">
          After the Space is created, it will generate a dedicated page for
          collecting testimonials.
        </p>
      </div>
      <form className="flex flex-col gap-y-5">
        <div className="grid grid-cols-6 gap-4">
          <SelectGroup
          formName="extra_settings"
            className="col-span-6 sm:col-span-2"
            fullWidth
            label="Max video duration"
            name="maxvideoduration"
            options={videoDurations}
            defaultValue="120"
          />
        </div>
        <MaxcharsInput />
        <InputGroup
        formName="extra_settings"
          label="Video button text"
          name="Videobtntext"
          placeholder="Record a video"
        />
        <InputGroup
        formName="extra_settings"
          label="Text button text"
          name="textbtntext"
          placeholder="Send in text"
        />
        <div className="grid grid-cols-6 gap-4">
          <SelectGroup
          formName="extra_settings"
            label="consent display"
            labelIcon={<InfoIcon className="h-4 w-4 text-gray-600" />}
            name="consentdisplay"
            options={consentdisplayOptions}
            className="col-span-6 sm:col-span-2"
            defaultValue="required"
            fullWidth
          />
        </div>
        <InputGroup
        formName="extra_settings"
          label="Consent statement"
          labelIcon={<ConsetLabelIcon />}
          name="consentstatement"
          placeholder="I give permission to use this testimonial."
        />
        <InputGroup
        formName="extra_settings"
          label="Text submission title"
          labelIcon={<InfoIcon className="h-4 w-4 text-gray-600" />}
          name="textsubmissiontitle"
          placeholder="Text"
        />
        <InputGroup
        formName="extra_settings"
          label="Questions label"
          labelIcon={<InfoIcon className="h-4 w-4 text-gray-600" />}
          name="questionslabel"
          placeholder="Questions"
        />
        <LogoInput
        formName="extra_settings"
          name="default-avatar"
          label="Default text testimonial avatar"
          labelIcon={<InfoIcon className="h-4 w-4 text-gray-600" />}
        />
        <InputGroup
        formName="extra_settings"
          label="Add my affiliate link"
          labelIcon={<InfoIcon className="h-4 w-4 text-gray-600" />}
          name="affiliatelink"
          placeholder="https://testimonial.to/?via=xyz"
          desc="Want to earn 30% recurring commission?"
          cta="Join our affiliate program!"
        />
        <div className="grid grid-cols-6 grid-flow-row gap-4 items-end">
          <SelectGroup
          formName="extra_settings"
            label="Add a 3rd party review link"
            name="thirdparty"
            options={thirdparties}
            className="col-span-6 sm:col-span-2"
            defaultValue="required"
            fullWidth
          />
          <div className="flex flex-1 border border-gray-300 shadow-sm rounded-md w-full col-span-6 sm:col-span-4 my-2">
            <span className="inline-flex w-1/4 items-center justify-center bg-slate-100 text-gray-600 text-sm font-medium rounded-tl-md rounded-bl-md border-r border-gray-300 shadow-inner">
              https://
            </span>
            <input
              type="text"
              className="text-base text-gray-800 w-full py-1.5 px-4 focus:ring-[1.5px] ring-blue-600 outline-none border-none rounded-tr-md rounded-br-md"
            />
          </div>
        </div>
        <SwitchGroup
          name="auto-populate-wall"
          formName="extra_settings"
          label="Auto populate testimonials to the Wall of Love"
          labelIcon={<InfoIcon className="h-4 w-4 text-gray-600" />}
        />
        <SwitchGroup
          name="disable-video-ios"
          label="Disable video recording for iPhone users"
          formName="extra_settings"
          labelIcon={<InfoIcon className="h-4 w-4 text-gray-600" />}
        />
        <SwitchGroup
          formName="extra_settings"
          name="allow-search-engine"
          label="Allow search engines to index your page"
        />
        <MetadataOptions />
      </form>
    </div>
  );
}

function MetadataOptions() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="space-y-1">
      <div
        className="flex cursor-pointer items-center justify-between w-full"
        onClick={handleOpen}
      >
        <h5 className="text-base font-medium text-gray-700">
          Custom open graph Meta tags
        </h5>
        {isOpen ? (
          <ChevronUp className="h-8 w-8 fill-gray-600 text-gray-600" />
        ) : (
          <ChevronDown className="h-8 w-8 fill-gray-600 text-gray-600" />
        )}
      </div>
      {isOpen && (
        <div className=" w-full bg-slate-200 shadow-inner border border-gray-300 rounded-md p-4 transition">
          <p className="text-sm text-gray-600">
            Change how your testimonial page looks on social media.
          </p>
          <div className="flex flex-col gap-y-5 mt-2">
            <InputGroup
            formName="extra_settings"
              label="Title"
              placeholder="Reviews on Testimonial.to"
              name="metatitle"
            />
            <InputGroup
            formName="extra_settings"
              label="Description"
              placeholder="Would you like to give  a shoutout in a video or text testimonial?"
              name="metadesc"
            />
            <ImageInput formName="extra_settings" name="metaimg" hideImagecheck />
          </div>
        </div>
      )}
    </div>
  );
}

function ConsetLabelIcon() {
  return (
    <div className="flex items-center gap-0.5">
      <InfoIcon className="h-4 w-4 text-gray-600" />
      <p className="text-gray-500 text-xs">Add links by selecting texts</p>
    </div>
  );
}

function MaxcharsInput() {
  return (
    <div className="flex flex-col gap-1">
      <InputGroup
      formName="extra_settings"
        label="Max characters for the text testimonial"
        name="maxchars"
        type="number"
        className="col-span-6 sm:col-span-2 w-full py-2 px-4 rounded-md shadow-sm border border-gray-300 outline-blue-600 focus:outline-2 text-base text-gray-800 placeholder:text-gray-500 placeholder:font-sans"
        placeholder="128"
      />
      <p className="text-xs text-zinc-500">
        Setting it to 0 will remove the max chars limit
      </p>
    </div>
  );
}
