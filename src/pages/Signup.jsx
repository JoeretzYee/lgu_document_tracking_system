import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  Checkbox,
  Label,
  TextInput,
  Select,
} from "flowbite-react";
import {
  auth,
  db,
  createUserWithEmailAndPassword,
  doc,
  setDoc,
} from "../firebaseConfig";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");

  // functions
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        email,
        department,
        createdAt: new Date().toISOString(),
      });

      alert("User registered successful");
    } catch (error) {
      let errorMessage = "";
      if (error.code === "auth/email-already-in-use") {
        errorMessage = "This email is already in use.";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Invalid email address.";
      } else if (error.code === "auth/weak-password") {
        errorMessage = "Password should be at least 6 characters.";
      }
      alert(errorMessage);
    }
  };

  return (
    <div className="relative flex items-center justify-center w-full min-h-screen bg-cover bg-center">
      <Card className="relative w-full !bg-white pt-12">
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gray-900 rounded-full overflow-hidden">
          <img
            src="/ugban_sa_gugma.png"
            className="w-24 h-24 bg-gray rounded-full object-cover"
            alt=""
          />
        </div>

        <form className="flex flex-col gap-4">
          <h1 className="text-center text-2xl !text-gray-800 ">Sign Up</h1>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" className="!text-gray-800 font-bold">
                Email
              </Label>
            </div>
            <TextInput
              id="email1"
              type="email"
              placeholder="ex: youremail@gmail.com"
              required
              color="white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" className="!text-gray-800 font-bold">
                Password
              </Label>
            </div>
            <TextInput
              id="password1"
              type="password"
              placeholder="password here..."
              required
              color="white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="department" className="!text-gray-800 font-bold">
                Department
              </Label>
            </div>
            <Select
              id="departments"
              required
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option value="" disabled selected>
                Select Department
              </option>
              <option>Mayors</option>
              <option>Youth/Info</option>
              <option>Accounting</option>
              <option>Treasury</option>
              <option>Bplo</option>
              <option>Budget</option>
              <option>Assesor</option>
              <option>MHO</option>
              <option>Magro</option>
              <option>Registrar</option>
              <option>MPDC</option>
              <option>HR</option>
              <option>MSWD</option>
              <option>BAC</option>
              <option>Comelec</option>
              <option>GSO</option>
              <option>NERT</option>
              <option>Housing</option>
            </Select>
          </div>

          <Button
            color="green"
            type="submit"
            className="!text-white-800 uppercase"
            onClick={handleRegister}
          >
            Register
          </Button>
          <small className="text-gray-500 text-center block mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </small>
        </form>
      </Card>
    </div>
  );
}

export default Signup;
