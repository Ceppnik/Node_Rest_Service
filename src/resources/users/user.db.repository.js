const User = require('./user.model');

const getAll = async () => {
  return User.find({});
};

const get = async id => {
  return User.findById(id);
};

const create = async user => {
  return User.create(user);
};

const update = async (id, body) => {
  return User.updateOne({ _id: id }, body);
};

const deleteUser = async id => (await User.deleteOne({ _id: id })).deletedCount;

module.exports = { getAll, get, create, update, deleteUser };
