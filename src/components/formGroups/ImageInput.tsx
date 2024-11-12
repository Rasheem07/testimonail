'use client'
import Image from "next/image";
import React, { useState } from "react";
import Checkbox from "../ui/checkbox";
import Label from "../ui/customlabel";
import { useFormContext } from "react-hook-form";

type Imageinputprops = {
  defaultImage?: string;
  hideImagecheck?: boolean;
  name: string;
  formName: string;
};

export default function ImageInput({
  defaultImage,
  hideImagecheck,
  name,
  formName
}: Imageinputprops) {

  const [imagePreview, setImagePreview] = useState<string>(
    defaultImage ? defaultImage : ""
  );

  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-x-2">
        <Label label="Image" icon={<span className="text-red-600">*</span>} />
        {!hideImagecheck && (
          <div className="flex items-center gap-1">
            <Checkbox />
            <span className="text-sm text-zinc-500">Hide the image?</span>
          </div>
        )}
      </div>
      <div className="flex items-center gap-3">
        {!imagePreview || imagePreview == "" ? (
          <div className="min-h-12 min-w-16 rounded-sm border bg-gray-100 border-gray-300" />
        ) : (
          <Image
            src={imagePreview}
            width={64}
            height={64}
            alt=""
            className="h-12 w-16 object-cover rounded-sm border bg-slate-200"
          />
        )}
        <button
          type="button"
          className="relative rounded-md border border-gray-300 text-gray-600 text-sm py-1.5 px-3 cursor-pointer"
        >
          Change
          <input
            accept="image/*"
            onInput={handleFileInput}
            className=" h-full w-full opacity-0 absolute cursor-pointer inset-x-0 inset-y-0"
            type="file"
            {...register(`${formName}.${name}`)}
          />
        </button>
      </div>
    </div>
  );
}
