import { LeftArrow } from "@/components/icons/LeftArrow";
import { RightArrow } from "@/components/icons/RightArrow";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col gap-4 w-full bg-gray-200 rounded-xl px-8 py-4">
      <div className="inline-flex w-full justify-between">
        <button className="bg-white px-8 py-2.5 hover:brightness-75 rounded-lg">
          <LeftArrow className="stroke-[3]" />
        </button>
        <span className="font-medium text-2xl">This Month</span>
        <button className="bg-white px-8 py-2.5 hover:brightness-75 rounded-lg">
          <RightArrow className="stroke-[3]" />
        </button>
      </div>
      <div className="w-full h-3/5 bg-white rounded-xl"></div>

      <hr className="bg-black text-black h-0.5 rounded-md w-full" />

      <div className="w-full flex gap-2">
        <div className="w-full h-2/5 flex flex-col text-2xl gap-2 font-medium">
          <span>Income</span>
          <span>Budget</span>
          <span>Expenses</span>
          <span>Savings</span>
        </div>
        <a href="/total/categories" className="px-4 py-2 max-h-12 rounded-lg bg-blue-200 font-medium text-lg flex items-center gap-2 hover:brightness-90">Categories <RightArrow className="w-4 h-4 stroke-[3px]" /></a>
      </div>
    </div>
  );
}
