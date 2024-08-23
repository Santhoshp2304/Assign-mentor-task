const express = require("express");
const mongoose = require("mongoose");
const mentorRoute = require("./routes/mentorRoutes");
const studentRoute = require("./routes/studentRoutes");
require("dotenv").config();

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log(`Connected to MONGODB`);
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on the PORT - ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Error in connecting MONGODB - ${PORT}`);
  });
