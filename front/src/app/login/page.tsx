"use client";
import React, { useState } from "react";
import axios from "axios";
const Login = () => {
  const handleLoginSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <form action="submit" onSubmit={handleLoginSubmit}>
        <div className="flex flex-col space-y-4 p-10  bg-slate-100 rounded-sm items-center shadow-lg">
          <h1 className="text-2xl">LOGIN</h1>
          <input
            className="p-1 rounded-sm border border-slate-500"
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div className="flex flex-col space-y-2">
            <input
              className="p-1 rounded-sm border border-slate-500"
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <a href="signup" className="text-xs text-blue-500">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="border bg-sky-500 text-white w-[100px] rounded-md px-3 py-2"
          >
            Log in
          </button>
          <a href="signup" className="text-xs text-blue-500 underline">
            Signup
          </a>
        </div>
      </form>
    </div>
  );
};
export default Login;
