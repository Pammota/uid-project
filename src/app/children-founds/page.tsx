"use client"
import React, {useState} from "react";

type FoundProps = {
    name: string;
    amount: number;
}

export const Found = ({name, amount} : FoundProps) => {
    
    const [currentAmount, setAmount] = useState<number | null>(amount);

    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newAmount = parseFloat(event.target.value);
        setAmount(isNaN(newAmount) ? null : newAmount);
    }

    return (
        <div className="w-full bg-yellow-400 rounded-lg p-2 flex flex-col gap-2 overflow-y-auto items-start">
            <label className="text-black text-xl">
                {name}
            </label>
            <input
                type="number"
                value={currentAmount !== null ? currentAmount : ''}
                onChange={handleAmountChange}
                className="border rounded py-2 px-3 w-1/2 self-start"
            />
        </div>
    )

}

export default function Page() {
    return (
        <div className="w-full bg-blue-400 rounded-lg p-2 flex flex-col gap-2 overflow-y-auto items-center">
            <Found name="Monthly Budget" amount={100}/>
            <Found name="Monthly Income" amount={100}/>
        </div>
    )
}