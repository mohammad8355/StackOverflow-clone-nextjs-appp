"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { SignedOut } from "@clerk/nextjs";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
const NavContent = () => {
  const Pathname = usePathname();
  return (
    <section className="flex h-full flex-col gap-6 pt-6 ">
      {sidebarLinks.map((item) => {
        const isActive =
          (Pathname.includes(item.route) && item.route.length > 1) ||
          Pathname === item.route;
        return (
          <SheetClose asChild>
            <Link
              href={item.route}
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
              <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                {item.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};
export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          width={36}
          height={36}
          alt="Menu"
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 border-none"
      >
        <Link className="flex items-center gap-1 " href="/">
          <Image
            alt="DevFlow"
            src="/assets/images/site-logo.svg"
            width={23}
            height={23}
          />
          <p className="font-spaceGrotesk h2-bold  text-dark100_light900 ">
            Dev <span className="text-primary-500">Overflow</span>
          </p>
        </Link>
        <div>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
          <SignedOut>
            <div className="flex flex-col gap-3">
              <SheetClose asChild>
                <Link href="/sign-in">
                  <Button
                    className="small-medium btn-secondary 
                  min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none"
                  >
                    <span className="primary-text-gradient">Log In</span>
                  </Button>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/sign-up">
                  <Button
                    className="small-medium light-border-2 btn-tertiary
                  min-h-[41px] text-dark400_light900 w-full rounded-lg px-4 py-3 shadow-none"
                  >
                    Sign Up
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SignedOut>
        </div>
      </SheetContent>
    </Sheet>
  );
}
