import express from "express";

const signup = express.Router();

signup.post("/signup", (req, res) => {
  console.log("user logon");
  res.status(200).json({ message: "I got it", ...req.body });
});

export default signup;
