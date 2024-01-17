"use client";

import { ChartArea } from "@/components/featured/ChartArea";
import React, { useState } from "react";
import { Fund, RemoveButton, ToggleButton } from "./ManageControls";
import { ExpenseLine } from "../../expenses/page";
import { Expense } from "./Expense";

export type ExpenseType = {
  name: string;
  date: string;
  description: string;
  amount: number;
};

export const expenseList = [
  {
    name: "Bicycle",
    date: "13/1/2024",
    description: "Bought a bicycle",
    amount: 100,
  },
  {
    name: "Car",
    date: "10/1/2024",
    description: "Bought a new car",
    amount: 4000,
  },
  {
    name: "Potatoes",
    date: "1/1/2024",
    description: "Bought some potatoes",
    amount: 10,
  },
  {
    name: "School Trip",
    date: "28/12/2023",
    description: "School trip to the zoo",
    amount: 120,
  },
  {
    name: "Cigarettes",
    date: "15/12/2023",
    description: "Bought some cigarettes",
    amount: 20,
  },
];

export const TabBar = ({
  tabs,
  selected,
  setSelectedTab,
}: {
  tabs: string[];
  selected: string;
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="flex gap-2 w-full p-4 pl-0 h-[75px]">
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`rounded-xl select-none cursor-pointer p-2 font-medium text-black" ${
            selected === tab ? "bg-green-400/40" : "bg-white"
          }`}
          onClick={() => setSelectedTab(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

const childData = {
  budget: 500,
  expenses: 300,
  savings: 200,
};

export default function Page({ params }: { params: { slug: string } }) {
  const [selectedTab, setSelectedTab] = useState("Summary");
  const [expenses, setExpenseList] = useState(expenseList);
  const [modalOpen, setModalOpen] = useState(false);
  const [expense, setExpense] = useState({
    name: "",
    amount: 0,
    description: "",
    date: new Date().toLocaleDateString(),
  });

  return (
    <div className="flex flex-col gap-4 w-full">
      <Expense
        yourBudget={1000}
        totalBudget={2000}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        expense={expense}
        setExpense={setExpense}
        onAddExpense={(e) => {
          e.preventDefault();
          setExpenseList([...expenses, expense]);
          setExpense({
            name: "",
            amount: 0,
            description: "",
            date: new Date().toLocaleDateString(),
          });
          setModalOpen(false);
        }}
      />
      <TabBar
        tabs={["Summary", "Manage", "Expenses"]}
        selected={selectedTab}
        setSelectedTab={setSelectedTab}
      />

      {selectedTab === "Summary" && (
        <div className="flex w-full gap-4">
          <div className="min-w-[65%] max-w-max">
            <ChartArea />
          </div>
          <div className="min-w-[35%] h-full max-w-max bg-white rounded-2xl">
            <div className="flex flex-col h-full gap-2 p-4 items-center justify-between">
              <div className="flex flex-col gap-4 w-full items-center">
                <span className="text-4xl font-medium">Info</span>
                <hr className="w-full" />
              </div>
              <div className="flex gap-2 flex-col justify-center items-center">
                <span className="text-2xl font-semibold">Budget</span>
                <span className="text-xl text-black/60 font-semibold">
                  {childData.budget}$
                </span>
              </div>

              <div className="flex gap-2 flex-col justify-center items-center">
                <span className="text-2xl font-semibold">Expenses</span>
                <span className="text-xl text-black/60 font-semibold">
                  {childData.expenses}$
                </span>
              </div>

              <div className="flex gap-2 flex-col justify-center items-center">
                <span className="text-2xl font-semibold">Savings</span>
                <span className="text-xl text-black/60 font-semibold">
                  {childData.savings}$
                </span>
              </div>

              <div className="h-[10px]"></div>
            </div>
          </div>
        </div>
      )}

      {selectedTab === "Manage" && (
        <div className="flex w-full gap-4 flex-col">
          <Fund name="Monthly Budget" amount={100} />
          <Fund name="Monthly Income" amount={100} />
          <ToggleButton label="Block All Funds" status={false} />
          <RemoveButton onClick={() => {}} />
        </div>
      )}

      {selectedTab === "Expenses" && (
        <div className="flex flex-col w-full gap-4 h-full">
          <span className="w-full text-4xl font-medium">
            {params.slug}&apos;s expenses
          </span>
          <div className="w-full bg-white rounded-lg p-2 flex flex-col gap-2 overflow-y-auto items-center">
            {expenses.map((expense) => (
              <ExpenseLine
                key={expense.name}
                name={expense.name}
                date={expense.date}
                description={expense.description}
                amount={expense.amount}
              />
            ))}
            <button
              className="w-[60px] h-[60px] p-3 flex items-center text-6xl justify-center bg-slate-300 rounded-2xl"
              onClick={() => setModalOpen(true)}
            >
              <div className="-translate-y-[5px] font-thin select-none">+</div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
