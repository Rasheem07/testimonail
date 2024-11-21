"use client";
import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image"; // Assuming you are using Next.js for image optimization
import {
  Clipboard,
  Computer,
  Download,
  Expand,
  Files,
  Gift,
  Heart,
  Loader2,
  LogIn,
  Minus,
  MoreHorizontalIcon,
  Pencil,
  Save,
  Share,
  Star,
  StarIcon,
  Tag,
  Trash,
} from "lucide-react";
import {
  HandleToggleArchiveText,
  HandleToggleArchiveVideo,
  HandleToggleLikeText,
  HandleToggleLikeVideo,
} from "@/actions/testimonialsActions";
import { useMutation } from "react-query";
import debounce from "lodash/debounce"; // Importing lodash
import { revalidateTestimonials } from "@/app/actions";
import { queryClient } from "@/contexts/reactqueryProvider";
import { toast } from "@/hooks/use-toast";
import { Button } from "../ui/button";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import TagsDailog from "../tagsDailog";
import ShareDropdown from "../shareDropdown";

interface TestimonialProps {
  id: string;
  type: "video" | "text"; // New prop to distinguish between video and text testimonials
  name: string;
  date: string;
  ratings: number;
  content?: string; // Content for text testimonials
  is_liked: boolean;
  is_archived: boolean;
  video_url?: string; // URL for video testimonials
  user_photo?: string; // User photo for text testimonials
  space_name: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  id,
  type,
  name,
  date,
  ratings,
  content,
  video_url,
  is_liked,
  is_archived,
  user_photo,
  space_name,
}) => {
  const [isLiked, setIsLiked] = useState(is_liked);
  const [isOptions, setisOptions] = useState(false);
  const [isArchived, setisArchived] = useState(false);
  const [isArchivedLoading, setisArchivedLoading] = useState(false);

  const handleOpenOptions = () => {
    setisOptions(!isOptions);
  };

  useEffect(() => {
    setIsLiked(is_liked);
  }, [is_liked]);

  const toggleLike = async () => {
    setIsLiked((prev) => !prev);
    // debounce(async () => {
    let handlelike;
    if (type == "text") {
      handlelike = await HandleToggleLikeText(id);
    } else {
      handlelike = await HandleToggleLikeVideo(id);
    }
    if (!handlelike) {
      toast({
        description: "testimonial failed to add to the wall of love!",
        variant: "destructive",
      });
      return setIsLiked((prev) => !prev);
    }
    if (handlelike.is_liked == true) {
      toast({
        title: "testimonial successfully added to the wall of love",
        description: "You can customise your wall of love in pages!",
      });
    } else {
      toast({
        title: "testimonial successfully removed from the wall of love",
        description: "You can customise your wall of love in pages!",
      });
    }
    await queryClient.invalidateQueries("testimonials");
    // }, 300)
  };
  const toggleArchive = async () => {
    setisArchivedLoading(true);
    setisArchived((prev) => !prev);
    // debounce(async () => {
    let handlelike;
    if (type == "text") {
      handlelike = await HandleToggleArchiveText(id);
    } else {
      handlelike = await HandleToggleArchiveVideo(id);
    }
    if (!handlelike) {
      toast({
        description: "testimonial failed to add to the archives!",
        variant: "destructive",
      });
      return setIsLiked((prev) => !prev);
    }
    if (handlelike.is_archived == true) {
      toast({
        title: "testimonial successfully added to the Archive",
        description: "You can customise your archives in Archived section!",
      });
    } else {
      toast({
        title: "testimonial removed from the archives",
        description: "You can customise your archives in Archived section!",
      });
    }
    setisOptions(false);
    await queryClient.invalidateQueries("testimonials");
    setisArchivedLoading(false);
    // }, 300)
  };

  return (
    <div
      id={id}
      className={` w-full bg-gray-800 hover:bg-gray-800 h-auto rounded-lg shadow-lg p-5 space-y-5 min-h-64`}
    >
      <div className="flex items-center w-full justify-between">
        <span className="rounded-full px-5 font-medium py-1.5 text-sm text-purple-600 bg-slate-200">
          {type}
        </span>

        {!is_archived ? (
          <div className="flex items-center gap-x-4">
            {!isOptions && (
              <>
                <Star className="h-5 w-5 text-purple-600 hover:text-purple-700 fill-transparent" />
                <Heart
                  className={`h-5 w-5 ${
                    isLiked
                      ? "text-red-500 fill-red-500"
                      : "text-zinc-500 fill-zinc-500"
                  } cursor-pointer`}
                  onClick={toggleLike}
                />
              </>
            )}
            <Button
              variant={"secondary"}
              size={"sm"}
              onClick={handleOpenOptions}
            >
              {isOptions ? <Minus /> : "options"}
            </Button>
          </div>
        ) : (
          <Button variant={"destructive"} size={"sm"} onClick={toggleArchive}>
            {isArchivedLoading ? (
              <Loader2 className="h-5 w-5 animate-spin text-zinc-200 self-center" />
            ) : (
              "Remove from Archives"
            )}
          </Button>
        )}
      </div>

      {isOptions ? (
        <div className="transition py-2 flex flex-1 flex-wrap gap-2.5 items-center px-1">
          <TagsDailog hiddenButton={false}/>
          <div className="flex text-sm items-center gap-1 text-zinc-200 hover:text-slate-300 transition-colors cursor-pointer hover:ring-[2px] rounded-md hover:bg-gray-800 ring-zinc-500 p-1.5 font-medium">
            <Gift className="text-zinc-300 w-4 h-4" />
            Incentivize
          </div>
          <ShareDropdown
            id={id}
            LinktoTestimonial={`http://localhost:3000/share/${space_name}/t/${id}`}
          />
          <div className="flex text-sm items-center gap-1 text-zinc-200 hover:text-slate-300 transition-colors cursor-pointer hover:ring-[2px] rounded-md hover:bg-gray-800 ring-zinc-500 p-1.5 font-medium">
            <Download className="text-zinc-300 h-4 w-4" />
            Download
          </div>
          <div className="flex text-sm items-center gap-1 text-zinc-200 hover:text-slate-300 transition-colors cursor-pointer hover:ring-[2px] rounded-md hover:bg-gray-800 ring-zinc-500 p-1.5 font-medium">
            <Pencil className="text-zinc-300 h-4 w-4" />
            Edit
          </div>
          <div className="flex text-sm items-center gap-1 text-zinc-200 hover:text-slate-300 transition-colors cursor-pointer hover:ring-[2px] rounded-md hover:bg-gray-800 ring-zinc-500 p-1.5 font-medium">
            <Computer className="text-zinc-100 h-4 w-4" />
            AI
          </div>
          <div className="flex text-sm items-center gap-1 text-red-500 hover:text-red-600 transition-colors cursor-pointer hover:ring-[2px] rounded-md hover:bg-gray-800 ring-zinc-500 p-1.5 font-medium">
            <Trash className="text-red-500 h-4 w-4" />
            Delete
          </div>
          <button
            className="flex text-sm items-center gap-1 text-zinc-200 hover:text-slate-300 transition-colors cursor-pointer hover:ring-[2px] rounded-md hover:bg-gray-800 ring-zinc-500 p-1.5 font-medium"
            onClick={toggleArchive}
          >
            {isArchivedLoading ? (
              <Loader2 className="h-5 w-5 animate-spin text-zinc-200 self-center" />
            ) : (
              <>
                <Save className="text-zinc-300 h-4 w-4" />
                {!is_archived ? "Archive" : "Remove from Archives"}
              </>
            )}
          </button>
          <div className="flex text-sm items-center gap-1 text-zinc-200 hover:text-slate-300 transition-colors cursor-pointer hover:ring-[2px] rounded-md hover:bg-gray-800 ring-zinc-500 p-1.5 font-medium">
            <Clipboard className="text-zinc-300 h-4 w-4" />
            Copy
          </div>
          <div className="flex text-sm items-center gap-1 text-zinc-200 hover:text-slate-300 transition-colors cursor-pointer hover:ring-[2px] rounded-md hover:bg-gray-800 ring-zinc-500 p-1.5 font-medium">
            <Files className="text-zinc-300 h-4 w-4" />
            Duplicate
          </div>
          <div className="flex text-sm items-center gap-1 text-zinc-200 hover:text-slate-300 transition-colors cursor-pointer hover:ring-[2px] rounded-md hover:bg-gray-800 ring-zinc-500 p-1.5 font-medium">
            <LogIn className="text-zinc-300 h-4 w-4" />
            Log
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-1">
            {[...Array(ratings)].map((_, index) => (
              <StarIcon
                key={index}
                className="fill-yellow-400 text-yellow-400 h-6 w-6"
              />
            ))}
          </div>

          {type === "video" && video_url && (
            <video
              controls
              className="shadow-sm rounded-sm transition w-full h-auto"
              src={video_url}
              playsInline
            />
          )}

          {type === "text" && content && (
            <p className="text-lg text-zinc-100 font-light max-w-full whitespace-normal break-words line-clamp-3">
              {content}
            </p>
          )}

          <div className="flex items-center justify-between w-full">
            <div className="space-y-1.5">
              <h6 className="text-base font-medium text-zinc-100">
                Submitted by
              </h6>
              {type === "text" && user_photo ? (
                <div className="flex items-center gap-1.5 text-zinc-200">
                  <Image
                    src={user_photo}
                    alt={name}
                    width={32}
                    height={32}
                    quality={75}
                    className="rounded-full"
                    loading="lazy" // Lazy loading the image
                  />
                  {name}
                </div>
              ) : (
                <span className="text-zinc-200">{name}</span>
              )}
            </div>
            <div className="space-y-1.5 text-zinc-200">
              <h6 className="text-base font-medium text-zinc-100">
                Submitted at
              </h6>
              {date}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TestimonialCard;
