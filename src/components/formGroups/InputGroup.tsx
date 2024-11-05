'use client'
import React from "react";
import Label from "../ui/label";
import { FieldError, FieldErrors, useFormContext } from "react-hook-form";
import { FormData } from "@/lib/validations";
import { cn } from "@/lib/utils";
import { useFormError } from "@/hooks/useFormError";

interface InputGroupProps {
  label: string;
  labelIcon?: React.ReactNode;
  name: string;
  type?: string;
  placeholder: string;
  desc?: string;
  className?: string;
  cta?: string;
  formName?: string;
}

export default function InputGroup({
  label,
  labelIcon,
  name,
  type,
  placeholder,
  desc,
  className,
  cta,
  formName,
}: InputGroupProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  
  const error = useFormError(formName!, name);

  const Inputregister = formName ? `${formName}.${name}` : `${name}`;

  
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <Label label={label} icon={labelIcon && labelIcon} />
      <input
        type={type ? type : "text"}
        className={`w-full py-2 px-4 rounded-md shadow-sm border text-base text-gray-800 placeholder:text-gray-500 placeholder:font-sans ${
          error ? "focus:outline outline-red-600 border-red-400 " : "outline-blue-600 border-gray-300 focus:outline-2"
        }`}
        placeholder={placeholder}
        {...register(Inputregister)}
      />
      {desc && (
        <p className="text-xs text-zinc-500">
          {desc} <span className="text-blue-600 underline">{cta}</span>
        </p>
      )}
      {error && <p className="text-xs text-red-600">{error.message}</p>}
    </div>
  );
}
