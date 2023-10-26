const express = require("express");
var bodyParser = require("body-parser");
const { NeuralNetwork, recurrent, likely, utilities } = require("brain.js");
const cors = require("cors");
const trainingDataSet = require("./trainingDataset");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post("/predict", async (req, res) => {
  try {
    //neural network configuration
    const config = {
      inputSize: 7,
      outputSize: 4,
      hiddenLayers: [4],
    };

    const network = new NeuralNetwork(config);
    network.train(trainingDataSet, {
      log: (error) => console.log(error),
      iterations: 500,
    });

    console.log(req.body);
    const result = likely(req.body, network);

    const prediction = network.run(req.body);

    return res.status(201).json({ personality: result, prediction });
  } catch (error) {
    res.status(409);
  }
});

app.listen(process.env.PORT || 4040, () => {
  console.log("server is running on port === 4040");
});
