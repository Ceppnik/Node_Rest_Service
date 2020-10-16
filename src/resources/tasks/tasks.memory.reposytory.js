const DB = require('./tasks.memoryDb');

const getAll = async boardId => DB.getAll(boardId);

const addTask = async (boardId, task) => DB.addTask(boardId, task);

const getTask = async (boardId, taskId) => DB.getTask(boardId, taskId);

const updateTask = async (boardId, taskId, task) =>
  DB.updateTask(boardId, taskId, task);

const deleteTask = async (boardId, taskId) => DB.deleteTask(boardId, taskId);

const unassignTasks = async userId => DB.unassignTasks(userId);

const deleteTasks = async (boardId, taskId) => DB.deleteTasks(boardId, taskId);

module.exports = {
  addTask,
  getAll,
  getTask,
  updateTask,
  deleteTask,
  unassignTasks,
  deleteTasks
};
