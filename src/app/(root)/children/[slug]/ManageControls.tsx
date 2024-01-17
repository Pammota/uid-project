import { useState } from "react";

type FundProps = {
  name: string;
  amount: number;
};

export const Fund = ({ name, amount }: FundProps) => {
  const [currentAmount, setAmount] = useState<number | null>(amount);

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = parseFloat(event.target.value);
    setAmount(isNaN(newAmount) ? null : newAmount);
  };

  return (
    <div className="w-full rounded-xl p-2 flex flex-col gap-2 overflow-y-auto items-start">
      <label className="text-black text-xl">{name}</label>
      <input
        type="number"
        value={currentAmount !== null ? currentAmount : ""}
        onChange={handleAmountChange}
        className="border rounded-xl py-2 px-3 w-1/4 self-start shadow-sm"
      />
    </div>
  );
};

type ToggleButtonProps = {
  label: string;
  status: boolean;
};

export const ToggleButton = ({ label, status }: ToggleButtonProps) => {
  const [currentStatus, setStatus] = useState<boolean | undefined>(status);

  const handleStateChange = () => {
    setStatus((prevStatus) => !prevStatus);
  };

  return (
    <div className="w-full rounded-lg p-2 flex flex-col gap-2 overflow-y-auto items-start">
      <label className="text-black text-xl">{label}</label>
      <div className="pl-1">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            checked={currentStatus}
            onChange={handleStateChange}
          />
          <div className=" w-14 h-7 ring-4 dark:ring-green-900 rounded-full dark:bg-green-700 peer-checked:after:translate-x-full peer-checked:ring-red-900 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-green-600 peer-checked:bg-red-600" />
        </label>
      </div>
    </div>
  );
};

type RemoveButtonProps = {
  onClick: () => void;
};

export const RemoveButton = ({ onClick }: RemoveButtonProps) => {
  return (
    <div className="w-full rounded-xl p-2 flex flex-col gap-2 overflow-y-auto items-start">
      <button
        type="button"
        className="bg-white-500 text-red-700 border-2 border-red-700 hover:bg-red-700 hover:text-white font-medium py-2 px-4 rounded-xl"
        onClick={onClick}
      >
        Remove
      </button>
    </div>
  );
};
