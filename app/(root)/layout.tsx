import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex">
        leftSidebar
        <section className="flex min-h-screen flex-1 flex-col pt-6 pb-6 px-6 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        rightSidebar
      </div>
      Toaster
    </main>
  );
}
