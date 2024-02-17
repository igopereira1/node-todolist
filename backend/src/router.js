const express = require('express');
const tasksController = require('./controllers/tasksController')

const router = express.Router();

router.get('/tasks', getAllTasks)

module.exports = router;