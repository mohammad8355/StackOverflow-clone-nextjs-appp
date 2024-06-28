import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import React from "react";
interface Props {
  ImgUrl: string;
  alt: string;
  value?: string;
  title: string;
  textStyle?: string;
  href?: string;
  isAuthor?: boolean;
}
export default function Metric({
  ImgUrl,
  alt,
  value,
  title,
  textStyle,
  href,
  isAuthor,
}: Props) {
  const MetricContent = useMemo(
    () => (
      <>
        <Image
          src={ImgUrl}
          alt={alt}
          width={16}
          height={16}
          className={`object-contain ${href ? "rounded-full" : ""}`}
        />
        <p className={`${textStyle} flex-center gap-1`}>
          <span className="leading-3">{value}</span>
          <span
            className={`small-regular line-clamp-1 leading-3 ${
              isAuthor ? "max-sm:hidden" : ""
            }`}
          >
            {title}
          </span>
        </p>
      </>
    ),
    [alt, href, ImgUrl, isAuthor, textStyle, title, value]
  );
  if (href) {
    return (
      <Link className="flex-center gap-1" href={href}>
        {MetricContent}
      </Link>
    );
  }
  return <div className="flex-center flex-wrap gap-1">{MetricContent}</div>;
}
