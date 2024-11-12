"use client";
import React, { ChangeEventHandler, useState } from "react";
import { useFormContext } from "react-hook-form";

export default function ThemeSwitch({
  name,
  formName,
  onChange,
}: {
  name: string;
  formName: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsChecked((prevChecked) => !prevChecked);
  };

  const { register } = useFormContext();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setIsChecked(e.target.checked);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <button
      type="button"
      className={`inline-flex flex-shrink-0 ${
        isChecked ? "bg-gray-700" : "bg-slate-100"
      } relative shadow-inner rounded-full w-11 h-6 border-2 border-transparent transition-colors duration-200 ease-in-out`}
      onClick={handleSwitch}
    >
      <input
        type="checkbox"
        checked={isChecked} // Ensure the checkbox reflects the state
        className="w-full h-full absolute inset-0 opacity-0"
        aria-hidden="true" // Hide the checkbox for accessibility
        {...register(`${formName}.${name}`)}
        onChange={handleChange} // Use the proper change handler
      />
      <span
        className={`relative inline-block h-5 w-5 bg-white shadow transform transition-transform duration-200 ease-in-out ${
          isChecked ? "translate-x-5" : "translate-x-0"
        } rounded-full`}
      >
        <span
          className={`absolute inset-0 h-full w-full flex items-center justify-center transition-opacity duration-200 ${
            isChecked ? "opacity-0 ease-out" : "opacity-100 ease-in"
          }`}
          aria-hidden="true"
        >
          <svg
            className="h-3 w-3 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            ></path>
          </svg>
        </span>
        <span
          className={`absolute inset-0 h-full w-full flex items-center justify-center transition-opacity duration-200 ${
            isChecked ? "opacity-100 ease-in" : "opacity-0 ease-out"
          }`}
          aria-hidden="true"
        >
          <svg
            className="h-3 w-3 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            ></path>
          </svg>
        </span>
      </span>
    </button>
  );
}
