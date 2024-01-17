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
  onAddExpense: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const Expense = ({
  modalOpen,
  setModalOpen,
  expense,
}: Props) => {

  return (
    <Modal isOpen={modalOpen}>
      <div className="w-full flex justify-center items-center">
        <div
          className="w-[400px] relative bg-slate-300 rounded-2xl flex flex-col items-center p-8 gap-3"
        >
          <button
            className="absolute -right-2.5 -top-2.5 bg-gray-200 p-1 rounded-full"
            onClick={() => setModalOpen(false)}
          >
            <Xmark />
          </button>
          <div className="flex w-full flex-col justify-center items-center">
            <span className=" font-medium text-3xl">Expense {expense.name}</span>
            <span className="text-green-500 text-2xl p-1 bg-white/60 rounded-lg">
              {expense.amount}$
            </span>
          </div>
        </div>
      </div>
    </Modal>
  );
};
