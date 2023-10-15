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
  try {
    neuralNetwork.train(trainData);
    const result = likely(req.body, neuralNetwork);
    res.status(201).json({ personality: result });
  } catch (error) {
    res.status(409);
  }
});

app.listen(process.env.PORT || 4040, () => {
  console.log("server is running on port 4040");
});
