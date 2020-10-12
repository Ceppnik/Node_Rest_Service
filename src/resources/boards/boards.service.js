const boardsRepo = require('./boards.memory.repository.js');

const getAll = () => boardsRepo.getAll();

const get = id => boardsRepo.get(id);

const create = board => boardsRepo.create(board);

const update = (id, body) => boardsRepo.update(id, body);

const deleteBoard = id => boardsRepo.deleteBoard(id);

module.exports = { getAll, get, create, update, deleteBoard };
