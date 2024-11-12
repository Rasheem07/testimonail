// components/ProductPageClient.tsx

"use client";

import { TestimonialSpaceData } from "@/types/spacetype";
import { TestimonialProps } from "@/types/testimonials";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Lazy load the ProductPage component (client side only)
const ProductPage = dynamic(() => import("@/components/productPage"), {
  ssr: false, // Disables SSR for this component
  loading: () => (
    <div className="transition flex flex-col items-center justify-center my-32 gap-4 h-full w-full ">
      <div className="w-12 h-12 border-2 border-blue-400 border-t-transparent border-solid rounded-full animate-spin" />
      <h1 className="text-3xl text-zinc-100 font-medium">
        Your space is being loaded!
      </h1>
      <p className="text-zinc-200 font-sans text-base">
        Please wait! It will ready in a second.
      </p>
    </div>
  ),
});

export default function ProductPageClient({
  space,
  testimonials,
}: {
  space: TestimonialSpaceData;
  testimonials: TestimonialProps[];
}) {

  return <ProductPage space={space} testimonials={testimonials} />;
}
