const { NeuralNetwork, likely, recurrent } = require("brain.js");
const fs = require("fs");

const data = require("./train.json");

const genderMap = {
  Female: 1,
  Male: 0,
};

const personalityMap = {
  serious: { serious: 1 },
  lively: { lively: 1 },
  dependable: { dependable: 1 },
  responsible: { responsible: 1 },
  extraverted: { extraverted: 1 },
};

const trainingDataSet = data.map((record) => {
  return {
    input: {
      gender: genderMap[record.Gender],
      openness: record.openness,
      age: record.Age,
      neuroticism: record.neuroticism,
      conscientiousness: record.conscientiousness,
      agreeableness: record.agreeableness,
      extraversion: record.extraversion,
    },
    output: personalityMap[record["Personality (Class label)"]],
  };
});

console.log(trainingDataSet);
const neuralNetwork = new NeuralNetwork({
  hiddenLayers: [20, 10, 10],
});

neuralNetwork.train(trainingDataSet, {
  log: (error) => console.log(error),
  iterations: 50000,
});

const seriousR = neuralNetwork.run({
  gender: genderMap.Female,
  age: 20,
  openness: 7,
  neuroticism: 6,
  conscientiousness: 6,
  agreeableness: 4,
  extraversion: 4,
});

console.log("serious", seriousR);

const livelyR = neuralNetwork.run({
  gender: genderMap.Female,
  age: 19,
  openness: 6,
  neuroticism: 4,
  conscientiousness: 5,
  agreeableness: 6,
  extraversion: 4,
});

console.log("lively", livelyR);

const networkState = neuralNetwork.toJSON();
fs.writeFileSync(
  "network_new_state.json",
  JSON.stringify(networkState),
  "utf-8"
);
