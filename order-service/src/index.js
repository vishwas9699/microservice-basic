const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const app = express();
const port = 3002;

app.use(bodyParser.json());

const userServiceUrl = "http://user-service:3001/users"; // Docker Compose service name

// Create order
app.post("/orders", async (req, res) => {
  const { userId, orderDetails } = req.body;

  try {
    // Fetch user details from UserService
    const userResponse = await axios.get(`${userServiceUrl}?id=${userId}`);
    const user = userResponse.data;

    if (!user) {
      return res.status(404).send("User not found");
    }

    // Save order (this is just a mock)
    const order = { userId, orderDetails, status: "created" };
    res.status(201).send(order);
  } catch (error) {
    res.status(500).send("Error processing order");
  }
});

app.listen(port, () => {
  console.log(`OrderService is running on http://localhost:${port}`);
});
