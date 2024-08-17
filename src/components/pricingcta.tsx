import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Twocols from './wrappers/twoCols'

export default function PricingCta() {
  return (
    <div className="py-24">
        <div className="max-w-3xl text-center mx-auto flex flex-col items-center">
          <h1 className="mb-4 text-[40px] font-bold leading-[1.1] text-white">
            Ready to collect testimonials?
          </h1>
          <p className="text-xl mb-8 text-zinc-400">
            We are loved by Fortune 500 companies, early-stage startups,
            marketing agencies, real estate agents, freelancers, and many more.
            Your customers&apos; testimonials are the best social proof you can
            get! Get started now 👇
          </p>

          <Twocols className="lg:gap-8 gap-4 py-4 md:py-0">
            <div className="flex items-center justify-end gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-5 text-green-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p className="text-zinc-100 text-sm font-sans">
                No coding skills required.
              </p>
            </div>
            <div className="flex items-center justify-start gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-5 w-5 text-green-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p className="text-zinc-100 text-sm font-sans">
                Start in under 2 minutes.
              </p>
            </div>
          </Twocols>


          <div className="flex flex-col md:flex-row items-center gap-5 justify-center mt-5">
            <button className="px-6 py-3 rounded-lg shadow-md text-base font-medium text-white bg-purple-600 w-full max-w-fit hover:scale-105">
              Get started with FREE credits
            </button>
            <button className="px-6 py-3 rounded-lg shadow-inner border border-purple-600 text-base font-semibold text-white w-full flex items-center gap-2 max-w-fit hover:scale-105">
              Talk to Us{" "}
              <div className="flex items-center -space-x-1.5">
                <Image
                  src="/dp1.png"
                  alt=""
                  height={20}
                  width={20}
                  className="rounded-full shadow-inner w-[25px] h-[25px]"
                />
                <Image
                  src="/dp2.jpg"
                  alt=""
                  height={20}
                  width={20}
                  className="rounded-full shadow-inner w-[25px] h-[25px]"
                />
                <Image
                  src="/dp3.png"
                  alt=""
                  height={20}
                  width={20}
                  className="rounded-full shadow-inner w-[25px] h-[25px]"
                />
                <Image
                  src="/dp4.png"
                  alt=""
                  height={20}
                  width={20}
                  className="rounded-full shadow-inner w-[25px] h-[25px]"
                />
              </div>
            </button>
          </div>

          <span className="underline underline-offset-1 font-semibold text-gray-300/90 flex items-center cursor-pointer text-center mt-2.5">
            {" "}
            See our pricing
            <ArrowRightIcon className="h-4 w-4 text-gray-300" />
          </span>

        </div>
      </div>
  )
}
