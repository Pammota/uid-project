"use client";

import { Xmark } from "@/components/icons/Xmark";
import { Input } from "@/components/shared/Input";
import { Modal } from "@/components/shared/Modal";
import { useState } from "react";

type ChildProps = {
  name: string;
  color: string;
  selected?: boolean;
};

export const generatePastel = () => {
  function hslToHex(h: number, s: number, l: number) {
    l /= 100;
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color)
        .toString(16)
        .padStart(2, "0");
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  }
  let hue = Math.floor(Math.random() * 720);
  return hslToHex(hue, 100, 80);
};

export const Child = ({ name, color, selected }: ChildProps) => {
  return (
    <div className={`w-[200px] cursor-pointer h-[200px] p-3 flex flex-col items-center justify-between rounded-2xl ${selected ? "": "bg-slate-300"}`}
      onClick={() => {
        window.location.href = `/children/${name}`;
      }}
    >
      <div
        style={{ background: color }}
        className="overflow-hidden flex justify-center items-center rounded-xl max-h-[80%] shadow-md"
      >
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img
          className="w-full scale-75"
          src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${name}`}
          alt={name}
          width={200}
          height={200}
        />
      </div>
      <span className="font-medium">{name}</span>
    </div>
  );
};

const childrenList = [
  {
    name: "Michael",
    color: generatePastel(),
  },
  {
    name: "Andrei",
    color: generatePastel(),
  },
  {
    name: "Diana",
    color: generatePastel(),
  },
  {
    name: "Mary",
    color: generatePastel(),
  },
  {
    name: "Aaron",
    color: generatePastel(),
  },
];

export default function Page() {
  const [children, setChildren] = useState(childrenList);
  const [childName, setChildName] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const onAddChild = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setChildren([...children, { name: childName, color: generatePastel() }]);
    setChildName("");
    setModalOpen(false);
  };

  return (
    <div className="w-full h-fit max-h-full flex gap-y-4 flex-wrap gap-4 overflow-y-auto">
      <Modal isOpen={modalOpen}>
        <div className="w-full flex justify-center items-center">
          <form
            className="w-[300px] relative bg-slate-300 rounded-lg flex flex-col items-center p-4 gap-2"
            onSubmit={onAddChild}
          >
            <button
              className="absolute -right-2.5 -top-2.5 bg-gray-200 p-1 rounded-full"
              type="button"
              onClick={() => {
                setModalOpen(false);
                setChildName("")
              }}
            >
              <Xmark />
            </button>

            <span>Child name</span>
            <Input
              type="text"
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
            />
            <button
              className="bg-green-400 text-white px-4 py-2 rounded-lg"
              type="submit"
            >
              Add
            </button>
          </form>
        </div>
      </Modal>

      {children.map((child, i) => (
        <Child key={i} name={child.name} color={child.color} />
      ))}

      <div className="w-[200px] h-[200px] flex justify-center items-center">
        <button
          onClick={() => setModalOpen(true)}
          className="w-[100px] h-[100px] p-3 flex items-center text-9xl justify-center bg-slate-300 rounded-2xl"
        >
          <div className="-translate-y-[12.5px] text-black/50 font-thin select-none">
            +
          </div>
        </button>
      </div>
    </div>
  );
}
