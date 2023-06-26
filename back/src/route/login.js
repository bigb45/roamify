import express from "express";

const login = express.Router();

login.post("/login", (req, res) => {
  console.log("user logon");
  res.status(200).json({ message: "I got it my nigga", ...req.body });
});

export default login;
