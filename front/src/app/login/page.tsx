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
      <h1>LOGIN</h1>
      <form action="submit" onSubmit={handleLoginSubmit}>
        <div className="flex flex-col space-y-4 p-5 bg-slate-400 rounded-sm items-center">
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
              setPassword(e.target.value);
            }}
          />
          <button
            type="submit"
            className="bg-slate-50 w-[100px] rounded-sm p-3 "
          >
            Sign up!
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
