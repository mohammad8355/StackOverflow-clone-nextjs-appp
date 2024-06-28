import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import React from "react";
interface Props {
  _id: string;
  name: string;
  totalQuestions?: number;
  ShowCount?: boolean;
}
export default function RenderTag({
  _id,
  name,
  totalQuestions,
  ShowCount,
}: Props) {
  return (
    <Link href={`/tags/${_id}`} className="flex justify-between gap-2">
      <Badge
        className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none uppercase px-4 py-2
  "
      >
        {name}
      </Badge>
      <p className="small-medium text-dark500_light700">
        {ShowCount ? totalQuestions : ""}
      </p>
    </Link>
  );
}
