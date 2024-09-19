const express = require("express");
const studentController = require("../controller/studentController");
const router = express.Router();

router.post("/add/user", (req, res) => {
  console.log("here...");
  studentController.addStudent(req, res);
});
router.get("/users", (req, res) => {
  studentController.getStudent(req, res);
});

module.exports = router;
