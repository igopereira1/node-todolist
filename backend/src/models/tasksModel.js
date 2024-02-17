const connection = require('./connection');

const getAllTasks = async () => {
  const tasks = await connection.execute('SELECT * FROM tasks');
  return tasks;
};

module.exports = {
  getAllTasks,
};
