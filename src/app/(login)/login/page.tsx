"use client";
import Button from "@/components/shared/Button";
import { Input } from "@/components/shared/Input";
import { User, useStore, useUserStore } from "@/stores";
import { useState } from "react";

const parentUser = {
  username: "parent",
  password: "parent",
  role: "parent",
};

const childUser = {
  username: "child",
  password: "child",
  role: "child",
};

const userList = [parentUser, childUser];

export default function Page() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState(false);

  const { updateUser } = useUserStore();

  return (
    <main className="flex min-h-screen w-full gap-4 bg-gray-200 items-center justify-center flex-col p-4">
      <form
        className="p-6 rounded-lg bg-white flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          const user = userList.find(
            (user) => user.username === username && user.password === password
          );
          if (user) {
            setError(false);
            updateUser(user as User);
            window.location.href = "/";
          } else {
            setError(true);
          }
        }}
      >
        <span className="font-medium text-4xl text-center">Login</span>
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="bg-gray-200"
          label="Username"
        ></Input>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-gray-200"
          label="Password"
          type="password"
        ></Input>
        {error && (
          <span className="text-red-500 text-sm">
            Username or password is incorrect
          </span>
        )}
        <Button type="submit">Login</Button>
      </form>
    </main>
  );
}
