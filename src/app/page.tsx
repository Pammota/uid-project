"use client";

export default function Home() {
  return (
      <div className="w-3/4 p-4 bg-white min-h-[90vh] rounded-xl">
        <div className="h-10 inline-flex gap-4">
          <span className="bg-gray-200 text-lg rounded-t-xl px-4 py-2">
            Summary
          </span>
          <span className="bg-gray-400 text-lg rounded-t-xl px-4 py-2">
            Children
          </span>
          <span className="bg-gray-400 text-lg rounded-t-xl px-4 py-2">
            Expenses
          </span>
          <span className="bg-gray-400 text-lg rounded-t-xl px-4 py-2">
            Total
          </span>
          <span className="bg-gray-400 text-lg rounded-t-xl px-4 py-2">
            Other
          </span>
        </div>
        <div className="flex gap-4 w-full h-[85vh] bg-gray-200 rounded-xl rounded-tl-none px-8 py-4">
          <div className="w-[600px] h-[400px] bg-blue-200">GRAPH</div>
          <div className="bg-white h-[400px] flex gap-2 flex-col w-[400px] rounded-xl p-4">
            <span className="font-semibold text-xl">Pending Expenses</span>
            <div className="bg-gray-200 p-2 flex justify-between rounded-lg">
              <span>wow</span>
              <span> 20$</span>
              <span> ✅ </span>
              <span>❌</span>
            </div>
            <div className="bg-gray-200 p-2 flex justify-between rounded-lg">
              <span>wow</span>
              <span> 20$</span>
              <span> ✅ </span>
              <span>❌</span>
            </div>
            <div className="bg-gray-200 p-2 flex justify-between rounded-lg">
              <span>wow</span>
              <span> 20$</span>
              <span> ✅ </span>
              <span>❌</span>
            </div>
            <div className="bg-gray-200 p-2 flex justify-between rounded-lg">
              <span>wow</span>
              <span> 20$</span>
              <span> ✅ </span>
              <span>❌</span>
            </div>
            <div className="bg-gray-200 p-2 flex justify-between rounded-lg">
              <span>wow</span>
              <span> 20$</span>
              <span> ✅ </span>
              <span>❌</span>
            </div>
            <div className="bg-gray-200 p-2 flex justify-between rounded-lg">
              <span>wow</span>
              <span> 20$</span>
              <span> ✅ </span>
              <span>❌</span>
            </div>
          </div>
        </div>
      </div>
  );
}
