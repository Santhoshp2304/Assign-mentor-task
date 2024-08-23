const express = require("express");
const Mentor = require("../models/Mentor");
const Student = require("../models/Student");
const router = express.Router();

// create a mentor endpoint

router.post("/create", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(200).send(student);
  } catch (error) {
    res.status(403).send("Error in creating student");
  }
});


module.exports =router;