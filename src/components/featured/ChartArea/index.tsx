import { NormalChart } from "@/components/shared/NormalChart";
import PieChartComponent from "@/components/shared/PieChart";
import React, { useState } from "react";

const chartData = [
  [
    { value: 10 },
    { value: 1123 },
    { value: 30 },
    { value: 200 },
    { value: 400 },
    { value: 150 },
    { value: 20 },
  ],
  [
    { value: 200 },
    { value: 10 },
    { value: 20 },
    { value: 30 },
    { value: 413 },
    { value: 150 },
    { value: 400 },
  ],
  [
    { value: 5123 },
    { value: 10 },
    { value: 200 },
    { value: 20 },
    { value: 400 },
    { value: 30 },
    { value: 150 },
  ],
  [
    { value: 30 },
    { value: 400 },
    { value: 10 },
    { value: 123 },
    { value: 20 },
    { value: 200 },
    { value: 150 },
  ],
];

const pieChartData = [
  [
    { name: "Available", value: 80 },
    { name: "Spent", value: 20 },
  ],
  [
    { name: "Available", value: 30 },
    { name: "Spent", value: 70 },
  ],
  [
    { name: "Available", value: 45 },
    { name: "Spent", value: 55 },
  ],
  [
    { name: "Available", value: 60 },
    { name: "Spent", value: 40 },
  ],
];

const pieChartColors = ["#00cd91", "#0E78DF"];

export const ChartArea = ({ dataNr, height }: { dataNr?: number; height?: number }) => {
  const [chartType, setChartType] = useState<"normal" | "pie">("normal");
  if (dataNr === undefined) dataNr = 0;
  return (
    <div className="w-full relative h-full bg-white flex flex-col gap-2 rounded-xl p-4">
      <span className="font-semibold text-xl">Budget</span>
      {chartType === "normal" && (
        <NormalChart name="budget" data={chartData[dataNr]} height={height} />
      )}
      {chartType === "pie" && (
        <PieChartComponent
          data={pieChartData[dataNr]}
          colors={pieChartColors}
          height={height}
        />
      )}
      <div className="flex flex-col absolute -bottom-10 gap-2">
        <div className="w-[130px] h-[40px] translate-y-[8px]  -translate-x-[2px] z-[10] bg-white" />
        <div className="flex gap-2">
          <button
            className="bg-green-300 py-2 px-2.5 text-white  -translate-y-8 hover:translate-y-0 transition-all rounded-lg shadow-sm shadow-black/20"
            onClick={() => {
              setChartType("normal");
            }}
          >
            Normal
          </button>
          <button
            className="bg-blue-300 py-2 px-2.5 text-white -translate-y-8 hover:translate-y-0 transition-all rounded-lg shadow-sm shadow-black/20"
            onClick={() => {
              setChartType("pie");
            }}
          >
            Pie
          </button>
        </div>
      </div>
    </div>
  );
};
