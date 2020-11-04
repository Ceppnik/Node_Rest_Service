const mongoose = require('mongoose');
const User = require('../resources/users/user.model');
const Board = require('../resources/boards/boards.model');
const { MONGO_CONNECTION_STRING } = require('../common/config');
const bcrypt = require('bcrypt');

const connectToDB = cb => {
  mongoose.connect(MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log("we're connected!");
    db.dropDatabase();
    User.insertMany([
      { name: 'user1', login: 'admin', password: bcrypt.hashSync('admin', 10) }
    ]);

    Board.create({
      _id: 'b61e0d3b-4383-4efa-9e2a-62ba7ccde6d2',
      title: 'titile_string',
      columns: [{ id: 'string', title: 'string', order: 0 }]
    });

    cb();
  });
};
module.exports = {
  connectToDB
};
