// src/contexts/formContext.tsx
"use client"; // Important for Next.js

import { FormData, FormSchema } from "@/lib/validations";
import React, { ReactNode } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type FormContextProviderProps = {
  children: ReactNode;
};

const FormContextProvider = ({ children }: FormContextProviderProps) => {
  const methods = useForm<FormData>({
    defaultValues: {
      spaces: {
        space_name: "",
        header_title: "",
        custom_message: "",
        questions: [
          "hello, how are you?",
          "how the fuck is your life?"
        ],
        collection_type: "text and video",
        collect_star_ratings: false,
        allow_custom_btn_color: false,
        custom_btn_color: "",
        language: "english",
      },
      thank_page: {
        image: "/gifs/thankyou.gif",
        title: "THANK YOU!",
        message:
          "Thank you so much for your shoutout! It means a ton for us! 🙏",
        allow_social: false,
        redirect_url: "",
        reward_video: false,
      },
      extra_settings: {
        max_duration: 120,
        max_char: 0,
        video_btn_text: "Record a video",
        text_btn_text: "Send in text",
        consent_display: "required",
        consent_statement: "I give permission to use this testimonial",
        text_submission_title: "Title",
        questions_label: "Questions",
        default_text_testimonial_avatar: "",
        affiliate_link: "",
        third_party: {},
        auto_populate_testimonials_to_the_wall_of_love: false,
        disable_video_recording_for_iphone_users: false,
        allow_search_engines_to_index_your_page: false,
      },
      logo: ""
    },
    resolver: zodResolver(FormSchema),
  }); // Initialize the useForm hook

  return <FormProvider {...methods}>{children}</FormProvider>; // Provide the form context to children
};

export default FormContextProvider;
