import React from "react";

type Props = {
  label?: string;
} & React.ComponentProps<"input">;

export const Input = ({ label, className, ...props }: Props) => {
  return (
    <div className="flex flex-col w-full">
      {label && <label className="">{label}</label>}
      <input type="text" className={`p-2 rounded-lg ${className??"bg-white"}`} {...props} />
    </div>
  );
};
