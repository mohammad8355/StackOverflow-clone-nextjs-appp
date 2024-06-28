import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
export default function LocalSearchbar() {
  return (
    <div className="relative w-full max-w-[600px]">
      <div
        className="background-light800_darkgradient relative flex min-h-[56px]
  grow items-center gap-1 rounded-xl px-4"
      >
        <Image
          src="/assets/icons/search.svg"
          alt="search"
          width={24}
          height={24}
          className="cursor-pointer"
        />
        <Input
          type="text"
          placeholder="search globally"
          className="paragraph-regular focus-visible:ring-0 focus-visible:outline-none  placeholder no-focus shadow-none
      border-none outline-none background-light800_darkgradient no-focus focus:ring-offset-0 focus:ring-0"
        />
      </div>
    </div>
  );
}
