import React from "react";
import { auth, signOut } from "./firebaseConfig";

export default function App() {
  const handleLogOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      hello <button onClick={handleLogOut}>logout</button>
    </div>
  );
}
