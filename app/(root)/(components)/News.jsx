"use client";
import React, { useContext, useEffect, useState, useMemo } from "react";
import { ThemeContext } from "../layout";
import NewsCard from "./NewsCard";

export default function News() {
  const { theme } = useContext(ThemeContext);
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Memoize the fetching logic
  const fetchedData = useMemo(() => {
    const fetchData = async () => {
      const response = await fetch(".netlify/functions/divyaBhaskar");
      // const response2 = await fetch("/api/gs");
      const data = await response.json();
      // const data2 = await response2.json();
      const articles = data.articles;
      // const articles2 = data2.articles;
      // Filter out duplicates based on the 'link' property
      const uniqueData = articles.filter(
        (item, index, self) =>
          index === self.findIndex((t) => t.link === item.link),
      );
      // const uniqueData2 = articles2.filter(
      //   (item, index, self) =>
      //     index === self.findIndex((t) => t.link === item.link),
      // );
      return uniqueData;
    };
    return fetchData();
  }, []); // Dependencies array, empty means it will only run once

  useEffect(() => {
    fetchedData.then((data) => {
      setIsLoading(false);
      setNews(data); // Update state with fetched data
    });
  }, [fetchedData]); // Depend on fetchedData to trigger the effect

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
