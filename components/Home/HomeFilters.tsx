"use client";
import { HomePageFilters } from "@/constants/Filters";
import React from "react";
import { Button } from "../ui/button";
import { useState } from "react";

export default function HomeFilters() {
  const [isActive, setIsActive] = useState("");
  return (
    <div className="mt-10 flex-wrap gap-3 md:flex hidden">
      {HomePageFilters.map((item) => {
        return (
          <Button
            className={`body-medium px-6 py-3 rounded-lg capitalize shadow-none  ${
              isActive === item.value
                ? "bg-primary-100 text-primary-500"
                : "bg-light-800 dark:text-light-500  dark:bg-dark-300"
            }`}
            key={item.value}
            onClick={() => setIsActive(item.value)}
          >
            {item.name}
          </Button>
        );
      })}
    </div>
  );
}
