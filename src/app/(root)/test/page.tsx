"use client";
import { Check } from "@/components/icons/Check";
import { Xmark } from "@/components/icons/Xmark";
import { ExpenseSelector } from "@/components/shared/ExpenseSelector";
import { Input } from "@/components/shared/Input";
import { Modal } from "@/components/shared/Modal";
import { TextArea } from "@/components/shared/TextArea";
import React, { useState } from "react";

type Props = {
  yourBudget : number;
  totalBudget : number;
}

export default function Page({yourBudget, totalBudget} : Props) {
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <>
      <button onClick={() => setModalOpen(true)}>OPEN</button>
      <Modal isOpen={modalOpen}>
        <div className="w-full flex justify-center items-center">
          <div className="w-[300px] relative bg-slate-300 rounded-lg flex flex-col items-center p-4 gap-2">
            <button
              className="absolute -right-2.5 -top-2.5 bg-gray-200 p-1 rounded-full"
              onClick={()=>setModalOpen(false)}
            >
              <Xmark />
            </button>
            <span className=" font-medium text-lg">YOUR BUDGET</span>
            <span className="text-green-400">{yourBudget}</span>
            <span className="text-sm">Total Budget</span>
            <span className="text-green-400">{totalBudget}</span>
            <Input label="Sum" type="number"></Input>
            <Input label="Type" type="text"></Input>
            <Input label="Category" type="text"></Input>
            <Input label="Title" type="text"></Input>
            <TextArea label="Description"></TextArea>
          </div>
        </div>
      </Modal>
    </>
  );
}
