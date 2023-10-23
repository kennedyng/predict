const { NeuralNetwork } = require("brain.js");
const trainData = require("./trainingDataset");
const fs = require("fs");
const network = new NeuralNetwork();
network.train(trainData, {
  iterations: 1000,
  log: (error) => console.log(error),
});

const networkState = network.toJSON();
fs.writeFileSync("network_state.json", JSON.stringify(networkState), "utf-8");
