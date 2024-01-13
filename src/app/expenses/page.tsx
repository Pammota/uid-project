import React from 'react'

type ExpenseProps = {
  name: string;
  date: string;
  description: string;
  amount: number;
}

export const Expense = ({ name, date, description, amount }: ExpenseProps) => {
  return (
    <div className='w-full bg-pink-400 rounded-lg p-2 flex justify-between'>
      <span>{name}</span>
      <span>{date}</span>
      <span>{description}</span>
      <span>{amount}</span>
    </div>
  )
}


export default function Page() {
  return (
    <div className='w-full bg-purple-400 rounded-lg p-2 flex flex-col gap-2 overflow-y-auto items-center'>
      <Expense name="Expense 1" date="13/1/2024" description="Am cumparat o bicicleta" amount={100}></Expense>
      <Expense name="Expense 1" date="13/1/2024" description="Am cumparat o bicicleta" amount={100}></Expense>
      <Expense name="Expense 1" date="13/1/2024" description="Am cumparat o bicicleta" amount={100}></Expense>
      <Expense name="Expense 1" date="13/1/2024" description="Am cumparat o bicicleta" amount={100}></Expense>
      <Expense name="Expense 1" date="13/1/2024" description="Am cumparat o bicicleta" amount={100}></Expense>
      <Expense name="Expense 1" date="13/1/2024" description="Am cumparat o bicicleta" amount={100}></Expense>
      <Expense name="Expense 1" date="13/1/2024" description="Am cumparat o bicicleta" amount={100}></Expense>
      <Expense name="Expense 1" date="13/1/2024" description="Am cumparat o bicicleta" amount={100}></Expense>
      <Expense name="Expense 1" date="13/1/2024" description="Am cumparat o bicicleta" amount={100}></Expense>
      <Expense name="Expense 1" date="13/1/2024" description="Am cumparat o bicicleta" amount={100}></Expense>
      <Expense name="Expense 1" date="13/1/2024" description="Am cumparat o bicicleta" amount={100}></Expense>
      <Expense name="Expense 1" date="13/1/2024" description="Am cumparat o bicicleta" amount={100}></Expense>
      <Expense name="Expense 1" date="13/1/2024" description="Am cumparat o bicicleta" amount={100}></Expense>
      <Expense name="Expense 1" date="13/1/2024" description="Am cumparat o bicicleta" amount={100}></Expense>

      <button className="w-[60px] h-[60px] p-3 flex items-center text-6xl justify-center bg-slate-300 rounded-2xl">
        <div className="-translate-y-[6px] font-light select-none">+</div>
      </button>

    </div>
  )
}