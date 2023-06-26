"use client";
import axios from "axios";
import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignupSubmit = async () => {
    try {
      const res = await axios.post("localhost:3001/signup", {
        name,
        email,
        password,
      });
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="flex min-h-screen flex-col items-center  p-24">
      <h1>SIGNUP</h1>
      <form action="submit">
        <div className="flex flex-col space-y-4 p-5 bg-slate-400 rounded-sm items-center">
          <input
            className="p-1 rounded-sm"
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="p-1 rounded-sm"
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="p-1 rounded-sm"
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button
            type="submit"
            className="bg-slate-50 w-[100px] rounded-sm p-3"
            onClick={handleSignupSubmit}
          >
            Sign up!
          </button>
        </div>
      </form>
    </div>
  );
};
export default Signup;
