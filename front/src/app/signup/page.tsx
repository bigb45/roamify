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
    <div className="flex min-h-screen flex-col items-center p-24">
      <form action="submit">
        <div className="flex flex-col space-y-4 p-10  bg-slate-100 rounded-sm items-center shadow-lg">
          <h1 className="text-2xl">SIGNUP</h1>

          <input
            className="p-1 rounded-sm border border-slate-500"
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="p-1 rounded-sm border border-slate-500"
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="p-1 rounded-sm border border-slate-500"
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button
            type="submit"
            className="border bg-sky-500 text-white w-[100px] rounded-md px-3 py-2"
            onClick={handleSignupSubmit}
          >
            Sign up
          </button>
          <a href="login" className="text-xs text-blue-500 underline">
            Login
          </a>
        </div>
      </form>
    </div>
  );
};
export default Signup;
