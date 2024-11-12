'use client'
import React, { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

interface chatbot {
  isChatbot: boolean;
  setIsChatbot: React.Dispatch<React.SetStateAction<boolean>>;
}

export const chatbotContext = createContext<any | null>(null);

export default function ChatBotContextProvider({ children }: Props) {
  const [isChatbot, setIsChatbot] = useState<boolean>(false);
  return (
    <chatbotContext.Provider value={{ isChatbot, setIsChatbot }}>
      {children}
    </chatbotContext.Provider>
  );
}
