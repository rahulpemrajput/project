const express = require("express");
const Employee = require("../models/Employee");
const router = express.Router();

// Get all employees
router.get("/", async (req, res) => {
  const employees = await Employee.findAll();
  res.json(employees);
});

// Add an employee
router.post("/", async (req, res) => {
  const employee = await Employee.create(req.body);
  res.json(employee);
});

// Update an employee by ID
router.put("/:id", async (req, res) => {
  const employee = await Employee.update(req.body, { where: { id: req.params.id } });
  res.json({ message: "Employee updated", employee });
});

// Delete an employee by ID
router.delete("/:id", async (req, res) => {
  await Employee.destroy({ where: { id: req.params.id } });
  res.json({ message: "Employee deleted" });
});

module.exports = router;
