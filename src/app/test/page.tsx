"use client";
import { Check } from "@/components/icons/Check";
import { Xmark } from "@/components/icons/Xmark";
import { ExpenseSelector } from "@/components/shared/ExpenseSelector";
import { Modal } from "@/components/shared/Modal";
import React, { useState } from "react";

export default function Page() {
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <>
      <button onClick={() => setModalOpen(true)}>OPEN</button>
      <Modal isOpen={modalOpen}>
        <div className="w-full flex justify-center items-center">
          <div className="w-[300px] relative bg-white rounded-lg flex flex-col items-center p-4 gap-2">
            <button
              className="absolute -right-2.5 -top-2.5 bg-gray-200 p-1 rounded-full"
              onClick={()=>setModalOpen(false)}
            >
              <Xmark />
            </button>
            <span className=" font-medium text-lg">YOUR BUDGET</span>
            <span className="text-green-400">300$</span>
            <span className="text-sm">Total Budget</span>
            <span className="text-green-400">2000$</span>
           
          </div>
        </div>
      </Modal>
    </>
  );
}
