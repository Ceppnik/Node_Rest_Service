const DB = require('./boards.memoryDb');

const getAll = async () => DB.getAllBoard();

const get = async id => {
  const board = await DB.getBoard(id);
  if (!board) {
    throw new Error(`The board with id: ${id} was not found`);
  }
  return board;
};

const create = async board => DB.createBoard(board);

const update = async (id, body) => DB.updateBoard(id, body);

const deleteBoard = async id => {
  return await DB.deleteBoard(id);
};

module.exports = { getAll, get, create, update, deleteBoard };
