import React, { useContext } from "react";
import { ThemeContext } from "../layout";

export default function OurAPI() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="container mx-auto my-5">
      <div className="text-center text-5xl font-extrabold">Access our API,</div>
      <div
        className={`my-5 flex w-full ${theme === "Dark" ? "bg-slate-800" : "bg-slate-400"} `}
      >
        <div
          className={`w-fit ${theme === "Dark" ? "text-slate-300" : "text-slate-300"} bg-green-700 p-3`}
        >
          GET
        </div>
        <div className="w-auto  p-3">/api/db ~ DivyaBhaskar</div>
      </div>
      <div
        className={`my-5 flex w-full ${theme === "Dark" ? "bg-slate-800" : "bg-slate-400"} `}
      >
        <div
          className={`w-fit ${theme === "Dark" ? "text-slate-300" : "text-slate-300"} bg-green-700 p-3`}
        >
          GET
        </div>
        <div className="w-auto  p-3">/api/gs ~ GujaratSamachar</div>
      </div>
    </div>
  );
}
