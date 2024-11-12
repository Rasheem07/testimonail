import React, { ChangeEventHandler } from "react";

export default function Checkbox({onChange}: {onChange?: ChangeEventHandler<HTMLInputElement>}) {
  return (
    <input
      type="checkbox"
      onChange={onChange}
      className="accent-purple-600 hover:accent-purple-600 cursor-pointer h-4 w-4 rounded-full focus:ring-[2px] ring-offset-1 ring-purple-600 checkbox:text-color-500"
    />
  );
}
