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

module.exports = trainingDataSet;
