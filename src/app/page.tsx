"use client";
import Call_to_actions from "@/components/features";
import CardStack from "@/components/cardstack";
import Code from "@/components/code";
import Logo from "@/components/logo";
import Playbtn from "@/components/ui/playbtn";
import Twocols from "@/components/wrappers/twoCols";
import {
  ArrowRightIcon,
  ChevronRight,
  CircleCheck,
  Copy,
  HelpCircle,
  HomeIcon,
  MessageCircle,
  MessageSquare,
  Play,
  Search,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import Features from "@/components/features";
import PricingCta from "@/components/pricingcta";
import { Chatbot } from "@/components/chatbot";
import { useRouter } from "next/navigation";
import { getCookies } from "@/helpers/getCookies";
import { chatbotContext } from "@/contexts/ChatBotContext";
import { useLoginStatus } from "@/hooks/useLoginStatus";
import { useAuth } from "@/contexts/authContext";

const fetchasync = async (fetchLoginStatus: any) => {
  await fetchLoginStatus();
};

export default function Home() {
  const playbuttonref = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [status, setstatus] = useState(
    typeof window != "undefined" &&
      localStorage.getItem("isLoggedIn") === "true"
  );

  const context = useContext(chatbotContext);
  const { isChatbot, setIsChatbot } = context;

  const router = useRouter();

  const playVideoOnclickPlaybtn = () => {
    if (videoRef.current?.paused) {
      videoRef.current.play();
    } else {
      videoRef.current?.pause();
    }
  };

  useEffect(() => {
    if (status) {
      router.push("/dashboard");
    }

    (async () => {
      try {
        const response = await fetch("https://testimonial-server-kiqu.onrender.com/get/csrf-token", {
          method: "GET",
          credentials: "include", // Ensure cookies are included with the request
        });

        if (!response.ok) {
          throw new Error("Failed to fetch CSRF token");
        }
      } catch (error) {
        console.error("Error fetching CSRF token:", error);
      }
    })();

    const handlePlay = () => {
      if (playbuttonref.current) {
        playbuttonref.current.style.display = "none";
      }
    };

    const handlePause = () => {
      if (playbuttonref.current) {
        playbuttonref.current.style.display = "block";
      }
    };

    const videoElement = videoRef.current;
    videoElement?.addEventListener("play", handlePlay);
    videoElement?.addEventListener("pause", handlePause);

    // Cleanup event listeners on component unmount
    return () => {
      videoElement?.removeEventListener("play", handlePlay);
      videoElement?.removeEventListener("pause", handlePause);
    };
  }, [, router, status]);

  const openChatbot = () => {
    setIsChatbot(true);
  };

  return (
    <main className="mx-auto w-full max-w-screen-xl px-5 md:px-20 pt-20">
      <div className="max-w-4xl mx-auto text-center space-y-5 pb-16 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-[52px] leading-[1.1] font-bold text-white">
          Get testimonials from your customers with ease
        </h1>
        <p className="md:text-xl text-lg font-sans text-zinc-400">
          Collecting testimonials is hard, we get it! So we built Testimonial.
          In minutes, you can collect text and video testimonials from your
          customers with no need for a developer or website hosting.
        </p>
        <div className="flex justify-center flex-1 w-full mt-3">
          <div className="flex items-center flex-1 justify-center gap-4 max-w-fit">
            <button className="px-6 py-3 rounded-lg shadow-md text-base font-semibold text-white bg-purple-600 w-full max-w-fit hover:scale-105">
              Try FREE now
            </button>
            <button
              onClick={openChatbot}
              className="px-6 py-3 rounded-lg shadow-inner border border-purple-600 text-base font-semibold text-white w-full flex items-center gap-2 max-w-fit hover:scale-105"
            >
              Talk to Us{" "}
              <div className="hidden md:flex items-center -space-x-1.5">
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
        </div>
        <p className="text-slate-400 text-sm font-medium flex items-center justify-center w-full">
          Get start with free credits on us.{"  "}
          <span className="underline underline-offset-1 font-semibold text-gray-300/90 flex items-center cursor-pointer">
            {" "}
            See our pricing
            <ArrowRightIcon className="h-4 w-4 text-gray-300" />
          </span>
        </p>
      </div>
      <div className="h-full w-full relative pb-16">
        <div className="absolute -top-20 right-0">
          <h4 className="text-base text-zinc-300">
            Our customer{" "}
            <span className="underline underline-offset-1 font-medium">
              Chris Lema
            </span>
          </h4>

          <svg
            width="40"
            height="100%"
            viewBox="0 0 68 77"
            className="fill-current text-purple-600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M36.4058 21.9334L41.1332 16.3559C39.2314 17.9379 37.6704 19.8143 36.4058 21.9334ZM23.1688 30.9494C25.2167 29.029 27.1793 27.057 29.4146 25.3858C26.7801 26.6313 24.9064 28.7351 23.1688 30.9494ZM33.2576 34.8628C33.7854 35.8059 34.3218 35.3399 34.8298 34.9399C36.5485 33.5884 36.678 31.5876 36.7834 29.6735C36.8603 28.2784 36.7645 26.8185 36.0412 25.5301C35.7657 25.0387 35.412 24.7259 34.9817 25.4387C33.8074 27.3851 32.9252 29.4359 32.76 31.7319C32.6813 32.8257 32.8093 33.9015 33.2576 34.8628ZM30.044 26.4983C28.4758 27.3028 27.2555 28.5674 26.0094 29.7814C20.6252 35.0274 17.2489 41.4539 14.905 48.5197C13.3395 53.2397 12.2395 58.0626 11.3075 62.9339C11.2221 63.3783 11.1535 63.8311 10.8458 64.1895C10.4999 64.592 10.1735 64.7341 10.044 64.0384C10.0116 63.8672 10.1324 63.62 9.81447 63.6931C8.71764 63.9447 8.57833 63.1202 8.38728 62.4074C8.02827 61.0698 8.27652 59.7088 8.39131 58.3751C8.71242 54.6385 9.17526 50.9104 10.1232 47.2754C11.0034 43.9008 12.3627 40.6916 13.8111 37.5224C14.7331 35.505 15.6989 33.4657 17.2506 31.8988C18.2815 30.8578 18.8385 29.5395 19.8363 28.51C21.7493 26.5365 23.6757 24.5912 25.9913 23.0773C27.8973 21.8315 29.9825 21.148 32.2609 21.1387C33.0121 21.1359 33.5561 20.852 33.993 20.285C35.171 18.7574 36.4016 17.263 37.6421 15.7973C39.6599 13.4123 42.0469 11.3584 44.4974 9.40976C48.406 6.30179 52.5732 3.62757 57.3413 2.00582C60.1437 1.05265 62.9687 0.295021 65.9574 1.11102C66.7443 1.32581 67.4328 1.66676 67.8401 2.42598C68.016 2.75297 68.0549 3.05479 67.8179 3.37093C67.5375 3.74424 67.3526 3.49944 67.042 3.35738C64.9118 2.3824 62.9132 3.24742 60.9212 3.90867C55.4318 5.7307 50.8176 9.01166 46.4398 12.6746C43.0898 15.4778 40.0455 18.5808 37.3679 22.0365C37.1552 22.3109 36.7658 22.5228 37.3009 22.9146C39.1654 24.2792 40.116 26.2265 40.5107 28.4278C41.1203 31.8255 40.7845 35.0594 38.2512 37.6832C36.8901 39.0932 35.496 39.1912 33.7364 38.3538C29.2533 36.221 28.3904 31.6356 29.8533 27.7477C29.9848 27.3997 30.1159 27.0518 30.2468 26.7046C30.1792 26.6355 30.1114 26.567 30.044 26.4983Z"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.7396 69.066C11.1773 70.7696 9.87903 72.6455 8.96903 74.7731C10.2258 72.8709 11.4825 70.9684 12.7396 69.066ZM4.16018 63.3217C5.28587 65.375 6.04163 67.5845 6.8814 69.7589C7.00686 70.0839 6.98214 70.5315 7.50699 70.5757C8.01112 70.618 8.14131 70.2023 8.2923 69.9013C9.11672 68.2617 10.3763 66.9558 11.4775 65.5213C12.1728 64.6148 12.7024 63.5696 13.4452 62.6601C14.5892 61.2601 15.6297 59.7727 16.6756 58.2955C17.2058 57.547 18.0634 57.0791 18.326 56.0843C18.5838 55.1085 19.3593 54.91 20.7139 55.5058C21.4054 55.8096 21.9699 56.4212 21.6002 57.3018C21.2961 58.026 20.9306 58.7392 20.4918 59.389C17.5869 63.6895 14.6474 67.9665 11.7376 72.2636C11.0844 73.228 10.4955 74.2376 9.88906 75.2334C8.78653 77.0441 7.96815 77.2015 6.16577 76.0678C4.76664 75.1877 3.99186 73.9692 3.66283 72.3613C3.02909 69.2664 2.30718 66.1894 1.09654 63.2558C0.853796 62.668 0.528696 62.1149 0.262714 61.5357C-0.0458552 60.8654 0.158774 60.5306 0.921301 60.5897C2.61148 60.7196 2.87504 60.94 4.16018 63.3217Z"
            ></path>
          </svg>
        </div>
        <video
          ref={videoRef}
          src="/high.mp4"
          controls
          poster="/poster.jpeg"
          height={100}
          width={100}
          playsInline
          preload="none"
          className="h-full w-full"
        />
        <Playbtn playbtnref={playbuttonref} onclick={playVideoOnclickPlaybtn} />
      </div>
      <div className=" w-full flex flex-col items-center pb-16 border-b border-gray-600">
        <h1 className="text-2xl font-semibold text-zinc-200 uppercase mb-5">
          trusted customers
        </h1>
        <div className="grid grid-cols-5 gap-5 grid-flow-row items-center w-full">
          <div className="col-span-1 flex justify-center">
            <Image
              loading="lazy"
              src="/logo1.png"
              alt=""
              height={100}
              width={100}
              className="object-contain h-10"
            />
          </div>
          <div className="col-span-1 flex justify-center">
            <Image
              loading="lazy"
              src="/logo2.png"
              alt=""
              height={100}
              width={100}
              className="object-contain h-10"
            />
          </div>
          <div className="col-span-1 flex justify-center">
            <Image
              loading="lazy"
              src="/logo3.svg"
              alt=""
              height={100}
              width={100}
              className="object-contain h-10"
            />
          </div>
          <div className="col-span-1 flex justify-center">
            <Image
              loading="lazy"
              src="/logo4.png"
              alt=""
              height={100}
              width={100}
              className="object-contain h-10"
            />
          </div>
          <div className="col-span-1 flex justify-center">
            <Image
              loading="lazy"
              src="/logo5.png"
              alt=""
              height={100}
              width={100}
              className="object-contain h-10"
            />
          </div>
          <div className="col-span-1 flex justify-center">
            <Image
              loading="lazy"
              src="/logo6.svg"
              alt=""
              height={100}
              width={100}
              className="object-contain h-10"
            />
          </div>
          <div className="col-span-1 flex justify-center">
            <Image
              loading="lazy"
              src="/logo7.svg"
              alt=""
              height={100}
              width={100}
              className="object-contain h-10"
            />
          </div>
          <div className="col-span-1 flex justify-center">
            <Image
              loading="lazy"
              src="/logo8.svg"
              alt=""
              height={100}
              width={100}
              className="object-contain h-10"
            />
          </div>
          <div className="col-span-1 flex justify-center">
            <Image
              loading="lazy"
              src="/logo9.svg"
              alt=""
              height={100}
              width={100}
              className="object-contain h-10"
            />
          </div>
          <div className="col-span-1 flex justify-center">
            <Image
              loading="lazy"
              src="/logo10.png"
              alt=""
              height={100}
              width={100}
              className="object-contain h-10"
            />
          </div>
        </div>
      </div>
      <div className="py-16 space-y-16 border-b-[1.5px] border-solid border-gray-800">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <h1 className="text-4xl md:text-[52px] leading-[1.1] font-bold text-white">
            Add testimonials to your website with no coding!
          </h1>
          <p className="text-lg md:text-xl font-sans text-zinc-400">
            Copy and paste our HTML code to add the Wall Of Love{" "}
            <Link
              href=""
              className="underline underline-offset-1 font-semibold"
            >
              (👉 full version)
            </Link>{" "}
            to your website. We support any no-code platform (Webflow,
            WordPress, you name it!)
          </p>
        </div>
        <CardStack />
        <div className="flex flex-col items-center flex-1 space-y-8">
          <Logo />
          <div className="bg-[rgb(31,45,61)] shadow rounded-lg px-6 py-4 w-full max-w-3xl ">
            <div className="pb-3">
              <h2 className="text-zinc-200 font-semibold text-xl">
                Try our sample embed code
              </h2>
              <p className="text-base text-zinc-300 ">
                Embed the wall of love to your website in 1 minute
              </p>
            </div>
            <Code />
            <div className="flex items-center gap-4 pt-3">
              <button className="py-2 px-5 flex items-center text-sm gap-1.5 bg-blue-100 rounded-md shadow-md outline-none hover:bg-blue-200 transition-colors text-blue-700 font-medium">
                <Copy className="h-4 w-4 text-blue-700" />
                copy the code
              </button>
              <button className="py-2 px-5 flex items-center  text-sm gap-1.5 bg-orange-100 rounded-md shadow-md outline-none hover:bg-orange-200 transition-colors text-orange-700">
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      <Features />

      <div className="py-24 space-y-16">
        <div className="space-y-4 md:space-y-2 text-center max-w-4xl mx-auto">
          <h1 className="text-[52px] leading-[1.1] font-bold text-white">
            Integrate with any platform
          </h1>
          <p className="text-zinc-400 text-xl md:text-xl">
            We built the ultimate tool for showcasing your satisfied customers.
            With 3-lines of HTML code, you can embed all your testimonials to
            any platform!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-flow-row gap-6">
          <div className="rounded-lg shadow-md bg-zinc-100 py-4 px-6 flex items-center justify-center">
            <Image
              src="/integrations logos/webflow.png"
              alt=""
              width={809}
              height={204}
              className="w-44 h-10 max-w-full object-contain"
            />
          </div>
          <div className="rounded-lg shadow-md bg-zinc-100 py-4 px-6 flex items-center justify-center">
            <Image
              src="/integrations logos/shopify.png"
              alt=""
              width={809}
              height={204}
              className="w-44 h-10 max-w-full object-contain"
            />
          </div>
          <div className="rounded-lg shadow-md bg-zinc-100 py-4 px-6 flex items-center justify-center">
            <Image
              src="/integrations logos/carrd.png"
              alt=""
              width={809}
              height={204}
              className="w-44 h-10 max-w-full object-contain"
            />
          </div>
          <div className="rounded-lg shadow-md bg-zinc-100 py-4 px-6 flex items-center justify-center">
            <Image
              src="/integrations logos/wordpress.png"
              alt=""
              width={809}
              height={204}
              className="w-44 h-10 max-w-full object-contain"
            />
          </div>
          <div className="rounded-lg shadow-md bg-zinc-100 py-4 px-6 flex items-center justify-center">
            <Image
              src="/integrations logos/kajabi.svg"
              alt=""
              width={809}
              height={204}
              className="w-44 h-10 max-w-full object-contain"
            />
          </div>
          <div className="rounded-lg shadow-md bg-zinc-100 py-4 px-6 flex items-center justify-center">
            <Image
              src="/integrations logos/bubble.svg"
              alt=""
              width={809}
              height={204}
              className="w-44 h-10 max-w-full object-contain"
            />
          </div>
          <div className="rounded-lg shadow-md bg-zinc-100 py-4 px-6 flex items-center justify-center">
            <Image
              src="/integrations logos/framer.png"
              alt=""
              width={809}
              height={204}
              className="w-44 h-10 max-w-full object-contain"
            />
          </div>
          <div className="rounded-lg shadow-md bg-zinc-100 py-4 px-6 flex items-center justify-center">
            <Image
              src="/integrations logos/squarespace.jpeg"
              alt=""
              width={809}
              height={204}
              className="w-44 h-10 max-w-full object-contain mix-blend-multiply"
            />
          </div>
        </div>

        <p className="text-zinc-200 font-medium tracking-wide text-lg underline underline-offset-2 cursor-pointer mx-auto text-center">
          ✨ See all 100+ integrations
        </p>
      </div>

      <div className="bg-[#FFFBEB] rounded-lg shadow-md py-14 px-4 md:px-12 w-full space-y-8 relative">
        <div className="flex items-center gap-1.5">
          <Star className="h-5 w-5 text-purple-600 fill-purple-600" />
          <Star className="h-5 w-5 text-purple-600 fill-purple-600" />
          <Star className="h-5 w-5 text-purple-600 fill-purple-600" />
          <Star className="h-5 w-5 text-purple-600 fill-purple-600" />
          <Star className="h-5 w-5 text-purple-600 fill-purple-600" />
        </div>
        <p className="text-xl md:text-2xl font-bold text-gray-900">
          We embedded Testimonial.to on the last page of our Prehireforms
          (candidates&apos; skills assessment forms) and candidates&apos;
          testimonials started coming in automatically! Testimonials collection
          is now automated and we don&apos;t need to ask customers or candidates
          to drop us testimonials anymore!
        </p>

        <div className="flex gap-2.5 md:gap-4 items-center">
          <Image
            src="/avatars/kamLing"
            alt=""
            height={75}
            width={75}
            className="object-cover  shadow-inner rounded-full"
          />
          <div className="space-y-0.5">
            <h4 className="text-2xl font-semibold text-gray-900 capitalize">
              Kam ling
            </h4>
            <p className="text-base md:text-lg font-medium text-gray-800">
              CO founder of prehireforms.com
            </p>
          </div>
        </div>

        <div className="flex items-center font-medium text-base absolute bottom-2 right-5">
          <Image
            src="/just-logo.svg"
            alt=""
            height={30}
            width={30}
            className="object-cover  shadow-inner rounded-full"
          />
          Testimonail.io
        </div>
      </div>

      <PricingCta />
    </main>
  );
}
