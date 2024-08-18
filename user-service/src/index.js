const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3001;

app.use(bodyParser.json());

let users = []; // Simple in-memory store

// Create user
app.post("/users", (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).send(user);
});

// Get all users
app.get("/users", (req, res) => {
  res.status(200).send(users);
});

app.listen(port, () => {
  console.log(`UserService is running on http://localhost:${port}`);
});
