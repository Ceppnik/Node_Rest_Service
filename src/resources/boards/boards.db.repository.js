const Board = require('./boards.model');

const getAll = async () => Board.find({});

const get = async id => Board.findById(id);

const create = async board => await Board.create(board);

const update = async (id, board) =>
  (await Board.updateOne({ _id: id }, board)).n;

const deleteBoard = async id => (await Board.deleteOne({ _id: id })).deletedCount;

module.exports = { getAll, get, create, update, deleteBoard };
