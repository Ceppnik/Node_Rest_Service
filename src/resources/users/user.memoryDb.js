const User = require('./user.model');
const { unassignTasks } = require('../tasks/tasks.memoryDb');

const dbUsers = [];

dbUsers.push(new User(), new User(), new User());

const getAllUser = async () => dbUsers.slice(0);

const getUser = async id => dbUsers.filter(user => user.id === id)[0];

const createUser = async user => {
  const newUser = new User({
    login: user.login,
    password: user.password,
    name: user.name
  });
  dbUsers.push(newUser);
  return newUser;
};

const updateUser = async (id, body) => {
  const user = dbUsers.find(user => user.id === id);
  user.name = body.name;
  user.login = body.login;
  user.password = body.password;

  return dbUsers.filter(el => el.id === id)[0];
};
const deleteUser = async id => {
  const userIndex = dbUsers.findIndex(user => user.id === id);
  if (userIndex === -1) return;
  await unassignTasks(id);
  dbUsers.splice(userIndex, 1);
  return true;
};

module.exports = { getAllUser, getUser, createUser, updateUser, deleteUser };
