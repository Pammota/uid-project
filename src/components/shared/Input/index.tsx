import React from "react";

type Props = {
label : string;
}

export const Input = () => {
  return (
    <div className="flex flex-col">
      <label className="">Monthly Limit</label>
      <input type="text" className="p-2 rounded-lg bg-white" />
    </div>
  );
};
