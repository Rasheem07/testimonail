"use client";
import { getSingleTextTestimonial } from "@/actions/fetchTestimonials";
import TestimonialCard from "@/components/cards/TextCard";
import LoadingSpinner from "@/components/ui/loader";
import { TestimonialProps } from "@/types/testimonials";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useQuery } from "react-query";

export default function Page({ params }: any) {
  const { space, id }: any = React.use(params);

  const { data: testimonial, isLoading } = useQuery<TestimonialProps>(id, () =>
    getSingleTextTestimonial(space, id)
  );

  useEffect(() => {
    console.log(testimonial);
  }, [testimonial]);

  return (
    <div className="w-full my-24 flex items-center justify-center max-w-[50%] mx-auto">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <TestimonialCard
          is_archived={testimonial?.is_archived!}
          space_name={space}
          id={testimonial?.id!}
          type="text"
          name={testimonial?.name!}
          date={testimonial?.date!}
          ratings={testimonial?.ratings!}
          content={testimonial?.content!}
          is_liked={testimonial?.is_liked!}
          user_photo={testimonial?.user_photo!}
        />
      )}
    </div>
  );
}
