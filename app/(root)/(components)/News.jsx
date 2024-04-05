"use client";
import React, { useContext, useEffect, useState, useMemo } from "react";
import { ThemeContext } from "../layout";
import NewsCard from "./NewsCard";

export default function News() {
  const { theme } = useContext(ThemeContext);
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchedData = useMemo(() => {
    const fetchData = async () => {
      const response = await fetch(`https://too-fast.vercel.app/api/gs`);
      const data = await response.json();
      const articles = data.articles;
      const uniqueData = articles.filter(
        (item, index, self) =>
          index === self.findIndex((t) => t.link === item.link),
      );
      return uniqueData;
    };
    return fetchData();
  }, []);

  useEffect(() => {
    fetchedData.then((data) => {
      setIsLoading(false);
      setNews(data);
    });
  }, [fetchedData]);

  return (
    <div
      className={`container mx-auto my-5 flex min-h-screen flex-wrap items-center justify-center rounded-xl p-5 shadow-lg ${theme === "Dark" ? "bg-slate-900 text-white" : "bg-slate-300"} ${theme === "Dark" ? "shadow-slate-950" : "shadow-slate-900"} `}
    >
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        news.map((item, index) => (
          <NewsCard
            key={index}
            content={item.text}
            link={item.link}
            location={item.location}
          />
        ))
      )}
    </div>
  );
}
