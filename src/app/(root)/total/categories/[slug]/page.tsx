import { Input } from "@/components/shared/Input";
import { TextArea } from "@/components/shared/TextArea";
import React from "react";

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  return (
    <div className="flex flex-col gap-4 w-full bg-gray-200 rounded-xl px-8 py-4 overflow-y-auto">
      <div className="inline-flex w-full justify-between">
        <span className="font-medium text-2xl">Category {slug}</span>
      </div>
      <div className="w-full min-h-[50%] bg-white rounded-xl"></div>

      <hr className="bg-black text-black h-0.5 rounded-md w-full" />

      <div className="w-full flex gap-4">
        <Input label="Name" />
        <Input label="Monthly Limit" />
      </div>
      <TextArea label="Description" />
    </div>
  );
}
