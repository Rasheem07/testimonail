"use client";
import { ChevronDown, PlusCircle } from "lucide-react";
import { useState } from "react";
import { useFormContext } from "react-hook-form"; // Import useFormContext
import Checkbox from "../ui/checkbox";
import Switch from "../ui/Switch";

interface DropdownItem {
  label: string;
  name: string;
}

const dropdownItemsData: DropdownItem[] = [
  { label: "Name", name: "name" },
  { label: "Email", name: "email" },
  { label: "Title, Company", name: "title" },
  { label: "Social link", name: "socialLink" },
  { label: "Address", name: "address" },
];

export default function SelectCollectExtra() {
  const [isDropdown, setIsDropdown] = useState(false);
  const { setValue } = useFormContext(); // Get setValue from useFormContext

  // Initialize extraOptions object
  const extraOptions = dropdownItemsData.reduce((acc, item) => {
    acc[item.name] = { customMessage: false, required: false }; // Default values
    return acc;
  }, {} as Record<string, { customMessage: boolean; required: boolean }>);

  // Toggle dropdown visibility
  const handleDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  // Handle change in dropdown items
  const handleSwitchChange = (name: string, checked: boolean) => {
    extraOptions[name].customMessage = checked; // Update extraOptions directly
    setValue("spaces.extraOptions", extraOptions); // Update form value
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    extraOptions[name].required = checked; // Update extraOptions directly
    setValue("spaces.extraOptions", extraOptions); // Update form value
  };

  return (
    <div className="relative">
      <button
        className="bg-transparent border border-gray-300 rounded-md py-2 px-4 text-base text-gray-700 flex items-center gap-1.5 hover:bg-slate-50 transition-colors focus:ring-[1.5px] ring-blue-600 ring-offset-0 max-w-fit mt-2"
        type="button"
        onClick={handleDropdown}
      >
        Name, email, title, social links etc.{" "}
        <ChevronDown className="h-5 w-5 text-gray-800" />
      </button>
      {isDropdown && (
        <div className="flex flex-col py-2 absolute rounded-lg -bottom-[340px] z-50 left-0 min-w-[320px] md:min-w-[400px] bg-white shadow-2xl border border-gray-200">
          <div className="divide-y divide-gray-200">
            {dropdownItemsData.map((item, index) => (
              <DropdownList 
                key={index} 
                label={item.label} 
                name={item.name} 
                onSwitchChange={handleSwitchChange}
                onCheckboxChange={handleCheckboxChange} 
              />
            ))}
          </div>
          <div className="space-y-1 px-4 py-2">
            <h4 className="text-base font-semibold text-black">
              Create your own fields
            </h4>
            <div className="flex items-center gap-1 5">
              <PlusCircle className="h-4 w-4 text-gray-700" />
              <h4 className="text-base font-semibold text-black">
                Add a new field (up to 5)
              </h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface DropdownListProps {
  label: string;
  name: string;
  onSwitchChange: (name: string, checked: boolean) => void;
  onCheckboxChange: (name: string, checked: boolean) => void;
}

function DropdownList({ label, name, onSwitchChange, onCheckboxChange }: DropdownListProps) {
  return (
    <li className="p-3 flex items-center justify-between flex-1 w-full">
      <div className="flex items-center gap-1.5">
        <Switch
          formName="spaces"
          name={name} 
          onChange={(e) => onSwitchChange(name, e.target.checked)} // Handle switch change
        />
        <label
          htmlFor={name}
          className="text-sm font-medium text-gray-700 flex items-center gap-1"
        >
          {label}
        </label>
      </div>
      <div className="flex items-center gap-1.5">
        <label
          htmlFor={name}
          className="text-sm text-gray-700 flex items-center gap-1"
        >
          Required?
        </label>
        <Checkbox 
          onChange={(e: any) => onCheckboxChange(name, e.target.checked)} // Handle checkbox change
        />
      </div>
    </li>
  );
}
