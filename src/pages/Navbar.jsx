import React from "react";

function Navbar({ user, handleLogOut }) {
  return (
    <header className="bg-green-800 text-white p-4">
      <div className="flex justify-between items-center">
        {/* left side logo + email */}
        <div className="flex flex-1 items-center space-x-3">
          {/* <img
            src="/logo_nab.png"
            alt="logo nab"
            className="h-8 w-8 object-contain"
          /> */}
          <span className="font-medium">
            Login as: {user?.email || "Guest"}
          </span>
        </div>
        {/* center div for title */}
        <div className="flex-1 flex">
          <h3 className="text-center text-white font-extrabold">
            Document Tracking System
          </h3>
        </div>
        {/* Right div inclues buttons */}
        <div className="flex items-center space-x-3">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Forward Document
          </button>
          <button
            onClick={handleLogOut}
            className="bg-red-500 hover:bg-red-600 text-white px-4 p-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
