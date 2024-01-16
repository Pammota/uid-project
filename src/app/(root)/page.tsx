"use client";

import { Check } from "@/components/icons/Check";
import { Xmark } from "@/components/icons/Xmark";
import { NormalChart } from "@/components/shared/NormalChart";
import PieChartComponent from "@/components/shared/PieChart";
import { useState } from "react";

export const Expense = ({
  name,
  value,
  onClick,
}: {
  name: string;
  value: number;
  onClick: () => void;
}) => {
  return (
    <div className="bg-gray-200 p-2 flex justify-between items-center rounded-lg">
      <div className="flex justify-between w-full pr-5">
        <span>{name}</span>
        <span> {value}$</span>
      </div>
      <div className="flex gap-4">
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

const chartData = [
  { value: 10 },
  { value: 1123 },
  { value: 30 },
  { value: 200 },
  { value: 400 },
  { value: 150 },
  { value: 20 },
];

const pieChartData = [
  { name: "unu", value: 80 },
  { name: "doi", value: 20 },
];

const pieChartColors = ["#00cd91", "#0E78DF"];

export default function Home() {
  const [expenses, setExpenses] = useState(expensesList);
  const [chartType, setChartType] = useState<"normal" | "pie">("normal");

  return (
    <div className="flex gap-4 w-full bg-gray-200 rounded-xl rounded-tl-none px-8 py-4">
      <div className="w-[60%] relative h-[400px] bg-white flex flex-col gap-2 rounded-xl p-4">
        <span className="font-semibold text-xl">Budget</span>
        {chartType === "normal" && (
          <NormalChart name="budget" data={chartData} />
        )}
        {chartType === "pie" && (
          <PieChartComponent data={pieChartData} colors={pieChartColors} />
        )}
        <div className="flex flex-col absolute -bottom-10 gap-2">
          <div className="w-[130px] h-[40px] translate-y-[8px]  -translate-x-[2px] z-[10] bg-white" />
          <div className="flex gap-2">
            <button
              className="bg-green-300 py-2 px-2.5 text-white  -translate-y-8 hover:translate-y-0 transition-all rounded-lg shadow-sm shadow-black/20"
              onClick={() => {
                setChartType("normal");
              }}
            >
              Normal
            </button>
            <button
              className="bg-blue-300 py-2 px-2.5 text-white -translate-y-8 hover:translate-y-0 transition-all rounded-lg shadow-sm shadow-black/20"
              onClick={() => {
                setChartType("pie");
              }}
            >
              Pie
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white h-[400px] flex gap-2 flex-col w-[40%] rounded-xl p-4">
        <span className="font-semibold text-xl">Pending Expenses</span>
        <div className="flex gap-2 flex-col w-full overflow-y-auto">
          {expenses.map((expense, i) => (
            <Expense
              key={i}
              name={expense.name}
              value={expense.value}
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
