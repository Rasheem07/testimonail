import { Search } from "lucide-react";
import React from "react";
import Collection from "./collection";

type Props = {};

export default function Help({}: Props) {
  return (
    <div className="h-full overflow-y-hidden flex flex-col justify-between">
      <div className=" flex flex-col gap-2 p-4 rounded-t-lg bg-purple-600 shadow-md">
        <h4 className="text-lg text-white font-bold text-center">Help</h4>
        <div className="relative">
          <input
            type="text"
            autoFocus
            className="w-full h-full rounded-md shadow-sm text-gray-800 font-sans placeholder:text-zinc-400 placeholder:font-sans py-2 px-5 outline-none border-none" 
            placeholder="Search for Help"
          />
          <Search className="h-6 w-6 text-purple-600 absolute right-4 top-2"/>
        </div>
      </div>

      <div className="h-full overflow-y-scroll max-h-fit divide-y divide-zinc-300 divide-solid">
          <h2 className="text-base font-semibold text-gray-800 px-4 py-3">11 Collections</h2>
          <Collection heading="Get started on Testimonial" desc="The testimonial Basics" articles={34}/>
          <Collection heading="Account Settings" desc="Everything related to your account (account email and password, upgrading, inviting teammates, etc)" articles={16}/>
          <Collection heading="Features" desc="Docs on each feature and how to use them" articles={67}/>
          <Collection heading="Embed Widgets" desc="You can embed different widgets to your website in seconds" articles={8}/>
          <Collection heading="Automation & APIs" desc="Automate your testimonial experience" articles={7}/>
      </div>
    </div>
  );
}
