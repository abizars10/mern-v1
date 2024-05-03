const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/Users");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1/crud")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.get("/api/users", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
    console.log("Getting data request!");
  } catch (err) {
    console.error("Error getting data", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(3001, () => {
  console.log("Server is running on PORT: 3001");
});
