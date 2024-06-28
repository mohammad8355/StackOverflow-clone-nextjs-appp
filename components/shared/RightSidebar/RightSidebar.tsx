import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import RenderTag from "../RenderTag/RenderTag";
const PopularTags = [
  { _id: "1", name: "javascript", totalQuestions: 32 },
  { _id: "2", name: "react", totalQuestions: 37 },
  { _id: "3", name: "vue", totalQuestions: 92 },
  { _id: "4", name: "next", totalQuestions: 72 },
  { _id: "5", name: "redux", totalQuestions: 42 },
];
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
          {PopularTags.map((item) => (
            <RenderTag
              key={item._id}
              _id={item._id}
              name={item.name}
              ShowCount={true}
              totalQuestions={item.totalQuestions}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
