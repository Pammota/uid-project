import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type Measurement = {
  value: number;
};

type Props = {
  data: Measurement[];
  name: string;
  height?: number;
};

export const NormalChart = ({ data, name, height }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={height ?? 340}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" name={name} dataKey="value" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};
