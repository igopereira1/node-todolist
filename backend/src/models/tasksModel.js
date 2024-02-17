const connection = require('./connection');

const getAllTasks = async () => {
  const [tasks] = await connection.execute('SELECT * FROM tasks');
  return tasks;
};

const createTask = async (task) => {
  const { title } = task;
  const [createdTask] = await connection.execute('INSERT INTO tasks (title) VALUES (?)', [title]);
  return { insertedId: createdTask.insertId };
};

module.exports = {
  getAllTasks,
  createTask
};
