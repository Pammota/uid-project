"use client";
import { useStore, useUserStore } from "@/stores";
import "./globals.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const tabs = ["summary", "children", "expenses", "total", "other", "test"];

const Tab = ({ tabs, tab }: { tabs: string[]; tab: string }) => {
  if (tab === "") tab = "summary";

  return (
    <div className="h-10 inline-flex gap-4">
      {tabs.map((currentTab) => (
        <span
          key={currentTab}
          className={`${
            currentTab === tab ? "bg-gray-200" : "bg-gray-400"
          } text-lg rounded-t-xl px-4 py-2 capitalize cursor-pointer select-none`}
          onClick={() => {
            if (currentTab === "summary") {
              window.location.href = `/`;
            } else {
              window.location.href = `/${currentTab}`;
            }
          }}
        >
          {currentTab}
        </span>
      ))}
    </div>
  );
};

const parentData = {
  income: 2000,
  budget: 1000,
  expenses: 600,
  savings: 400,
};

const childData = {
  budget: 500,
  expenses: 300,
  savings: 200,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const tab = pathname.split("/")[1];

  const user = useStore(useUserStore, (state) => state.user);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  useEffect(() => {
    if (!user && pageLoaded) {
      window.location.href = "/login";
    }
  }, [pageLoaded, user]);

  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen w-full gap-4 bg-gray-200 items-center justify-between p-4">
          <div className="flex text-white flex-col gap-4 w-full max-w-[25%] px-4 py-10 py bg-emerald-400 min-h-[94vh] rounded-xl">
            <div className="bg-sky-400/80 overflow-hidden flex justify-center items-center rounded-2xl w-full h-[300px]">
              <img src="https://api.dicebear.com/7.x/lorelei/svg?seed=abc" 
              alt="profilePic"
              className="h-full scale-[70%]"
              height={300}
               />
            </div>
            <span className="font-semibold text-3xl capitalize">
              {user?.username}
            </span>

            <div className="pt-12 flex flex-col">
              {user?.role === "parent" && (
                <div className="font-medium text-2xl flex justify-between w-full pr-10">
                  <span>Income:</span>
                  <span>{parentData.income} </span>
                </div>
              )}
              <div className="font-medium text-2xl flex justify-between w-full pr-10">
                <span>Budget:</span>
                <span>
                  {user?.role === "parent"
                    ? parentData.budget
                    : childData.budget}
                </span>
              </div>
              <div className="font-medium text-2xl flex justify-between w-full pr-10">
                <span>Expenses:</span>
                <span>
                  {user?.role === "parent"
                    ? parentData.expenses
                    : childData.expenses}
                </span>
              </div>
              <div className="font-medium text-2xl flex justify-between w-full pr-10">
                <span>Savings:</span>
                <span>
                  {user?.role === "parent"
                    ? parentData.savings
                    : childData.savings}
                </span>
              </div>
            </div>
          </div>

          <div className="w-3/4 p-4 bg-white min-h-[90vh] rounded-xl">
            <Tab tab={tab} tabs={tabs} />
            <div className="flex gap-4 w-full h-[85vh] bg-gray-200 rounded-xl rounded-tl-none px-8 py-4">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
