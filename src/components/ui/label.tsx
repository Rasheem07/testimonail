import React from "react";

type Props = {
  label: string;
  icon?: React.ReactNode
};

export default function Label({label, icon}: Props) {

  return (
    <label
      htmlFor="custommessage"
      className="text-sm font-medium text-gray-700 flex items-center gap-1"
    >
      {label} {icon && icon}
    </label>
  );
}
