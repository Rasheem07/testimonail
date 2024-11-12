'use client'
import React from "react";
import Label from "../ui/customlabel";
import Switch from "../ui/Switch";

type Props = {
    label: string;
    labelIcon?: React.ReactNode;
    name: string;
    formName: string;
};

export default function SwitchGroup({name, label, labelIcon, formName}: Props) {
  return (
    <div className="w-full flex flex-col gap-1.5 md:px-3">
      <Label label={label} icon={labelIcon && labelIcon} />
      <Switch name={name} formName={formName} />
    </div>
  );
}
