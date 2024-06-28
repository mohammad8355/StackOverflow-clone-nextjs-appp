import Link from "next/link";
import React from "react";
import RenderTag from "../shared/RenderTag/RenderTag";
import Metric from "../shared/Metric/Metric";
import { getTimestamp, formatNumber } from "@/lib/utils";
interface Props {
  views: number;
  tags: { _id: string; name: string }[];
  upvotes: number;
  author: { _id: string; name: string; picture: string };
  title: string;
  answers: Array<object>;
  createdAt: Date;
  _id: string;
}
export default function QuestionCard({
  views,
  _id,
  tags,
  author,
  upvotes,
  createdAt,
  title,
  answers,
}: Props) {
  return (
    <div className="card-wrapper p-9 sm:px-11 rounded-[10px]">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {getTimestamp(createdAt)}
          </span>
          <Link href={`/questions/${_id}`}>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
              {title}
            </h3>
          </Link>
        </div>
      </div>
      {/* if sign in add edit delete */}
      <div className="mt-3.5 flex flex-wrap gap-2">
        {tags.map((item) => (
          <RenderTag key={item._id} _id={item._id} name={item.name} />
        ))}
      </div>
      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <Metric
          ImgUrl="/assets/icons/avatar.svg"
          title={` - asked ${getTimestamp(createdAt)}`}
          href={`/profile/${author._id}`}
          value={author.name}
          isAuthor={true}
          alt="user"
          textStyle="body-medium text-dark400_light700"
        />
        <Metric
          ImgUrl="/assets/icons/like.svg"
          title=" votes"
          value={formatNumber(upvotes)}
          alt="Upvotes"
          textStyle="small-medium text-dark400_light800"
        />
        <Metric
          ImgUrl="/assets/icons/message.svg"
          title=" Answers"
          value={formatNumber(answers.length)}
          alt="message"
          textStyle="small-medium text-dark400_light800"
        />
        <Metric
          ImgUrl="/assets/icons/eye.svg"
          title=" Views"
          value={formatNumber(views)}
          alt="eye"
          textStyle="small-medium text-dark400_light800"
        />
      </div>
    </div>
  );
}
