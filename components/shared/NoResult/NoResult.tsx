import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
interface Props {
  title: string;
  description: string;
  link: string;
  linkTitle: string;
}
export default function NoResult({
  title,
  description,
  link,
  linkTitle,
}: Props) {
  return (
    <div className="mt-10 flex flex-col gap-6 w-full items-center justify-center">
      <Image
        src="/assets/images/light-illustration.png"
        alt="No Result illustration"
        width={270}
        height={200}
        className="block object-contain dark:hidden"
      />
      <Image
        src="/assets/images/dark-illustration.png"
        alt="No Result illustration"
        width={270}
        height={200}
        className="hidden object-contain dark:flex"
      />
      <h2 className="h2-bold text-dark200_light900 mt-8">{title}</h2>
      <p className="body-regular text-dark500_light700 my-3.5 max-w-md text-center">
        {description}
      </p>
      <Link className="flex justify-end max-sm:w-full" href={link}>
        <Button
          className="primary-gradient min-h-[46px]
          px-4 py-3 !text-light-900"
        >
          {linkTitle}
        </Button>
      </Link>
    </div>
  );
}
