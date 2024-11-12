'use client'
import React from "react";
import Label from "../ui/customlabel";
import ReactTextareaAutosize from 'react-textarea-autosize';
import { useFormContext } from "react-hook-form";
import { useFormError } from "@/hooks/useFormError";

type Props = {
    label: string;
    labelIcon?: React.ReactNode;
    name: string;
    placeholder: string;
    formName?: string
};

export default function TextareaGroup({label, labelIcon, placeholder, name, formName}: Props) {

  const {register } = useFormContext();

  const error = useFormError(formName!, name);

  const Inputregister = formName ? `${formName}.${name}` : `${name}`;

  return (
    <div className="flex flex-col gap-1">
      <Label
        label={label}
        icon={labelIcon}
      />
      <ReactTextareaAutosize
        minRows={4}
        placeholder={placeholder}
        aria-expanded="false"
        {...register(Inputregister)}
        className={`w-full py-2 px-4 rounded-md resize-none shadow-sm border ${error? 'focus:outline outline-red-600 border-red-400' : 'outline-blue-600 focus:outline-2 border-gray-300'} text-[15px] placeholder:font-[400] text-gray-800 placeholder:text-gray-500 placeholder:font-sans`}
      />
      <p className="text-xs text-zinc-500">Markdown supported</p>
      {error && <p className="text-xs text-red-600">{error.message}</p>}
    </div>
  );
}
