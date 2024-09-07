import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: "/logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <body className={cn(inter.className, "bg-[rgb(21,23,25)] antialiased")}>
        <div className="z-10 overlay bg-gray-800 opacity-75 fixed inset-x-0 inset-y-0 hidden blur-md  transition duration-200 ease-in" />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
