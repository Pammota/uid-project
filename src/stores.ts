import { create } from "zustand";
import { useEffect, useState } from "react";
import { createJSONStorage, persist } from "zustand/middleware";

export type User = {
  username: string;
  password: string;
  role: "parent" | "child";
 }

export const useStore = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F
) => {
  const result = store(callback) as F;
  const [data, setData] = useState<F>();

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
};


// Logged user store
type UserStore = {
  user: User | null;
  updateUser: (newUser: User | null) => void;
  removeUser: () => void;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      updateUser: (newUser) => set({ user: newUser }),
      removeUser: () => set({ user: null }),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

// type ChildStore = {
//   child: User | null;
//   updateUser: (newUser: User | null) => void;
//   removeUser: () => void;
// };

// export const useChildStore = create<ChildStore>(
//   (set) => ({
//     child: null,
//     updateUser: (newChild) => set({ child: newChild }),
//     removeUser: () => set({ child: null }),
//   })
// );
