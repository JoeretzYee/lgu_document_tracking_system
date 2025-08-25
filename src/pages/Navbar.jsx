import React, { useState } from "react";
import ForwardDocumentModal from "../modals/ForwardDocumentModal";

function Navbar({ user, handleLogOut }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <header className="bg-green-800 text-white p-4">
      <div className="flex justify-between items-center">
        {/* Left side: logo + email */}
        <div className="flex flex-1 items-center space-x-3">
          <span className="font-medium">
            Login as: {user?.email || "Guest"}
          </span>
        </div>

        {/* Center: Title */}
        <div className="flex-1 flex">
          <h3 className="text-center text-white font-extrabold">
            Document Tracking System
          </h3>
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setOpenModal(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
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

      {/* Modal */}
      <ForwardDocumentModal open={openModal} onClose={() => setOpenModal(false)} />
    </header>
  );
}

export default Navbar;
