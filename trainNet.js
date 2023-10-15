const { NeuralNetwork, likely } = require("brain.js");

const trainData = require("./trainDataSet");
const neuralNetwork = new NeuralNetwork();

neuralNetwork.train(trainData);
const personality = likely(req.body, neuralNetwork);
