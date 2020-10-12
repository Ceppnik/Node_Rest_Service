const DB = require('./tasks.memoryDb');

const getAll = async boardId => DB.getAll;

const addTask = async task => DB.addTask;

const getTask = async (boardId, taskId) => DB.getTask;

const updateTask = async (boardId, taskId, task) => DB.updateTask;

const deleteTask = async (boardId, taskId) => DB.deleteTask;

const unassignTasks = async userId => DB.unassignTasks;

const deleteTasks = async (boardId, taskId) => DB.deleteTasks;

module.exports = {
  addTask,
  getAll,
  getTask,
  updateTask,
  deleteTask,
  unassignTasks,
  deleteTasks
};
