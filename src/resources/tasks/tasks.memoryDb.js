const Task = require('./tasks.model');

const tasks = [
  new Task({
    title: 'task',
    order: 10,
    description: 'description task'
  })
];

const getAll = async boardId => tasks.filter(task => task.boardId === boardId);

const addTask = async task => {
  const newTask = new Task(task);
  tasks.push(newTask);
  return newTask;
};

const getTask = async (boardId, taskId) => {
  const allTasks = await getAll(boardId);
  const task = allTasks.find(el => el.id === taskId);
  return task;
};

const updateTask = async (boardId, taskId, task) => {
  const currentTask = await getTask(boardId, taskId);
  const taskIndex = tasks.findIndex(el => el.id === taskId);
  const updatedTask = { ...currentTask, ...task };
  tasks.splice(taskIndex, 1, updatedTask);
  return updatedTask;
};

const deleteTask = async (boardId, taskId) => {
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  if (taskIndex === -1) return false;
  tasks.splice(taskIndex, 1);
  return true;
};

const unassignTasks = async userId => {
  tasks.forEach(task => {
    if (task.userId === userId) task.userId = null;
  });
};

const deleteTasks = async boardId => {
  const tasksToDelete = tasks.filter(task => task.boardId === boardId);
  tasksToDelete.forEach(task => {
    const index = tasks.findIndex(el => el.id === task.id);
    tasks.splice(index, 1);
  });
};

module.exports = {
  getAll,
  addTask,
  getTask,
  updateTask,
  deleteTask,
  unassignTasks,
  deleteTasks
};
