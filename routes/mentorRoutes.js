const express = require("express");
const Mentor = require("../models/Mentor");
const Student = require("../models/Student");
const router = express.Router();

// create a mentor endpoint

router.post("/create", async (req, res) => {
  try {
    const mentor = new Mentor(req.body);
    await mentor.save();
    res.status(200).send(mentor);
  } catch (error) {
    res.status(403).send("Error in creating mentor");
  }
});


module.exports =router;