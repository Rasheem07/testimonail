import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/components/headers/NavBar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import ChatBotContextProvider from "@/contexts/ChatBotContext";
import { Chatbot } from "@/components/chatbot";
import { AuthProvider } from "@/contexts/authContext";
import ReactQueryProvider from "@/contexts/reactqueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Testimonial - Collect and embed your testimonials",
  description: "manage your testimonails with ease.",
  icons: {
    icon: {
      url: "/favicon.ico",
    },
  },
};

export const viewport: Viewport = {
  width: "width=device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactQueryProvider>
          <AuthProvider>
            <ChatBotContextProvider>
              <body
                className={cn(
                  inter.className,
                  "bg-[rgb(21,23,25)] antialiased relative"
                )}
              >
                <NavBar />
                {children}
                <Toaster />
                <Footer />
                <Chatbot />
              </body>
            </ChatBotContextProvider>
          </AuthProvider>
      </ReactQueryProvider>
    </html>
  );
}
