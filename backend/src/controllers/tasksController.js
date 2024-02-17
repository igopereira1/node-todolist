const tasksModel = require('../models/tasksModel');

const getAllTasks = async (req, res) => {
  const tasks = await tasksModel.getAllTasks();
  return res.status(200).json(tasks);
};

module.exports = {
  getAllTasks,
};