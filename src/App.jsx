import React, { useState, useEffect } from "react";
import {
  auth,
  signOut,
  onAuthStateChanged,
  doc,
  getDoc,
  db,
} from "./firebaseConfig";
import Navbar from "./pages/Navbar";
import Dashboard from "./components/Dashboard";
import Footer from "./pages/Footer";

export default function App() {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        //fetch user collection to get the department field
        const userDocRef = doc(db, "users", currentUser.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          setUserProfile(userDocSnap.data());
        } else {
          console.warn("No User profile Found");
          setUserProfile(null);
        }
      } else {
        setUser(null);
        setUserProfile(null);
      }
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
      <Navbar
        user={user}
        userProfile={userProfile}
        handleLogOut={handleLogOut}
      />
      <Dashboard />
      <Footer />
    </div>
  );
}
