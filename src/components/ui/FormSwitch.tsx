"use client";
import React, { ChangeEventHandler, useState } from "react";
import { useFormContext } from "react-hook-form";

export default function Switch({
  name,
  formName,
  onChange,
}: {
  name: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  formName?: string;
}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitch = () => {
    setIsChecked((prevChecked) => !prevChecked); // Toggle the state directly
  };

  const { register } = useFormContext();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setIsChecked(e.target.checked);
    if (onChange) {
      onChange(e);
    }
  };

  const Inputregister = formName ? `${formName}.${name}` : `${name}`;

  return (
    <button
      type="button"
      className={`relative inline-flex flex-shrink-0 ${
        isChecked ? "bg-purple-600" : "bg-gray-200"
      } shadow-inner rounded-full w-11 h-6 border-2 border-transparent transition-colors duration-200 ease-in-out`}
      onClick={handleSwitch} // Move click handling to the button
    >
      <input
        type="checkbox" // Ensure the checkbox reflects the state
        className="w-11 h-6 absolute inset-0 opacity-0"
        aria-hidden="true"
        {...register(Inputregister)}
        checked={isChecked} // Synchronize state
        onChange={handleChange} // Use the proper change handler
      />
      <span
        className={`relative inline-block h-5 w-5 bg-white shadow transform transition-transform duration-200 ease-in-out ${
          isChecked ? "translate-x-5" : "translate-x-0"
        } rounded-full`}
      >
        <span
          className={`absolute inset-0 h-full w-full flex items-center justify-center transition-opacity duration-200 ${
            isChecked ? "opacity-0" : "opacity-100"
          }`}
          aria-hidden="true"
        >
          <svg
            className="h-3 w-3 text-gray-400"
            fill="none"
            viewBox="0 0 12 12"
          >
            <path
              d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </span>
        <span
          className={`absolute inset-0 h-full w-full flex items-center justify-center transition-opacity duration-200 ${
            isChecked ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        >
          <svg
            className="h-3 w-3 text-purple-600"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"></path>
          </svg>
        </span>
      </span>
    </button>
  );
}
