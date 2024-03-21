"use client";
import React, { useContext } from "react";
import { ThemeContext } from "../layout";

export default function NewsCard(props) {
  const { content, link, location } = props;
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`m-3 flex flex-col gap-3 rounded-2xl p-5 shadow-lg md:w-1/4 ${theme === "Dark" ? "shadow-slate-800" : "shadow-slate-900"} `}
    >
      {content}
      <hr />
      <div className="flex justify-between text-sm">
        <div
          className={`${theme === "Dark" ? "text-slate-300" : "text-slate-500"}`}
        >
          {location}
        </div>
        <a
          target="_blank"
          href={link}
          className={`${theme === "Dark" ? "text-slate-300" : "text-slate-500"}`}
        >
          Read more
        </a>
      </div>
    </div>
  );
}
