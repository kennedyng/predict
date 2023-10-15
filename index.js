const express = require("express");
var bodyParser = require("body-parser");
const { NeuralNetwork, likely } = require("brain.js");
const cors = require("cors");
const trainData = require("./trainDataSet");
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

const neuralNetwork = new NeuralNetwork();

app.post("/predict", async (req, res) => {
  console.log(req.body);
  neuralNetwork.train(trainData);
  const personality = likely(req.body, neuralNetwork);
  res.status(201).json(personality);
});

app.listen(4040, () => {
  console.log("server is running on port 4040");
});
