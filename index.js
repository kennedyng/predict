const express = require("express");
var bodyParser = require("body-parser");
const { NeuralNetwork, recurrent, likely, utilities } = require("brain.js");
const cors = require("cors");
const fs = require("fs");
const app = express();

const personalityClassfier = require("./neuro");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post("/predict", async (req, res) => {
  try {
    const result = personalityClassfier.classify(req.body);
    return res.status(201).json({ personality: result });
  } catch (error) {
    res.status(409);
  }
});

app.listen(process.env.PORT || 4040, () => {
  console.log("server is running on port === 4040");
});
