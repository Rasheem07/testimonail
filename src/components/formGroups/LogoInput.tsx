"use client";
import React, { useState } from "react";
import Checkbox from "../ui/checkbox";
import Label from "../ui/customlabel";
import Img from "next/image";
import { useFormContext } from "react-hook-form";
import { useFormError } from "@/hooks/useFormError";

type Props = {
  label: string;
  labelIcon?: React.ReactNode;
  check?: string;
  name: string;
  formName: string;
};

export default function LogoInput({
  label,
  labelIcon,
  check,
  name,
  formName,
}: Props) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  [];

  const {
    register,
    formState: { errors },
    setError,
  } = useFormContext();

  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new Image();
        img.onload = () => {
          if (img.width === 48 && img.height === 48) {
            const imageDataUrl = reader.result as string; // Ensure it's a string
            setImagePreview(imageDataUrl);
          } else {
            setError("logo", { message: "image must be 48 x 48" });
            alert("Please upload an image with dimensions 48x48 pixels.");
          }
        };
        img.src = reader.result as string; // Set image src for loading dimensions
      };
      reader.readAsDataURL(file);
    }
  };

  const error = useFormError(formName, name);

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-x-2">
        <Label label={label} icon={labelIcon} />
        48 x 48
        {check && (
          <div className="flex items-center gap-1">
            <Checkbox />
            <span className="text-sm text-zinc-500">{check}?</span>
          </div>
        )}
      </div>
      <div className="flex items-center gap-3">
        <div
          id="preview"
          className="h-12 w-12 rounded-full border bg-slate-200"
        >
          {imagePreview && (
            <Img
              height={48}
              width={48}
              src={imagePreview}
              alt="Preview"
              className="h-full w-full rounded-full object-cover"
            />
          )}
        </div>
        <button
          type="button"
          className="relative rounded-md border border-gray-300 text-gray-600 text-sm py-1.5 px-3 cursor-pointer"
        >
          Change
          <input
            className="h-full w-full opacity-0 absolute cursor-pointer inset-x-0 inset-y-0"
            type="file"
            accept="image/*"
            {...register(`${name}`)}
            onChange={handleFileInput} // Changed to onChange
          />
        </button>
      </div>
      {error && (
        <div className="text-red-500 text-sm mt-1">{error?.message}</div>
      )}
    </div>
  );
}
