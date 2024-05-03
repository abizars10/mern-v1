const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.get("/", (res, req) => {
  res.send("Hello World");
});

app.listen(3001, () => {
  console.log("Server is running on PORT: 3001");
});
