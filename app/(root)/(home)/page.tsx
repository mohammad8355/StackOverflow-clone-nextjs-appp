import React from "react";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LocalSearchbar from "@/components/shared/LocalSearchbar/LocalSearchbar";
import Filters from "@/components/shared/Filter/Filters";
import { HomePageFilters } from "@/constants/Filters";
import HomeFilters from "@/components/Home/HomeFilters";
import NoResult from "@/components/shared/NoResult/NoResult";
import QuestionCard from "@/components/Cards/QuestionCard";
const questions = [
  {
    _id: "1",
    title: "Redux Toolkit Not Updating State as Expected",
    tags: [
      { _id: "1", name: "python" },
      { _id: "2", name: "sql" },
    ],
    author: {
      _id: "john-doe-id",
      name: "John Doe",
      picture: "john-doe-avatar.jpg",
    },
    upvotes: 10,
    views: 1000,
    answers: [],
    createdAt: new Date("2021-09-12"),
  },
  {
    _id: "2",
    title: "How to Center a Div?",
    tags: [
      { _id: "1", name: "html" },
      { _id: "2", name: "css" },
    ],
    author: {
      _id: "john-doe-id",
      name: "John Doe",
      picture: "john-doe-avatar.jpg",
    },
    upvotes: 10,
    views: 100,
    answers: [],
    createdAt: new Date("2021-09-12"),
  },
];

const Home = () => {
  return (
    <>
      <div
        className="flex w-full flex-col-reverse justify-between 
      gap-4 sm:flex-row sm:items-center"
      >
        <h1 className="h1-bold text-light100_dark900">All Questions</h1>
        <Link className="flex justify-end max-sm:w-full" href="/ask-question">
          <Button
            className="primary-gradient min-h-[46px]
          px-4 py-3 !text-light-900"
          >
            Ask a Question
          </Button>
        </Link>
      </div>
      <div
        className="mt-11 flex justify-between gap-5 
       flex-col sm:items-center"
      >
        <LocalSearchbar />
        <Filters
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          ContainerClasses="hidden max-md:flex"
          filters={HomePageFilters}
        />
        <HomeFilters />
        <div className="w-full mt-10 gap-6 flex-col flex">
          {questions.length > 0 ? (
            questions.map((item) => (
              <QuestionCard
                key={item._id}
                title={item.title}
                tags={item.tags}
                views={item.views}
                author={item.author}
                upvotes={item.upvotes}
                createdAt={item.createdAt}
                answers={item.answers}
                _id={item._id}
              />
            ))
          ) : (
            <NoResult
              description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
        discussion. our query could be the next big thing others learn from. Get
        involved! 💡"
              title="There's No question to show"
              link="/ask-question"
              linkTitle="Ask a Question"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
