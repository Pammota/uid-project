"use client";
import { ChartArea } from "@/components/featured/ChartArea";
import { LeftArrow } from "@/components/icons/LeftArrow";
import { RightArrow } from "@/components/icons/RightArrow";
import { Input } from "@/components/shared/Input";
import { useStore, useUserStore } from "@/stores";
import { useState } from "react";

const parentData = {
  income: 2000,
  budget: 1000,
  expenses: 600,
  savings: 400,
};

let months = ["This Month", "Last Month", "2 Months Ago", "3 Months Ago"];
months[-1] = "Next Month";

export default function Page() {
  const [monthsAgo, setMonthsAgo] = useState(0);
  const user = useStore(useUserStore, (state) => state.user);

  return (
    <div className="flex flex-col gap-6 h-max w-full bg-gray-200 rounded-xl px-8 py-4">
      <div className="inline-flex w-full justify-between">
        <button
          onClick={() => {
            if (monthsAgo < 3) {
              setMonthsAgo(monthsAgo + 1);
            }
          }}
          className="bg-white px-8 py-2.5 hover:brightness-75 rounded-lg disabled:opacity-50"
          disabled={monthsAgo === 3}
        >
          <LeftArrow className="stroke-[3]" />
        </button>
        <span className="font-medium text-2xl">{months[monthsAgo]}</span>
        <button
          onClick={() => {
            if (monthsAgo > -1 || (user?.role === "child" && monthsAgo > 0)) {
              setMonthsAgo(monthsAgo - 1);
            }
          }}
          className="bg-white px-8 py-2.5 hover:brightness-75 rounded-lg disabled:opacity-50"
          disabled={
            monthsAgo === -1 || (user?.role === "child" && monthsAgo === 0)
          }
        >
          <RightArrow className="stroke-[3]" />
        </button>
      </div>

      {monthsAgo >= 0 && (
        <>
          <div className="w-full h-fit bg-white rounded-xl">
            <ChartArea dataNr={monthsAgo} height={200} />
          </div>

          <hr className="bg-black text-black h-0.5 rounded-md w-full" />

          <div className="w-full h-max flex gap-2 justify-between items-between">
            <div className="w-1/3 h-fit flex flex-col px-6 py-4 text-2xl gap-2 font-medium bg-white rounded-xl">
              <div className="flex flex-col">
                <span className="w-full text-center font-medium text-3xl">
                  Info
                </span>
                <hr className="w-full p-2" />
                <div className="font-medium text-2xl flex justify-between w-full">
                  <span>Income:</span>
                  <span>{parentData.income} </span>
                </div>

                <div className="font-medium text-2xl flex justify-between w-full">
                  <span>Budget:</span>
                  <span>{parentData.budget}</span>
                </div>
                <div className="font-medium text-2xl flex justify-between w-full">
                  <span>Expenses:</span>
                  <span>{parentData.expenses}</span>
                </div>
                <div className="font-medium text-2xl flex justify-between w-full">
                  <span>Savings:</span>
                  <span>{parentData.savings}</span>
                </div>
              </div>
            </div>
            {user?.role === "parent" && (
              <a
                href="/total/categories"
                className="px-4 py-2 self-end max-h-12 rounded-lg bg-blue-200 font-medium text-lg flex items-center gap-2 hover:brightness-90"
              >
                Categories <RightArrow className="w-4 h-4 stroke-[3px]" />
              </a>
            )}
          </div>
        </>
      )}
      {user?.role !== "child" && monthsAgo === -1 && (
        <div className="w-full flex justify-center items-center">
          <div className=" w-1/3">
            <Input type="text" label="Budget" />
          </div>
        </div>
      )}
    </div>
  );
}
