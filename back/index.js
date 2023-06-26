import express from "express";
import login from "./src/route/login.js";
import signup from "./src/route/signup.js";
import destination from "./src/route/getDestination.js";
const app = express();
const port = 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/", login);
app.use("/", signup);
app.use("/", destination);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
