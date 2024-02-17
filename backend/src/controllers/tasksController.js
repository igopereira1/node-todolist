const tasksModel = require('../models/tasksModel');

const getAllTasks = async (req, res) => {
  const tasks = await tasksModel.getAllTasks();
  return res.status(200).json(tasks);
};

const createTask = async (req, res) => {
  const createdTask = await tasksModel.createTask(req.body);
  return res.status(201).json(createdTask);
}

module.exports = {
  getAllTasks,
  createTask
};