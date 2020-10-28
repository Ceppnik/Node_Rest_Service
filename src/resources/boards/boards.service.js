const boardsRepo = require('./boards.db.repository.js');
const tasksRepo = require('../tasks/tasks.db.reposytory');

const getAll = () => boardsRepo.getAll();

const get = id => boardsRepo.get(id);

const create = board => boardsRepo.create(board);

const update = (id, board) => boardsRepo.update(id, board);

const deleteBoard = id => {
  const result = boardsRepo.deleteBoard(id);
  if (result) tasksRepo.deleteTasks(id);
  return result;
};

module.exports = { getAll, get, create, update, deleteBoard };
