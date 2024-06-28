"use client";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import React from "react";
import { ScrollArea } from "@/components/ui/ScrollArea";
export default function LeftSideBar() {
  const Pathname = usePathname();
  return (
    <div
      className="max-sm:hidden max-md:w-max sticky top-0 left-0 h-screen pt-36 p-6 flex custom-scrollbar overflow-auto 
    flex-col items-start justify-center background-light900_dark200 text-light-800 light-border"
    >
      <div className="w-full flex pt-24 h-screen custom-scrollbar p-2 flex-col gap-6">
        {sidebarLinks.map((item) => {
          const isActive =
            (Pathname.includes(item.route) && item.route.length > 1) ||
            Pathname === item.route;
          return (
            <Link
              href={item.route}
              key={item.route}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900"
              } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={item.imgURL}
                className={`${isActive ? "" : "invert-colors"}`}
                alt={item.label}
                width={20}
                height={20}
              />
              <p
                className={`${
                  isActive ? "base-bold" : "base-medium"
                } max-md:hidden`}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
        <div className="flex flex-col gap-2 pb-6 w-full">
          <Link href="/sign-in">
            <Button
              className="small-medium btn-secondary 
                  min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none"
            >
              <span className="max-md:hidden primary-text-gradient">
                Log In
              </span>
              <span className="text-dark300_light900">
                <Image
                  alt="signIn"
                  width={20}
                  height={20}
                  className="max-md:block hidden text-dark300_light900"
                  src="/assets/icons/user.svg"
                />
              </span>
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button
              className="small-medium light-border-2 btn-tertiary
                  min-h-[41px] text-dark400_light900 w-full rounded-lg px-4 py-3 shadow-none"
            >
              <span className="max-md:hidden primary-text-gradient">
                Sign Up
              </span>
              <span className="text-dark300_light900">
                <Image
                  alt="signUp"
                  width={20}
                  height={20}
                  className="max-md:block hidden text-dark300_light900"
                  src="/assets/icons/sign-up.svg"
                />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
