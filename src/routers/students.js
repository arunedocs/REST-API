const express = require("express");
const router = new express.Router();
const Student = require("../models/students");

router.get("/", async (req, res) => {
  const studentData = await Student.find(req.body);
  res.send(studentData);
});

router.get("/user/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const user = await Student.findById(_id);
    if (!req.params.id) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(401).send(e);
  }
});

router.patch("/user/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).send(updateStudent);
  } catch (e) {
    req.status(401).send(e);
  }
});

router.delete("/user/:id", async (req, res) => {
  try {
    const deleteStudent = await Student.findByIdAndDelete(req.params.id, {
      new: true,
    });
    res.send(deleteStudent);
  } catch (e) {
    res.send(e);
  }
});

router.post("/user", async (req, res) => {
  const data = new Student({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
  });
  try {
    const createuser = await data.save();
    res.status(201).send(createuser);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
