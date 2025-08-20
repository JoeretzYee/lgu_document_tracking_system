import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { signInWithEmailAndPassword, auth } from "../firebaseConfig";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      alert(`${user.email} has been logged in`);
      navigate("/");
    } catch (err) {
      console.error(err);
      if (err.code === "auth/invalid-credential") {
        setError("Invalid email or password.");
      } else if (err.code === "auth/user-not-found") {
        setError("No user found with this email.");
      } else if (err.code === "auth/wrong-password") {
        setError("Incorrect password.");
      } else {
        setError("Failed to login. Please try again.");
      }
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
          <h1 className="text-center text-2xl !text-gray-800 ">Login</h1>
          {error && (
            <p className="text-red-500 text-center -text-sm">{error}</p>
          )}
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

          <Button
            color="green"
            type="submit"
            className="!text-white-800 uppercase"
            onClick={handleLogin}
          >
            Submit
          </Button>
          <small className="text-gray-500 text-center block mt-2">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Signup
            </Link>
          </small>
        </form>
      </Card>
    </div>
  );
}

export default Login;
