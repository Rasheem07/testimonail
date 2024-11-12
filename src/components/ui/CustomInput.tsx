
import React from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  name: string;
  placeholder: string;
  type?: string;
};

export default function Input({ name, placeholder, type }: Props) {
  
  return (
    <input
      required
      name={name}
      type={type? type : 'text'}
      className="w-full py-2 px-4 rounded-md shadow-sm border border-gray-300 outline-blue-600 focus:outline-2 text-base text-gray-800 placeholder:text-gray-500 placeholder:font-sans"
      placeholder={placeholder}
    />
  );
}
