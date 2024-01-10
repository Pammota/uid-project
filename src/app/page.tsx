"use client";
import Button from "@/components/shared/Button";
import { useState } from "react";

export default function Home() {
  const [showCeva, setShowCeva] = useState(false);

  const doSomething = () => {
    setShowCeva(!showCeva);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button className="" onClick={doSomething}>Click me</Button>
      {showCeva && <div>CEVA</div>}
    </main>
  );
}
