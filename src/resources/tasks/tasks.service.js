const tasksRepo = require('./tasks.db.reposytory');

const getAll = boardId => tasksRepo.getAll(boardId);

const addTask = (boardId, task) => tasksRepo.addTask(boardId, task);

const getTask = (boardId, taskId) => tasksRepo.getTask(boardId, taskId);

const updateTask = (boardId, taskId, task) =>
  tasksRepo.updateTask(boardId, taskId, task);

const deleteTask = (boardId, taskId) => tasksRepo.deleteTask(boardId, taskId);

module.exports = { addTask, getAll, getTask, updateTask, deleteTask };
