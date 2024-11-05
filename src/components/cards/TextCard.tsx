import React from "react";
import Image from "next/image"; // Assuming you are using Next.js for image optimization
import { Heart, Star, StarIcon } from "lucide-react";

interface TestimonialProps {
  type: "video" | "text"; // New prop to distinguish between video and text testimonials
  name: string;
  date: string;
  ratings: number;
  content?: string; // Content for text testimonials
  video_url?: string; // URL for video testimonials
  user_photo?: string; // User photo for text testimonials
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  type,
  name,
  date,
  ratings,
  content,
  video_url,
  user_photo,
}) => {
  return (
    <div className=" w-full bg-gray-800 hover:bg-gray-700 h-auto rounded-lg shadow-lg p-5 space-y-5">
      <div className="flex items-center w-full justify-between">
        <span className="rounded-full px-5 font-medium py-1.5 text-sm text-purple-600 bg-slate-200">
          {type}
        </span>
        <div className="flex items-center gap-x-4">
          <Star className="h-5 w-5 text-purple-600 hover:text-purple-700 fill-transparent" />
          <Heart className="h-5 w-5 text-red-500 fill-red-500 hover:fill-red-400" />
        </div>
      </div>
      <div className="flex items-center gap-1">
        {[...Array(ratings)].map((_, index) => (
          <StarIcon key={index} className="fill-yellow-400 text-yellow-400 h-6 w-6" />
        ))}
      </div>

      {type === "video" && video_url && (
        <video className="shadow-sm rounded-sm transition w-full h-auto" src={video_url} playsInline />
      )}

      {type === "text" && content && (
        <p className="text-lg text-zinc-100 font-light max-w-full whitespace-normal break-words line-clamp-3">
          {content}
        </p>
      )}

      <div className="flex items-center justify-between w-full">
        <div className="space-y-1.5">
          <h6 className="text-base font-medium text-zinc-100">Submitted by</h6>
          {type === "text" && user_photo ? (
            <div className="flex items-center gap-1.5 text-zinc-200">
              <Image src={user_photo} alt={name} width={32} height={32} className="rounded-full" />
              {name}
            </div>
          ) : (
            <span className="text-zinc-200">{name}</span>
          )}
        </div>
        <div className="space-y-1.5 text-zinc-200">
          <h6 className="text-base font-medium text-zinc-100">Submitted at</h6>
          {date}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
