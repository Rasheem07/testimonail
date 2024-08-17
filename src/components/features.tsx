import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Twocols from "./wrappers/twoCols";
import Playbtn from "./ui/playbtn";

export default function Features() {
  const playbuttonref = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const playVideoOnclickPlaybtn = () => {
    if (videoRef.current?.paused) {
      videoRef.current.play();
    } else {
      videoRef.current?.pause();
    }
  };

  useEffect(() => {
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
  }, []);
  return (
    <div className="py-16 w-full space-y-24">
      <div className="max-w-4xl mx-auto text-center space-y-5">
        <h1 className="text-[36px] md:text-[52px] leading-[1.1] font-bold text-white">
          Collect and display testimonials all in one solution
        </h1>
      </div>
      <div className="md:space-y-32 space-y-16">
        <Twocols>
          <div className="mb-8 md:mb-0">
            <span className="text-purple-600 text-xl font-medium tracking-wide mb-2">
              Quick to Setup
            </span>
            <h3 className="text-[2rem] font-semibold text-white mb-3">
              A dedicated landing page
            </h3>
            <p className="text-lg text-zinc-300 font-sans mt-4">
              Create a dedicated landing page for your business. Share the page
              link easily via email, social media, or even SMS. Setup can be
              done in two minutes.
            </p>
            <button className="rounded-md bg-purple-600 text-white shadow-md py-2 px-4 mt-6">
              Try it for FREE
            </button>
          </div>
          <Image
            src="/landing-page.png"
            alt=""
            width={800}
            height={597}
            className="mb-8 md:mb-0"
          />
        </Twocols>

        <Twocols>
          <Image
            src="/Easy to manage.png"
            alt=""
            width={800}
            height={597}
            className="mb-8 md:mb-0 order-1 md:order-none"
          />
          <div className="mb-8 md:mb-0">
            <span className="text-purple-600 text-xl font-medium tracking-wide mb-2">
              Easy to manage
            </span>
            <h3 className="text-[2rem] font-semibold text-white mb-3">
              A dashboard to manage all testimonials
            </h3>
            <p className="text-lg text-zinc-300 font-sans mt-4">
              You will have a simple & clean dashboard to manage all
              testimonials in one place. It&apos;s like your email inbox, but
              it&apos;s designed for your social proof!
            </p>
            <button className="rounded-md bg-purple-600 text-white shadow-md py-2 px-4 mt-6">
              Try it for FREE
            </button>
          </div>
        </Twocols>

        <Twocols>
          <div className="mb-8 md:mb-0">
            <span className="text-purple-600 text-xl font-medium tracking-wide mb-2">
              Track the metrics
            </span>
            <h3 className="text-[2rem] font-semibold text-white mb-3">
              Understand how video testimonials are performing
            </h3>
            <p className="text-lg text-zinc-300 font-sans mt-4">
              Track the metrics from all embedded videos, help your marketing
              team understand the performance at a glance, even promote the
              best-performing videos to different marketing channels.
            </p>
            <p className="text-sm text-gray-400 mt-2">
              * Available in the Ultimate plan
            </p>
            <button className="rounded-md bg-purple-600 text-white shadow-md py-2 px-4 mt-6">
              Try it for FREE
            </button>
          </div>
          <Image
            src="/metrics.png"
            alt=""
            width={800}
            height={597}
            className="mb-8 md:mb-0"
          />
        </Twocols>

        <Twocols>
          <Image
            src="/more-social-proof.png"
            alt=""
            width={800}
            height={597}
            className="mb-8 md:mb-0 order-1 md:order-none"
          />
          <div className="mb-8 md:mb-0">
            <span className="text-purple-600 text-xl font-medium tracking-wide mb-2">
              More social proof
            </span>
            <h3 className="text-[2rem] font-semibold text-white mb-3">
              Not only text and video testimonials
            </h3>
            <p className="text-lg text-zinc-300 font-sans mt-4">
              If you have testimonials on social media (e.g. Twitter, LinkedIn,
              TikTok etc), video hosting platforms (e.g. YouTube, Vimeo), and
              other review sites (e.g. G2, Google, Capterra, Yelp etc), bring
              them all to your account. Testimonial helps you manage all your
              social proof in a single place!
            </p>
            <button className="rounded-md bg-purple-600 text-white shadow-md py-2 px-4 mt-6">
              Try it for FREE
            </button>
          </div>
        </Twocols>

        <Twocols>
          <div className="mb-8 md:mb-0">
            <span className="text-purple-600 text-xl font-medium tracking-wide mb-2">
              Embed the Wall of Love
            </span>
            <h3 className="text-[2rem] font-semibold text-white mb-3">
              The best testimonials all in one place
            </h3>
            <p className="text-lg text-zinc-300 font-sans mt-4">
              Treat the Wall of Love as the place to showcase all your favorite
              testimonials. You can embed it to your website in under a minute.
              No coding knowledge required!
            </p>
            <p className="text-lg font-semibold text-zinc-200 mt-2 underline underline-offset-1">
              See our Wall of Love in action 👉
            </p>
            <button className="rounded-md bg-purple-600 text-white shadow-md py-2 px-4 mt-6">
              Try it for FREE
            </button>
          </div>
          <Image
            src="/wall-of-love.png"
            alt=""
            width={800}
            height={597}
            className="mb-8 md:mb-0"
          />
        </Twocols>

        <Twocols>
          <div className="relative order-1 md:order-none">
            <video
              onClick={playVideoOnclickPlaybtn}
              ref={videoRef}
              src="/high.mp4"
              poster="/thumbnail-matthew.jpg"
              controls
              playsInline
              width={800}
              height={597}
              className=" rounded-md shadow-md w-full h-full"
            />
            <Playbtn playbtnref={playbuttonref} onclick={playVideoOnclickPlaybtn}/>
            <div className="flex flex-col items-end absolute bottom-10 md:bottom-5 right-5">
              <h2 className="text-2xl font-bold text-white">Matthew Anderson</h2>
              <p className="text-lg font-semibold text-zinc-100">General Manager of betterfamily.com</p>
            </div>
          </div>
          <div className="mb-8 md:mb-0">
            <span className="text-purple-600 text-xl font-medium tracking-wide mb-2">
            Embed a single video testimonial
            </span>
            <h3 className="text-[2rem] font-semibold text-white mb-3">
            Ad-free hosting for each video
            </h3>
            <p className="text-lg text-zinc-300 font-sans mt-4">
            For the video testimonial, you can embed it directly on your own website like this 👈. You don&apos;t need to use any 3rd-party Ad-free hosting service, e.g. Wistia, Vimeo.
            </p>
            <button className="rounded-md bg-purple-600 text-white shadow-md py-2 px-4 mt-6">
              Try it for FREE
            </button>
          </div>
        </Twocols>
      </div>
    </div>
  );
}
