const express = require("express");
var bodyParser = require("body-parser");
const { NeuralNetwork, recurrent, likely, utilities } = require("brain.js");
const cors = require("cors");
const fs = require("fs");
const app = express();
const data = require("./train.json");
const trainingDataset = require("./trainingDataset");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post("/predict", async (req, res) => {
  try {
    const neuralNetwork = new NeuralNetwork({
      hiddenLayers: [10, 10, 5],
      inputSize: 7,
      outputSize: 5,
    });
    neuralNetwork.train(trainingDataset, {
      iterations: 1000,
    });

    result = likely(req.body, neuralNetwork);

    res.status(201).json({ personality: result });
  } catch (error) {
    res.status(409);
  }
});

app.listen(process.env.PORT || 4040, () => {
  console.log("server is running on port 4040");
});
