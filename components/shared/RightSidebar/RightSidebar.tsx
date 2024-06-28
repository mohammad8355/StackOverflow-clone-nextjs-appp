import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
export default function RightSidebar() {
  return (
    <section
      className="custom-scrollbar background-light900_dark200
     light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col 
     gap-6 overflow-y-auto
     border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden"
    >
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <ul className="mt-7 flex w-full flex-col gap-[30px]">
          <li>
            <Link
              href="#"
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                Best practices for data fetching in a Next.js application with
                Server-Side Rendering (SSR)?
              </p>
              <Image
                width={20}
                height={20}
                className="invert-colors"
                src="/assets/icons/chevron-right.svg"
                alt="arrow"
              />
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          <Link href="#" className="flex justify-between gap-2">
            <Badge
              className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none uppercase px-4 py-2
            "
            >
              Next js
            </Badge>
            <p className="small-medium text-dark500_light700">32</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
