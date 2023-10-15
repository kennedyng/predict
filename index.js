const express = require("express");
var bodyParser = require("body-parser");
const { NeuralNetwork, likely } = require("brain.js");
const cors = require("cors");
const fs = require("fs");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post("/predict", async (req, res) => {
  try {
    const neuralNetwork = new NeuralNetwork();

    const networkState = JSON.parse(
      fs.readFileSync("network_state.json", "utf-8")
    );
    neuralNetwork.fromJSON(networkState);
    const result = likely(req.body, neuralNetwork);

    res.status(201).json({ personality: result });
  } catch (error) {
    res.status(409);
  }
});

app.listen(process.env.PORT || 4040, () => {
  console.log("server is running on port 4040");
});
