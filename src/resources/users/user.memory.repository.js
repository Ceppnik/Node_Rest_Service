const DB = require('./user.memoryDb');

const getAll = async () => DB.getAllUser();

const get = async id => {
  const user = await DB.getUser(id);
  if (!user) {
    throw new Error(`The user with id: ${id} was not found`);
  }
  return user;
};

const create = async user => DB.createUser(user);

const update = async (id, body) => DB.updateUser(id, body);

const deleteUser = async id => {
  return await DB.deleteUser(id);
};

module.exports = { getAll, get, create, update, deleteUser };
