const limdu = require("limdu");

const trainData = require("./trainingDataset");

const personalityClassfier = new limdu.classifiers.Bayesian();
personalityClassfier.trainBatch(trainData);

module.exports = personalityClassfier;
