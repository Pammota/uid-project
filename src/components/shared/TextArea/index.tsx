import React from "react";

type Props = {
  label?: string;
} & React.ComponentProps<"textarea">;

export const TextArea = ({ label, ...props }: Props) => {
  return (
    <div className="flex flex-col h-full w-full">
      {label && <label className="">{label}</label>}
      <textarea className="p-2 rounded-lg bg-white h-full" {...props} />
    </div>
  );
};
