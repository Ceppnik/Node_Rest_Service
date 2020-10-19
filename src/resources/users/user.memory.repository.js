const DB = require('./user.memoryDb');

const getAll = async () => DB.getAllUser();

const get = async id => await DB.getUser(id);

const create = async user => DB.createUser(user);

const update = async (id, body) => DB.updateUser(id, body);

const deleteUser = async id => {
  return await DB.deleteUser(id);
};

module.exports = { getAll, get, create, update, deleteUser };
