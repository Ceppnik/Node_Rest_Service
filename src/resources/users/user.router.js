const router = require('express').Router();
const User = require('./user.model');
const userService = require('./user.service');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  try {
    const user = await usersService.get(req.params.id);
    res.json(User.toResponse(user));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.route('/').post(async (req, res) => {
  const user = await userService.create(req.body);
  res.json(User.toResponse(user));
});

router.route('/:id').put(async (req, res) => {
  const user = await userService.update(req.params.id, req.body);
  res.json(User.toResponse(user));
});

router.route('/:id').delete(async (req, res) => {
  try {
    const isDeleted = await usersService.deleteUser(req.params.id);
    if (isDeleted) res.send('user deleted');
    else res.send('user not found!');
  } catch (e) {
    res.status(404).send(e.message);
  }
});

module.exports = router;
