// app/last-transaction/page.tsx

import React from "react";

const LastTransactionPage = () => {
  const transactions = [
    { name: "Rahul", pid: "97897874487", date: "2025-04-15", time: "10:30 AM" },
    { name: "Aman", pid: "8974874874", date: "2025-04-10", time: "09:15 AM" },
    { name: "Sahil", pid: "59659789877", date: "2025-04-05", time: "11:45 AM" },
    { name: "Gaurav", pid: "8598598598", date: "2025-04-01", time: "02:30 PM" },
    { name: "Chirag", pid: "7548878787", date: "2025-03-28", time: "03:45 PM" },
  ];

  return (
    <div className="container mx-auto p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight pb-6">All Transactions</h2>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-t-lg rounded-b-lg">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase border-b border-gray-300">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase border-b border-gray-300">
                Payment ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase border-b border-gray-300">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-700 uppercase border-b border-gray-300">
                Time
              </th>
            </tr>
          </thead>
          <tbody className="dark:bg-[#020d1a]">
            {transactions.map((txn, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-6 py-4 border-b border-gray-300">{txn.name}</td>
                <td className="px-6 py-4 border-b border-gray-300">{txn.pid}</td>
                <td className="px-6 py-4 border-b border-gray-300">{txn.date}</td>
                <td className="px-6 py-4 border-b border-gray-300">{txn.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LastTransactionPage;
