const Task = require('./tasks.model');
const Tasks = require('./tasks.model');

const getAll = async boardId => Task.find({ boardId });

const addTask = async (boardId, task) => {
  task.boardId = boardId;
  return await Task.create(task);
};

const getTask = async (boardId, taskId) =>
  await Task.findOne({ _id: taskId, boardId });

const updateTask = async (boardId, taskId, task) =>
  (await Task.updateOne({ _id: taskId, boardId }, task)).ok ? task : null;

const deleteTask = async (boardId, taskId) =>
  (await Task.deleteOne({ _id: taskId, boardId })).n;

const unassignTasks = async userId =>
  await Task.updateMany({ userId }, { userId: null });

const deleteTasks = async boardId => {
  await Task.deleteMany({ boardId });
};

module.exports = {
  addTask,
  getAll,
  getTask,
  updateTask,
  deleteTask,
  unassignTasks,
  deleteTasks
};
