"use client";
import "./globals.css";
import { usePathname } from "next/navigation";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const tab = pathname.split("/")[1];

  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen w-full gap-4 bg-gray-200 items-center justify-between p-4">
          <div className="flex text-white flex-col gap-4 w-full max-w-[25%] px-4 py-10 py bg-emerald-400 min-h-[94vh] rounded-xl">
            <div className="bg-black/40 rounded-full p-2 w-full h-[300px]"></div>
            <span className="font-semibold text-3xl">Ionut</span>

            <div className="pt-12 flex flex-col">
              <span className="font-medium text-2xl">Income</span>
              <span className="font-medium text-2xl">Budget</span>
              <span className="font-medium text-2xl">Expenses</span>
              <span className="font-medium text-2xl">Savings</span>
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
