import { LeftArrow } from "@/components/icons/LeftArrow";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col gap-4 w-full bg-gray-200 rounded-xl px-8 py-4">
      <div className="flex flex-col w-full justify-between">
        <a
          href="/total"
          className="px-4 py-2 max-h-12 max-w-24 rounded-lg bg-blue-200 font-medium text-lg flex items-center gap-2 hover:brightness-90"
        >
          <LeftArrow className="w-4 h-4 stroke-[3px]" /> Back
        </a>
        <span className="font-medium text-2xl w-full text-center pb-4">Categories</span>
        <div className="flex flex-col gap-2 items-center  [&_>_span]:max-w-[80%] [&_>_span]:min-w-[40%]">
          <span className="bg-white px-12 py-2 font-medium rounded-lg text-center"> Category1</span>
          <span className="bg-white px-12 py-2 font-medium rounded-lg text-center"> Category2</span>
          <span className="bg-white px-12 py-2 font-medium rounded-lg text-center"> Category3</span>
          <span className="bg-white px-12 py-2 font-medium rounded-lg text-center"> Category4</span>
          <button className="p-2 font-light text-4xl bg-white w-10 h-10 rounded-lg"> <div className="-translate-y-[11px]">+</div> </button>
        </div>
      </div>
    </div>
  );
}
