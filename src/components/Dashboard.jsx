import React, { useState } from "react";
import Inbox from "../components/Inbox";
import Forwarded from "../components/Forwarded";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("inbox");
  return (
    <main className="flex-1 flex ">
      {/* Left Section */}
      <aside className="w-64 bg-gray-700 p-4 flex flex-col">
        <nav className="flex flex-col space-y-2 flex-1">
          <button
            onClick={() => setActiveTab("inbox")}
            className={`px-4 py-2 rounded text-center ${
              activeTab === "inbox"
                ? "bg-blue-600 text-white"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          >
            Inbox
          </button>
          <button
            onClick={() => setActiveTab("forwarded")}
            className={`px-4 py-2 rounded text-center ${
              activeTab === "forwarded"
                ? "bg-green-600 text-white"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          >
            Sent
          </button>
        </nav>

        {/* Bottom logos */}
        <div className="flex justify-center space-x-2 mt-4">
          <img
            src="/ugban_sa_gugma.png"
            alt="uban sa gugma logo"
            className="h-10 w-10 object-contain"
          />
          <img
            src="/logo_nab.png"
            alt="Logo 2"
            className="h-10 w-10 object-contain"
          />
        </div>
      </aside>
      {/* Right section */}
      <section className="flex-1 p-6 bg-gray-50">
        {activeTab === "inbox" && <Inbox />}
        {activeTab === "forwarded" && <Forwarded />}
      </section>
    </main>
  );
}

export default Dashboard;
