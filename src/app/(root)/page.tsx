"use client";

import { ChartArea } from "@/components/featured/ChartArea";
import { Check } from "@/components/icons/Check";
import { Xmark } from "@/components/icons/Xmark";
import { useStore, useUserStore } from "@/stores";
import { useState } from "react";

export const Expense = ({
  name,
  value,
  onClick,
  childExpense,
}: {
  name: string;
  value: number;
  onClick: () => void;
  childExpense?: boolean;
}) => {
  return (
    <div className="bg-gray-200 p-2 flex justify-between items-center rounded-lg">
      <div className="flex justify-between w-full pr-5">
        <span>{name}</span>
        <span> {value}$</span>
      </div>
      <div className="flex gap-4">
        {!childExpense && (
          <>
            <button
              onClick={onClick}
              className=" bg-white shadow-sm shadow-black/20 text-green-400 p-1 rounded-lg hover:brightness-75"
            >
              <Check />
            </button>
            <button
              onClick={onClick}
              className=" bg-white shadow-sm shadow-black/20 text-red-400 p-1 rounded-lg hover:brightness-75"
            >
              <Xmark />
            </button>
          </>
        )}

        {childExpense && (
          <>
            {Math.floor(Math.random() * 2) === 0 ? (
              <div className=" bg-white shadow-sm shadow-black/20 text-green-400 p-1 rounded-lg">
                <Check />
              </div>
            ) : (
              <div className=" bg-white shadow-sm shadow-black/20 text-red-400 p-1 rounded-lg">
                <Xmark />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const expensesList = [
  { name: "Shoes (Ana)", value: 100 },
  { name: "Sandwich (Bob)", value: 10 },
  { name: "School trip (Ana)", value: 300 },
  { name: "Books (Ana)", value: 20 },
  { name: "Exam Taxes (Bob)", value: 1230 },
  { name: "Cool Toy (Bob)", value: 120 },
  { name: "Cigarettes (Ana)", value: 5 },
];

export default function Home() {
  const [expenses, setExpenses] = useState(expensesList);
  const user = useStore(useUserStore, (state) => state.user);

  return (
    <div className="flex gap-4 w-full bg-gray-200 rounded-xl rounded-tl-none px-8 py-4">
      <div className="h-fit w-full">
        <ChartArea />
      </div>

      <div className="bg-white h-[400px] flex gap-2 flex-col w-[40%] rounded-xl p-4">
        <span className="font-semibold text-xl">{user?.role === "parent" ?  "Pending" : ""} Expenses</span>
        <div className="flex gap-2 flex-col w-full overflow-y-auto">
          {expenses.map((expense, i) => (
            <Expense
              key={i}
              name={expense.name}
              value={expense.value}
              childExpense={user?.role === "child"}
              onClick={() => {
                setExpenses(expenses.filter((_, index) => index !== i));
              }}
            />
          ))}
          {expenses.length === 0 && (
            <span className="text-center w-full opacity-50 h-[300px] flex justify-center items-center text-xl font-semibold">
              No pending expenses
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
