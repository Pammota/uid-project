"use client";
import { ChartArea } from "@/components/featured/ChartArea";
import { LeftArrow } from "@/components/icons/LeftArrow";
import { Input } from "@/components/shared/Input";
import { TextArea } from "@/components/shared/TextArea";
import React, { useState } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  const [category, setCategory] = useState(slug);
  const [limit, setLimit] = useState(Math.floor(Math.random() * 500));

  return (
    <div className="flex flex-col gap-4 w-full bg-gray-200 rounded-xl px-8 py-4 overflow-y-auto">
      <a
        href="/total/categories"
        className="px-4 py-2 self-start max-h-12 rounded-lg bg-blue-200 font-medium text-lg flex items-center gap-2 hover:brightness-90"
      >
        <LeftArrow className="w-4 h-4 stroke-[3px]" /> Back
      </a>
      <div className="inline-flex w-full justify-between">
        <span className="font-medium text-2xl">Category {slug}</span>
      </div>
      <div className="w-full min-h-[50%] bg-white rounded-xl">
        <ChartArea dataNr={Math.floor(Math.random() * 3)} />
      </div>

      <hr className="bg-black text-black h-0.5 rounded-md w-full" />

      <div className="w-full flex gap-4">
        <Input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          label="Name"
        />
        <Input
          value={limit}
          onChange={(e) => setLimit(parseInt(e.target.value))}
          label="Monthly Limit"
        />
      </div>
      <TextArea label="Description" />
    </div>
  );
}
