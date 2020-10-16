const tasksRepo = require('./tasks.memory.reposytory');

const getAll = boardId => tasksRepo.getAll(boardId);

const addTask = (boardId, task) => tasksRepo.addTask(boardId, task);

const getTask = async (boardId, taskId) => {
  const task = await tasksRepo.getTask(boardId, taskId);
  return task;
};

const updateTask = async (boardId, taskId, task) => {
  const updatedTask = await tasksRepo.updateTask(boardId, taskId, task);
  return updatedTask;
};

const deleteTask = async (boardId, taskId) => {
  return await tasksRepo.deleteTask(boardId, taskId);
};

module.exports = { addTask, getAll, getTask, updateTask, deleteTask };
