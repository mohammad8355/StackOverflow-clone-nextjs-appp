import Link from "next/link";
import React from "react";
import Image from "next/image";
import { SignedIn, SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import Theme from "./Theme";
export default function Navbar() {
  return (
    <nav className="sm:px-12 dark:shadow-none w-full gap-5 p-6 shadow-light-300 flex-between background-light900_dark200 fixed z-50">
      <Link className="flex items-center gap-1 " href="/">
        <Image
          alt="DevFlow"
          src="/assets/images/site-logo.svg"
          width={23}
          height={23}
        />
        <p className="max-sm:hidden h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900">
          Dev <span className="text-primary-500">Overflow</span>
        </p>
      </Link>
      GlobalSearch
      <div className="flex-between gap-5">
        <Theme />
        <SignedIn>
          {/* Mount the UserButton component */}
          <UserButton
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#ff7000",
              },
            }}
          />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        MobileNav
      </div>
    </nav>
  );
}
