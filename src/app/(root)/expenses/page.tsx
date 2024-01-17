"use client";
import { useState } from "react";
import { Expense } from "../children/[slug]/Expense";

type ExpenseProps = {
  name: string;
  date: string;
  description: string;
  amount: number;
  onClick?: () => void;
};

export const ExpenseLine = ({ name, date, description, amount, onClick }: ExpenseProps) => {
  return (
    <div className="w-full bg-gray-200 rounded-lg p-2 flex justify-between"
    onClick={onClick}>
      <div className="w-1/2 flex justify-between pr-32">
        <span>{name}</span>
        <span>{date}</span>
      </div>
      <div className="w-1/2 flex justify-between pl-32">
        <span>{description}</span>
        <span>{amount}$</span>
      </div>
    </div>
  );
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

export default function Page() {

  const [expenses, setExpenseList] = useState(expenseList);
  const [modalOpen, setModalOpen] = useState(false);
  const [expense, setExpense] = useState({
    name: "",
    amount: 0,
    description: "",
    date: new Date().toLocaleDateString(),
  });
  return (
    <div className="flex flex-col w-full gap-4 h-full">
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
      <span className="w-full text-4xl font-medium">Your expenses</span>
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

        <button className="w-[60px] h-[60px] p-3 flex items-center text-6xl justify-center bg-slate-300 rounded-2xl"
        onClick={()=> setModalOpen(true)}>
          <div className="-translate-y-[5px] font-thin select-none">+</div>
        </button>
      </div>
    </div>
  );
}
