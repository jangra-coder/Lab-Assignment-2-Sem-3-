const express = require("express");
const router = express.Router();
const students = require("../data/students");

// GET /students  -> get all students
router.get("/", (req, res) => {
  res.status(200).json(students);
});

// GET /students/:id  -> get one student by id
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.status(200).json(student);
});

// POST /students  -> add a new student
router.post("/", (req, res) => {
  const { name, age, course } = req.body;

  if (!name || !age || !course) {
    return res.status(400).json({ message: "Please provide name, age and course" });
  }

  const newStudent = {
    id: students.length > 0 ? students[students.length - 1].id + 1 : 1,
    name,
    age,
    course
  };

  students.push(newStudent);
  res.status(201).json({ message: "Student added successfully", student: newStudent });
});

// PUT /students/:id  -> update a student
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  const { name, age, course } = req.body;

  if (!name && !age && !course) {
    return res.status(400).json({ message: "Please provide data to update" });
  }

  if (name) student.name = name;
  if (age) student.age = age;
  if (course) student.course = course;

  res.status(200).json({ message: "Student updated successfully", student });
});

// DELETE /students/:id  -> delete a student
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  const deletedStudent = students.splice(index, 1)[0];
  res.status(200).json({ message: "Student deleted successfully", student: deletedStudent });
});

module.exports = router;
