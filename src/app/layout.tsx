import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/components/NavBar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Testimonial - Collect and embed your testimonials",
  description: "manage your testimonails with ease.",
  icons: {
    icon: {
      url: '/favicon.ico'
    }
  }
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
      <body className={cn(inter.className, "bg-[rgb(21,23,25)] antialiased")}>
        <div className="z-10 overlay bg-gray-800 opacity-75 fixed inset-x-0 inset-y-0 hidden blur-md  transition duration-200 ease-in" />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
