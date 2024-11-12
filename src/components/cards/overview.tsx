import React from "react";

type Props = {
  icon: React.ReactNode;
  overview: string;
  current: number | string;
};

export default function OverviewCard({ icon, overview, current }: Props) {
  return (
    <div className="p-5 bg-gray-800 rounded-lg shadow-md border border-gray-700 flex gap-x-8 items-center">
      {icon}
      <div className="space-y-0.5">
        <label className="text-base text-zinc-100">{overview}</label>
        <h4 className="font-bold text-lg text-gray-300 flex gap-4">
            {current}
          {current == "Free plan" ? (
            <button className="rounded-md shadow-inner text-purple-600 bg-zinc-200 border border-gray-300 text-sm py-0.5 px-1.5">
              Upgrade
            </button>
          ) : null}
        </h4>
      </div>
    </div>
  );
}
