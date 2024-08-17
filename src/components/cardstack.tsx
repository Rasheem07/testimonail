import Image from "next/image";
import VideoTestimonial from "./videoTestimonial";
import { Linkedin, X } from "lucide-react";
import { cards } from "@/data/demo-testimonials";
import { useEffect } from "react";

export default function CardStack() {
  
  return (
    <div className="masonry-grid">
      {cards.map((card) => (
        <div
          key={card.id}
          className={` ${card.height} rounded-lg shadow-md shadow-[#5d5dff40]  h-full w-full p-0 bg-gray-800 m-0`}
        >
          {card.type == "video" ? (
            <VideoTestimonial card={card} />
          ) : (
            <div className="p-5 space-y-4 text-white">
              <div className="flex items-center justify-between gap-3">
                <div className="flex gap-3">
                  <Image
                    src={card.profile!}
                    alt=""
                    height={40}
                    width={40}
                    className="object-contain h-12 w-12 rounded-full"
                  />
                  <div className="text-start space-y-0.5">
                    <h3 className="text-base font-semibold text-white">
                      {card.user}
                    </h3>
                    <p className="text-sm text-zinc-200">{card.proffession}</p>
                  </div>
                </div>
                {card.social ? (
                  card.social == "linkedin" ? (
                    <Image
                      src="/linkedin.png"
                      alt=""
                      height={24}
                      width={24}
                      className="object-contain h-6 w-6"
                    />
                  ) : (
                    card.social == "x" && <X />
                  )
                ) : null}
              </div>
              <p className="text-base text-zinc-200">{card.text}</p>
              {card.logo && (
                <Image
                  src={card.logo!}
                  alt=""
                  height={50}
                  width={100}
                  className="mx-auto w-30 h-auto object-contain rounded-lg"
                />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
