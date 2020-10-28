const usersRepo = require('./user.db.repository');
const tasksRepo = require('../tasks/tasks.db.reposytory');

const getAll = () => usersRepo.getAll();

const get = id => usersRepo.get(id);

const create = user => usersRepo.create(user);

const update = (id, body) => usersRepo.update(id, body);

const deleteUser = async id => {
  const result = await usersRepo.deleteUser(id);
  if (result) await tasksRepo.unassignTasks(id);
  return result;
};

module.exports = { getAll, get, create, update, deleteUser };
