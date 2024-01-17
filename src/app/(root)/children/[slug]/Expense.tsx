import { Xmark } from "@/components/icons/Xmark";
import { Input } from "@/components/shared/Input";
import { Modal } from "@/components/shared/Modal";
import { TextArea } from "@/components/shared/TextArea";
import { useEffect, useState } from "react";
import { ExpenseType } from "./page";

type Props = {
  yourBudget: number;
  totalBudget: number;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  expense: ExpenseType;
  setExpense: React.Dispatch<React.SetStateAction<ExpenseType>>;
  onAddExpense: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const Expense = ({
  yourBudget,
  totalBudget,
  modalOpen,
  setModalOpen,
  expense,
  setExpense,
  onAddExpense,
}: Props) => {
  useEffect(() => {
    if (!expense) {
      setExpense({
        name: "",
        amount: 0,
        description: "",
        date: new Date().toDateString(),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Modal isOpen={modalOpen}>
      <div className="w-full flex justify-center items-center">
        <form
          className="w-[400px] relative bg-slate-300 rounded-2xl flex flex-col items-center p-8 gap-3"
          onSubmit={onAddExpense}
        >
          <button
            className="absolute -right-2.5 -top-2.5 bg-gray-200 p-1 rounded-full"
            onClick={() => setModalOpen(false)}
          >
            <Xmark />
          </button>
          <div className="flex w-full flex-col justify-center items-center">
            <span className=" font-medium text-3xl">YOUR BUDGET</span>
            <span className="text-green-500 text-2xl p-1 bg-white/60 rounded-lg">
              {yourBudget}$
            </span>
            <span className="text-lg">Total Budget</span>
            <span className="text-green-500 p-1 bg-white/60 rounded-lg">
              {totalBudget}$
            </span>
          </div>
          <Input
            value={expense.name}
            onChange={(e) => {
              setExpense({ ...expense, name: e.target.value });
            }}
            className="w-full"
            label="Title"
            type="text"
          />
          <Input
            value={expense.amount}
            onChange={(e) => {
              setExpense({ ...expense, amount: parseInt(e.target.value) });
            }}
            className="w-full"
            label="Amount"
            type="number"
          />
          <Input className="w-full" label="Type" type="text" />
          <Input className="w-full" label="Category" type="text" />
          <TextArea
            value={expense.description}
            onChange={(e) => {
              setExpense({ ...expense, description: e.target.value });
            }}
            label="Description"
          />
          <button type="submit" className="rounded-xl bg-green-400 px-6 py-2 ">
            <span className="text-white font-medium">Add</span>
          </button>
        </form>
      </div>
    </Modal>
  );
};
