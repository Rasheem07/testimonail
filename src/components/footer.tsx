import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="px-4 sm:px-6 py-12 md:py-16 w-full max-w-7xl">
      <div className="grid md:grid-cols-12 gap-8 lg:gap-20">
        <div className="md:col-span-3 lg:col-span-4">
          <div className="flex flex-col gap-2">
            <Image src="/logo.svg" alt="" width={200} height={150} />
            <p className="text-base font-sans text-zinc-400 tracking-wide">
              The easiest solution to getting text and video testimonials from
              your customers
            </p>
          </div>
        </div>

        <div className="md:col-span-9 lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div className="text-sm">
            <h6 className="text-lg font-semibold text-zinc-100 uppercase mb-2.5">
              products
            </h6>
            <ul className="list-none space-y-1.5">
              <li className="text-zinc-400 hover:text-zinc-100 transition duration-150 ease-in-out">
                Our wall of love
              </li>
              <li className="text-zinc-400 hover:text-zinc-100 transition duration-150 ease-in-out">
                Chrome extension
              </li>
              <li className="text-zinc-400 hover:text-zinc-100 transition duration-150 ease-in-out">
                Stack app
              </li>
              <li className="text-zinc-400 hover:text-zinc-100 transition duration-150 ease-in-out">
                Hopin app
              </li>
              <li className="text-zinc-400 hover:text-zinc-100 transition duration-150 ease-in-out">
                Pricing
              </li>
              <li className="text-zinc-400 hover:text-zinc-100 transition duration-150 ease-in-out">
                Features
              </li>
              <li className="text-zinc-400 hover:text-zinc-100 transition duration-150 ease-in-out">
                Integrations
              </li>
              <li className="text-zinc-400 hover:text-zinc-100 transition duration-150 ease-in-out">
                Help center
              </li>
              <li className="text-zinc-400 hover:text-zinc-100 transition duration-150 ease-in-out">
                Product demo
              </li>
              <li className="text-zinc-400 hover:text-zinc-100 transition duration-150 ease-in-out">
                Status page
              </li>
            </ul>
          </div>

          <div className="text-sm">
            <h6 className="text-lg font-semibold text-zinc-100 uppercase mb-2.5">
              Company
            </h6>
            <ul className="list-none space-y-1.5">
              <li className="text-zinc-400 hover:text-zinc-100 transition duration-150 ease-in-out">
                Our resources
              </li>
              <li className="text-zinc-400 hover:text-zinc-100 transition duration-150 ease-in-out">
                Tutorials
              </li>
              <li className="text-zinc-400 hover:text-zinc-100 transition duration-150 ease-in-out">
                Customer stories
              </li>
              <li className="text-zinc-400 hover:text-zinc-100 transition duration-150 ease-in-out">
                Join affiliate program
              </li>
              <li className="text-zinc-400 hover:text-zinc-100 transition duration-150 ease-in-out">
                Privacy policy
              </li>
              <li className="text-zinc-400 hover:text-zinc-100 transition duration-150 ease-in-out">
                Terms of services
              </li>
              <li className="text-zinc-400 hover:text-zinc-100 transition duration-150 ease-in-out">
                Cookie policy
              </li>
              <li className="text-zinc-400 hover:text-zinc-100 transition duration-150 ease-in-out">
                DPA (GDPR)
              </li>
              <li className="text-zinc-400 hover:text-zinc-100 transition duration-150 ease-in-out">
                Contact us
              </li>
            </ul>
          </div>

          <div className="text-sm">
            <h6 className="text-lg font-semibold text-zinc-100 uppercase mb-2.5">
              Customers
            </h6>
            <ul className="list-none space-y-1.5">
              <li className="text-zinc-400 hover:text-zinc-100 transition duration-150 ease-in-out">
                Agencies
              </li>
              <li className="text-zinc-400 hover:text-zinc-100 transition duration-150 ease-in-out">
                B2B Companies
              </li>
              <li className="text-zinc-400 hover:text-zinc-100 transition duration-150 ease-in-out">
                Course creators
              </li>
              <li className="text-zinc-400 hover:text-zinc-100 transition duration-150 ease-in-out">
                eCommerce
              </li>
              <li className="text-zinc-400 hover:text-zinc-100 transition duration-150 ease-in-out">
                Consumer apps
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-1.5">
            <h6 className="text-lg font-semibold text-zinc-100 uppercase mb-2.5">
              Latest video
            </h6>
            <Image
              src="/lastest-video.png"
              alt=""
              height={100}
              width={150}
              className="rounded-lg shadow-md"
            />
            <p className="text-base text-zinc-400 font-sans">
              AI space creator in testimonial
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
