const genderMap = {
  male: 0,
  female: 1,
};

const personalityMap = {
  serious: { serious: 1 },
  lively: { lively: 1 },
  dependable: { dependable: 1 },
  responsible: { responsible: 1 },
  extraverted: { extraverted: 1 },
};

const trainDataSet = [
  {
    input: {
      gender: genderMap.male,
      age: 17,
      openness: 7,
      neuroticism: 4,
      conscientiousness: 7,
      agreeableness: 3,
      extraversion: 2,
    },
    output: personalityMap.extraverted,
  },

  {
    input: {
      gender: genderMap.male,
      age: 19,
      openness: 4,
      neuroticism: 5,
      conscientiousness: 4,
      agreeableness: 6,
      extraversion: 6,
    },
    output: personalityMap.serious,
  },

  {
    input: {
      gender: genderMap.female,
      age: 18,
      openness: 7,
      neuroticism: 6,
      conscientiousness: 4,
      agreeableness: 5,
      extraversion: 5,
    },
    output: personalityMap.dependable,
  },

  {
    input: {
      gender: genderMap.female,
      age: 22,
      openness: 5,
      neuroticism: 6,
      conscientiousness: 7,
      agreeableness: 4,
      extraversion: 3,
    },
    output: personalityMap.extraverted,
  },

  {
    input: {
      gender: genderMap.female,
      age: 22,
      openness: 5,
      neuroticism: 6,
      conscientiousness: 7,
      agreeableness: 4,
      extraversion: 3,
    },
    output: personalityMap.extraverted,
  },
  {
    input: {
      gender: genderMap.female,
      age: 19,
      openness: 7,
      neuroticism: 4,
      conscientiousness: 6,
      agreeableness: 5,
      extraversion: 4,
    },
    output: personalityMap.lively,
  },

  {
    input: {
      gender: genderMap.male,
      age: 18,
      openness: 5,
      neuroticism: 7,
      conscientiousness: 7,
      agreeableness: 6,
      extraversion: 4,
    },
    output: personalityMap.lively,
  },
];

module.exports = trainDataSet;
