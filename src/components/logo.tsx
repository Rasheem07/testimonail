import { cn } from "@/lib/utils";
import { ThumbsUp } from "lucide-react";
import React from "react";

export default function Logo({className}: {className?: string}) {
  return (
    <h1 className={cn("text-white font-semibold text-xl flex items-center gap-1", className)}>
      <span className="p-2 rounded-full bg-purple-600">
        <ThumbsUp className="h-4 w-4 text-zinc-200 font-bold fill-zinc-200" />
      </span>
      Testimonial.io
    </h1>
  );
}
