import { ArrowUp, ChevronLeft, Smile } from "lucide-react";
import Image from "next/image";
import React, { useState, useRef } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import EmojiPicker from 'emoji-picker-react';

type Props = {
  setpage:  React.Dispatch<React.SetStateAction<React.ComponentState>>;
};

export default function Ask({setpage}: Props) {
  const [showPicker, setShowPicker] = useState(false);
  const [text, setText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleEmojiClick = (emojiData: any) => {
    const emoji = emojiData.emoji;
    const textarea = textareaRef.current;
    const startPos = textarea && textarea.selectionStart;
    const endPos = textarea && textarea.selectionEnd;

    setText(text.slice(0, startPos!) + emoji + text.slice(endPos!));
    setShowPicker(false);
    textarea && textarea.focus();
    textarea && textarea.setSelectionRange(startPos + emoji.length, startPos + emoji.length);
  };

  return (
    <div className="w-full h-full max-h-fit p-4">
      <div className="flex items-center w-full">
        <div className="hover:bg-purple-100 p-2 rounded-md">
          <ChevronLeft onClick={() => setpage("home")} className="h-8 w-8 text-purple-700" />
        </div>
        <div className="flex justify-center flex-1">
          <h2 className="text-xl font-bold text-gray-800">Fin</h2>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between pt-10 gap-4 h-[85%]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center -space-x-2">
            <Image
              src="/dp2.jpg"
              alt=""
              height={50}
              width={50}
              className="rounded-full object-contain"
            />
            <Image
              src="/dp3.png"
              alt=""
              height={70}
              width={70}
              className="z-10 object-contain"
            />
            <Image
              src="/dp4.png"
              alt=""
              height={50}
              width={50}
              className="-z-1 rounded-full object-contain"
            />
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-lg font-semibold text-gray-800">
              AI agent answers instantly
            </h2>

            <p className="text-sm font-sans text-gray-500">
              Ask for the team if needed
            </p>
          </div>
        </div>
        <div className="p-2.5 rounded-3xl transition focus:border-purple-600 shadow-lg border border-zinc-300 bg-white w-full min-h-32">
          <input
            type="email"
            autoFocus
            placeholder="example@email.com"
            className="border-b border-zinc-300 text-sm w-full outline-none bg-transparent placeholder:font-sans placeholder:text-zinc-500 text-gray-800 py-2 px-2"
          />
          <div className="flex w-full gap-1 items-end relative">
            <ReactTextareaAutosize
              ref={textareaRef}
              value={text}
              onChange={(e) => setText(e.target.value)}
              minRows={2}
              minLength={12}
              placeholder="Ask a question..."
              maxRows={5}
              aria-expanded="false"
              className="w-full resize-none placeholder:font-sans text-sm text-gray-800 placeholder:text-zinc-500 outline-none border-none p-2"
            />
            <div className="flex gap-1 pr-1 items-center relative">
              <button
                onClick={() => setShowPicker((prev) => !prev)}
                className="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
              >
                <Smile className="text-zinc-400 h-6 w-6" />
              </button>
              {showPicker && (
                <div className="absolute bottom-12 right-0 z-10 mt-2 bg-white border rounded shadow-lg">
                  <EmojiPicker onEmojiClick={handleEmojiClick} />
                </div>
              )}
              <span className="p-1.5 bg-purple-600 rounded-full">
                <ArrowUp className="h-5 w-5 text-white" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
