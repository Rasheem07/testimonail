"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Input from "@/components/ui/CustomInput";
import Label from "@/components/ui/customlabel";
import { PencilLine, PencilOff, Star, Text, Video } from "lucide-react";
import Image from "next/image";
import Switch from "./ui/FormSwitch";
import TextareaGroup from "./formGroups/TextareaGroup";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { DatePicker } from "./ui/datapicker";
import StarRating from "./ui/starRating";
import { useEffect, useState } from "react";
import { SubmitHandler, useFormContext } from "react-hook-form";
import InputGroup from "./formGroups/InputGroup";
import { addTestimonial } from "@/actions/addTestimonial";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { toast } from "@/hooks/use-toast";
import { useProductContext } from "@/contexts/productContext";
import { queryClient } from "@/contexts/reactqueryProvider";
import { revalidatePath, revalidateTag } from "next/cache";
import { revalidateTestimonials } from "@/app/actions";

interface Props {
  logo: string | StaticImport;
  space_name: string;
  dropwdown?: string;
  hiddenButton?: boolean;
}
export function Addtestimonial({ logo, space_name, hiddenButton }: Props) {
  const [imagetype, setimagetype] = useState("file");
  const [userimagetype, setuserimagetype] = useState("file");

  const handleselectimage = () => {
    if (imagetype === "file") {
      setValue("image_src", "");
      setimagetype("url");
    } else {
      setimagetype("file");
    }
  };

  const handleselectuserimage = () => {
    if (userimagetype === "file") {
      setValue("user_photo", "");
      setuserimagetype("url");
    } else {
      setuserimagetype("file");
    }
  };

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    setValue("space_name", space_name);
  }, [space_name, setValue]);

  useEffect(() => {
    if (errors) console.log(errors);
  }, [errors]);

  const onSubmit: SubmitHandler<any> = async (data) => {
    const response = await addTestimonial(data);
    if (response.error) {
      toast({
        title: response.error,
        description: "Please try again",
        variant: "destructive",
      });
    } else if (response.json) {
      await queryClient.invalidateQueries("testimonials");
      setTimeout(async () => {
        await queryClient.invalidateQueries("testimonials");
      }, 5000);
      toast({
        title: "text testimonial added successfully!",
        description: "You can view your testimonials at product page.",
        variant: "default",
      });
    }
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const file = event.target.files?.[0]; // Get the first file only
    if (file) {
      setValue(name, file); // Set the value in react-hook-form
    }
  };

  return (
    <Dialog>
      <DialogTrigger className="w-full">
        {hiddenButton ? (
          <div className="w-full flex items-center gap-1.5 px-4 py-2 hover:bg-gray-700 cursor-pointer transition duration-150">
            <Text className="h-4 w-4 text-zinc-200 hover:text-gray-800" />
            <span className="text-zinc-200 hover:text-gray-100">
              Add a text
            </span>
          </div>
        ) : (
          <span
            className={`bg-purple-600 text-zinc-100  ${
              hiddenButton ? "hidden" : "flex"
            } py-2 px-4 text-sm rounded-md shadow-md items-center gap-1.5 hover:opacity-90 border-none`}
          >
            <PencilLine className="h-5 w-5" />
            Add text
          </span>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-scroll space-y-3">
        <DialogHeader className="space-y-3">
          <DialogTitle>Add a testimonial to</DialogTitle>
          <DialogDescription className="flex gap-2.5 items-center">
            <Image src={logo} alt={space_name} width={32} height={32} />
            <span className="text-base font-semibold text-gray-800">
              {space_name}
            </span>
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-4" encType="multipart/form-data">
          <div className="flex items-center gap-2.5">
            <Switch name="image_only" />
            <p className="text-sm text-gray-800">Image only</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2.5">
              <StarRating name="ratings" />
              <TextareaGroup
                label="Your testimonial"
                name="content"
                placeholder="Enter the name"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label label="Attach an image (optional)" />
              <div className="flex divide-x divide-zinc-300 flex-0 w-min border border-gray-300 shadow-sm rounded-md">
                <Select onValueChange={handleselectimage}>
                  <SelectTrigger className="w-auto rounded-l-md rounded-r-none outline-none focus:border border-blue-500 px-4">
                    <SelectValue placeholder="File" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">File</SelectItem>
                    <SelectItem value="dark">URL</SelectItem>
                  </SelectContent>
                </Select>
                {imagetype === "file" ? (
                  <div className="min-h-full py-2 bg-gray-50 hover:bg-gray-100 text-sm text-gray-700 min-w-[50%] flex items-center cursor-pointer justify-center rounded-r-md rounded-l-none relative px-4 transition">
                    Choose
                    <input
                      className="opacity-0 inset-y-0 z-[999] inset-x-0 absolute cursor-pointer"
                      type="file"
                      onChange={(event) => handleFileChange(event, "image_src")}
                      multiple={false}
                    />
                  </div>
                ) : (
                  <input
                    type="text"
                    {...register("image_src")}
                    className="min-h-full outline-blue-500  py-1.5 text-sm  px-3 text-gray-800 placeholder:font-sans placeholder:text-zinc-600 rounded-r-md rounded-l-none bg-gray-50 transition"
                    placeholder="Enter the user's name"
                  />
                )}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <InputGroup
                name="name"
                placeholder="Enter the author's name"
                label="Name"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label label="Upload your user's photo" />
              <div className="flex divide-x divide-zinc-300 flex-0 w-min border border-gray-300 shadow-sm rounded-md">
                <Select onValueChange={handleselectuserimage}>
                  <SelectTrigger className="w-auto rounded-l-md rounded-r-none outline-none focus:border border-blue-500 px-4">
                    <SelectValue placeholder="File" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">File</SelectItem>
                    <SelectItem value="dark">URL</SelectItem>
                  </SelectContent>
                </Select>
                {userimagetype === "file" ? (
                  <div className="min-h-full py-2 bg-gray-50 hover:bg-gray-100 text-sm text-gray-700 min-w-[50%] flex items-center cursor-pointer justify-center rounded-r-md rounded-l-none relative px-4 transition">
                    Choose
                    <input
                      className="opacity-0 inset-y-0 z-[999] inset-x-0 absolute cursor-pointer"
                      type="file"
                      onChange={(event) =>
                        handleFileChange(event, "user_photo")
                      }
                      multiple={false}
                    />
                  </div>
                ) : (
                  <input
                    type="text"
                    {...register("user_photo")}
                    className="min-h-full outline-blue-500  py-1.5 text-sm  px-3 text-gray-800 placeholder:font-sans placeholder:text-zinc-600 rounded-r-md rounded-l-none bg-gray-50 transition"
                    placeholder="Enter the image url"
                  />
                )}
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <Label label="Date" />
              <DatePicker />
            </div>
          </div>
        </form>
        <Button type="submit" onClick={handleSubmit(onSubmit)}>
          Save changes
        </Button>
      </DialogContent>
    </Dialog>
  );
}
