import React from "react";

type Props = {
  label?: string;
} & React.ComponentProps<"input">;

export const Input = ({ label, ...props }: Props) => {
  return (
    <div className="flex flex-col">
      {label && <label className="">{label}</label>}
      <input type="text" className="p-2 rounded-lg bg-white" {...props} />
    </div>
  );
};
