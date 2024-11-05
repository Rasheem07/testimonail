// src/contexts/formContext.tsx
"use client"; // Important for Next.js

import { FormData, FormSchema, TextTestimonial, TextTestimonialSchema } from "@/lib/validations";
import React, { ReactNode } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type FormContextProviderProps = {
  children: ReactNode;
};

const dateDefault = new Date().toISOString().split('T')[0] as string;
// Default values for the TextTestimonial form
const defaultValues: TextTestimonial = {
  space_name: "", // Example default value, change as needed
  image_only: false,
  image_src: '', // Optional field, default to an empty string
  ratings: 5, // Default rating
  content: '', // Optional field, default to an empty string
  name: '', // Optional field, default to an empty string
  user_photo: '', // Optional field, default to an empty string
  date: dateDefault
};

const TextFormContextProvider = ({ children }: FormContextProviderProps) => {
  const methods = useForm<TextTestimonial>({
    resolver: zodResolver(TextTestimonialSchema),
    defaultValues
  });

  return <FormProvider {...methods}>{children}</FormProvider>; // Provide the form context to children
};

export default TextFormContextProvider;
