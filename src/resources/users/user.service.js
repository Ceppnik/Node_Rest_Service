const usersRepo = require('./user.db.repository');
const tasksRepo = require('../tasks/tasks.db.reposytory');
const bcrypt = require('bcrypt');

const getUserByLogin = login => usersRepo.getUserByLogin(login);

const getAll = () => usersRepo.getAll();

const get = id => usersRepo.get(id);

const create = async user => {
  if (!user.name || !user.login || !user.password) return;
  return usersRepo.create(user);
  const passwordHash = await bcrypt.hash(user.password, 10);
  return usersRepo.create({ ...user, password: passwordHash });
};

const update = (id, body) => usersRepo.update(id, body);

const deleteUser = async id => {
  const result = await usersRepo.deleteUser(id);
  if (result) await tasksRepo.unassignTasks(id);
  return result;
};

module.exports = { getUserByLogin, getAll, get, create, update, deleteUser };
