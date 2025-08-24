import React, { useState, useEffect } from "react";
import { auth, signOut, onAuthStateChanged } from "./firebaseConfig";
import Navbar from "./pages/Navbar";
import Dashboard from "./components/Dashboard";
import Footer from "./pages/Footer";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar user={user} handleLogOut={handleLogOut} />
      <Dashboard />
      <Footer />
    </div>
  );
}
