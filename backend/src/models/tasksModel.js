const connection = require('./connection');

const getAllTasks = async () => {
  const [tasks] = await connection.execute('SELECT * FROM tasks');
  return tasks;
};

const createTask = async (task) => {
  const { title } = task;
  const dateUTC = new Date(Date.now()).toUTCString();
  const [createdTask] = await connection.execute(
    'INSERT INTO tasks (title, status, created_at) VALUES (?, ?, ?)',
    [title, 'pendente', dateUTC]
  );
  return { insertId: createdTask.insertId };
};

const deleteTask = async (taskId) => {
  const deletedTask = await connection.execute(
    'DELETE FROM tasks WHERE id = ?',
    [taskId]
  );
  return deletedTask;
};

const updateTask = async (taskId, taskData) => {
  const { title, status } = taskData;
  const updatedTask = await connection.execute(
    'UPDATE tasks SET title = ?, status = ? WHERE id = ?',
    [title, status, taskId]
  );
  return updatedTask;
};

module.exports = {
  getAllTasks,
  createTask,
  deleteTask,
  updateTask,
};
