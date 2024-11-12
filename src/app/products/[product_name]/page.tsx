import { fetchallSpace } from "@/actions/fetchAllSpaceData";
import { fetchSpaceData } from "@/actions/fetchSpaceData";
import { getAllTestimonials } from "@/actions/fetchTestimonials";
import { TestimonialSpaceData } from "@/types/spacetype";
import { TestimonialProps } from "@/types/testimonials";
import ProductPageClient from "./productPageclient";
import { Ghost } from "lucide-react";

export const revalidate = 60;
export const dynamicParams = true; // or false, to 404 on unknown paths

export async function generateStaticParams() {
  const spaces = await fetchallSpace();

  const space_names = spaces.map(
    (space: TestimonialSpaceData) => space.space_name
  );

  return space_names.map((space_name: string) => ({
    product_name: space_name,
  }));
}


export default async function Page({ params }: any) {
  const { product_name } = await params;
  try {
    var space = (await fetchSpaceData(product_name)) as TestimonialSpaceData;
    var testimonials = (await getAllTestimonials(
      product_name
    )) as TestimonialProps[];
  } catch (error) {
    console.error("Error fetching data:", error);
    // You can return null or display a fallback page to the user
    return (
      <div className="transition flex flex-col items-center justify-center my-24 gap-4 h-full w-full ">
        <Ghost className="h-24 w-24 text-zinc-200" />
        <h1 className="text-2xl text-red-100 font-medium">
          Something went wrong while retreiving your space.
        </h1>
        <p className="text-zinc-200 font-sans text-base space-x-2">
          Please try again!{" "}
          <span className="text-purple-600 underline underline-offset-1">
            Or report the problem here!
          </span>
        </p>
      </div>
    );
  }

  return <ProductPageClient space={space} testimonials={testimonials} />;
}
