'use client'
import React from "react";
import Label from "../ui/label";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";

type Props = {
  label: string;
  labelIcon?: React.ReactNode;
  name: string;
  options: options[];
  fullWidth?: boolean;
  className?: string;
  defaultValue?: string;
  formName: string;
};

type options = {
  value: string;
  name: string;
};

export default function SelectGroup({
  className,
  label,
  labelIcon,
  name,
  options,
  fullWidth,
  defaultValue,
  formName
}: Props) {

  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <Label label={label} icon={labelIcon} />
      <select
        id={name}
        defaultValue={defaultValue}
        {...register(`${formName}.${name}`)}
        className={`mt-1 block w-full ${
          fullWidth ? "" : "md:w-1/2"
        } py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:none  sm:text-sm text-gray-700 mb-2`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
