import React from "react";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white p-4 text-center">
      © {new Date().getFullYear()} Local Government Unit of Nabunturan Document
      Tracking System
    </footer>
  );
}
