const fs = require("fs");

const data = require("./train.json");

const genderMap = {
  Female: 1,
  Male: 0,
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
    output: record["Personality (Class label)"],
  };
});

module.exports = trainingDataSet;
