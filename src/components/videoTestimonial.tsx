import { useEffect, useRef } from "react";
import Playbtn from "./ui/playbtn";
import { Star } from "lucide-react";
type Props = {
  card: any;
};

export default function VideoTestimonial({ card }: Props) {
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
    const videoElement = videoRef.current;

    const handlePlay = () => {
      if (videoElement) videoElement.controls = true;

      if (playbuttonref.current) {
        playbuttonref.current.style.display = "none";
      }
    };

    const handlePause = () => {
      if (videoElement) videoElement.controls = false;
      if (playbuttonref.current) {
        playbuttonref.current.style.display = "block";
      }
    };

    if (videoElement) videoElement.controls = false;

    videoElement?.addEventListener("play", handlePlay);
    videoElement?.addEventListener("pause", handlePause);

    // Cleanup event listeners on component unmount
    return () => {
      videoElement?.removeEventListener("play", handlePlay);
      videoElement?.removeEventListener("pause", handlePause);
    };
  }, []);
  return (
    <div className="h-full w-full flex flex-col">
      <div className="relative flex-1 max-h-[70%] z-1">
        {/* <div className="absolute inset-y-0 inset-x-0 bg-gray-800 opacity-50 -z-1" /> */}
        <video
          ref={videoRef}
          src={card.src}
          poster={card.poster}
          playsInline
          className="h-full min-h-full w-full object-cover rounded-tr-md rounded-tl-md"
        />
        <Playbtn
          playbtnref={playbuttonref}
          onclick={playVideoOnclickPlaybtn}
          className="absolute top-1/2 left-1/2 opacity-80 scale-90"
        />
        <div className="absolute bottom-0 flex flex-1 gap-4 justify-between px-5 py-2.5">
          <div>
            <h2 className="text-lg font-bold text-white">{card.user}</h2>
            <p className="text-base font-semibold text-zinc-200">
              {card.proffession}
            </p>
          </div>
          <div className="flex items-center gap-1 5">
            <Star className="text-orange-400 fill-orange-400 h-4 w-4" />
            <Star className="text-orange-400 fill-orange-400 h-4 w-4" />
            <Star className="text-orange-400 fill-orange-400 h-4 w-4" />
            <Star className="text-orange-400 fill-orange-400 h-4 w-4" />
            <Star className="text-orange-400 fill-orange-400 h-4 w-4" />
          </div>
        </div>
      </div>
      <div className="bg-purple-600 w-full py-2.5 px-5 flex-1 max-h-[30%] rounded-br-md rounded-bl-md">
        <p className="text-lg font-semibold text-white">{card.text}</p>
      </div>
    </div>
  );
}
