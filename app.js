const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

const mongoose = require("mongoose");
mongoose.connect("mongodb://mongodb:27017/mydb").then(
  () => {
    console.log("connect DB ok");
  },
  (err) => {
    console.log(`Connect error: ${err}`);
  }
);
app.get("/", (req, res) => {
  res.send("Hello");
});
app.listen(port, () => console.log(`Server run on port= ${port}`));

