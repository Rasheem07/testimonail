import React, { useState } from "react";
import Image from "next/image"; // Assuming you are using Next.js for image optimization
import { Heart, Star, StarIcon } from "lucide-react";

interface videoTestimonial {
  name: string;
  video_url: string;
  date: string;
  ratings: number
}

const TestimonialVideoCard: React.FC<videoTestimonial> = ({
  name,
  video_url,
  date,
  ratings
}) => {

  return (
    <div className="w-full bg-gray-800 hover:bg-gray-700 min-h-64 h-auto mx-4 rounded-lg shadow-lg p-5 space-y-5">
      <div className="flex items-center w-full justify-between">
        <span className="rounded-full px-5 font-medium py-1.5 text-sm text-purple-600 bg-slate-200">
          video
        </span>
        <div className="flex items-center gap-x-4">
          <Star className="h-5 w-5 text-purple-600 hover:text-purple-700 fill-transparent" />
          <Heart className="h-5 w-5 text-red-500 fill-red-500 hover:fill-red-400" />
        </div>
      </div>
      <div className="flex items-center gap-1">
        {[...Array(ratings)].map((_, index) => (
          <StarIcon
            key={index}
            className="fill-yellow-400 text-yellow-400 h-6 w-6"
          />
        ))}
      </div>

      <video
        className={`shadow-sm rounded-sm transition
          width-full h-auto`}
        src={video_url}
        playsInline
      />

      <div className="flex items-center justify-between w-full">
        <div className="space-y-1">
          <h6 className="text-base font-medium text-zinc-100">Submitted by</h6>
          <span className=" text-zinc-200">{name}</span>
        </div>
        <div className="space-y-1 text-zinc-200">
          <h6 className="text-base font-medium text-zinc-100">Submitted at</h6>
          {date}
        </div>
      </div>
    </div>
  );
};

export default TestimonialVideoCard;
