"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Label from "@/components/ui/customlabel";
import { PencilLine, PencilOff, Star, Video, VideoIcon } from "lucide-react";
import Image from "next/image";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";
import { Cloud, File } from "lucide-react";
import Dropzone from "react-dropzone";
import { addVideoTestimonial } from "@/actions/addVideotestimonial";
import { toast } from "@/hooks/use-toast";
import StarRating from "./ui/starRating";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { queryClient } from "@/contexts/reactqueryProvider";
import { revalidateTestimonials } from "@/app/actions";

interface Props {
  logo: string | StaticImport;
  space_name: string;
  hiddenButton?: boolean;
}

export function AddVideotestimonial({ logo, space_name, hiddenButton }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  useEffect(() => {
    setValue("space_name", space_name);
  }, [space_name, setValue]);

  const onSubmit: SubmitHandler<any> = async (data) => {
    // Log each key-value pair to avoid serialization issues
    console.log("Form Data:", data);
    const response = await addVideoTestimonial(data);
    if (response.error) {
      toast({
        title: response.error,
        description: "Please try again",
        variant: "destructive",
      });
    } else if(response.json) {
      toast({
        title: "text testimonial added successfully!",
        description: "You can view your testimonials at product page.",
        variant: "default",
      });
      await revalidateTestimonials()
      setIsOpen(false); // Close the dialog
    }
  };

  const [errorMessage, setErrorMessage] = useState("");

  const handleVideoDrop = async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];

    if (file) {
      const videoDuration = await getVideoDuration(file);
      console.log(videoDuration);
      if (videoDuration > 120) {
        // 120 seconds = 2 minutes
        toast({
          title: "Video length exceeds!",
          description: "The video must be less than 2 minutes in duration.",
          variant: "destructive",
        });
      } else {
        setErrorMessage(""); // Clear any previous error messages
        setValue("video", file);
        setValue("duration", videoDuration);
      }
    }
  };

  const getVideoDuration = (file: File): Promise<number> => {
    return new Promise((resolve, reject) => {
      const video = document.createElement("video");
      video.preload = "metadata";
      video.src = URL.createObjectURL(file);

      video.onloadedmetadata = () => {
        resolve(video.duration);
      };

      video.onerror = () => {
        reject(new Error("Error loading video metadata."));
      };
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {hiddenButton ? (
          <div className="flex items-center gap-1.5 px-4 py-2 hover:bg-gray-700 cursor-pointer transition duration-150">
            <Video className="h-4 w-4 text-zinc-200 hover:text-gray-800" />
            <span className="text-zinc-200 hover:text-gray-100">
              Add a video
            </span>
          </div>
        ) : (
          <span
            className="bg-purple-600 text-zinc-100 py-2 px-4 text-sm rounded-md shadow-md flex items-center gap-1.5 hover:opacity-90 border-none"
          >
            <VideoIcon className="h-5 w-5" />
            Add video
          </span>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md max-h-[90vh] space-y-4">
        <DialogHeader className="space-y-3">
          <DialogTitle>Add a video testimonial to</DialogTitle>
          <DialogDescription className="flex gap-2.5 items-center">
            <Image src={logo} alt={space_name} width={32} height={32} />
            <span className="text-base font-semibold text-gray-800">
              {space_name}
            </span>
          </DialogDescription>
        </DialogHeader>
        <Dropzone multiple={false} onDrop={handleVideoDrop}>
          {({ getRootProps, getInputProps, acceptedFiles }) => (
            <div
              {...getRootProps()}
              className="border h-64 m-4 border-dashed border-gray-400 rounded-lg"
            >
              <div className="flex items-center justify-center h-full w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Cloud className="h-6 w-6 text-zinc-500 mb-2" />
                    <p className="8mb-2 text-sm text-zinc-700">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-zinc-500">Video (up to 2MB)</p>
                  </div>

                  {acceptedFiles && acceptedFiles[0] ? (
                    <div className="max-w-xs bg-white flex items-center rounded-md overflow-hidden outline outline-[1px] outline-zinc-200 divide-x divide-zinc-200">
                      <div className="px-3 py-2 h-full grid place-items-center">
                        <File className="h-4 w-4 text-blue-500" />
                      </div>
                      <div className="px-3 py-2 h-full text-sm truncate">
                        {acceptedFiles[0].name}
                      </div>
                    </div>
                  ) : null}

                  <input
                    {...getInputProps()}
                    type="file"
                    id="dropzone-file"
                    className="hidden"
                    accept="video/*"
                  />
                </label>
              </div>
            </div>
          )}
        </Dropzone>
        <div className="flex flex-col gap-2 px-3">
          <StarRating name="ratings" />
          <div className="flex gap-2">
            <Label label="Name" />
            <input
              type="text"
              {...register("name")}
              className="min-h-full w-full outline-blue-500 py-2 text-base px-3 text-gray-800 placeholder:font-sans border border-gray-300 placeholder:text-zinc-600 rounded-md gray-50 transition"
              placeholder="Enter the author's name"
            />
          </div>
        </div>
        <Button type="submit" onClick={handleSubmit(onSubmit)}>
          Save changes
        </Button>
      </DialogContent>
    </Dialog>
  );
}
