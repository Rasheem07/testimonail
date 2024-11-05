// src/contexts/formContext.tsx
"use client"; // Important for Next.js

import { VideoTestimonial, VideoTestimonialSchema } from "@/lib/validations";
import React, { ReactNode } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type FormContextProviderProps = {
  children: ReactNode;
};

const VideoFormContextProvider = ({ children }: FormContextProviderProps) => {
  const methods = useForm<VideoTestimonial>({
    resolver: zodResolver(VideoTestimonialSchema)
  });

  return <FormProvider {...methods}>{children}</FormProvider>; // Provide the form context to children
};

export default VideoFormContextProvider;
