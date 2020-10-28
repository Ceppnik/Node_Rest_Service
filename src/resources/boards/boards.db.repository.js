const Board = require('./boards.model');

const getAll = async () => Board.find({});

const get = async id => Board.findById(id);

const create = async board => await Board.create(board);

const update = async (id, board) => {
  const boardToDB = {
    ...board,
    columns: board.columns.map(col => ({ ...col, _id: col.id }))
  };
  return (await Board.updateOne({ _id: id }, boardToDB)).ok ? board : null;
};

const deleteBoard = async id => (await Board.deleteOne({ _id: id })).ok;

module.exports = { getAll, get, create, update, deleteBoard };
