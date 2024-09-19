import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div className="py-24 w-full px-5">
        <div className="max-w-xl space-y-8 mx-auto">
          <div className="space-y-1 text-center">
            <h1 className="text-4xl leading-[1.1] font-bold text-white">
              welcome back! 👋
            </h1>
          </div>
          <div className="transition bg-gray-800 rounded shadow-md px-11 py-8 space-y-6 max-w-md mx-auto">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
