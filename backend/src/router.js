const express = require('express');
const tasksController = require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksMiddleware');

const router = express.Router();

router.get('/tasks', tasksController.getAllTasks);
router.post(
  '/tasks',
  tasksMiddleware.validateTitle,
  tasksController.createTask
);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put(
  '/tasks/:id',
  tasksMiddleware.validateTitle,
  tasksMiddleware.validateStatus,
  tasksController.updateTask
);

module.exports = router;
