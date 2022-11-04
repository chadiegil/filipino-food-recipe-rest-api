const express = require("express");
const app = express();
const importData = require("./data.json");

let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello node!");
});

app.get("/recipe", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.send(importData);
});

app.listen(port, () => {
  console.log(`Recipe app is listening on port http://localhost:${port}`);
});
