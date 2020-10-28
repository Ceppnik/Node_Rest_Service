const router = require('express').Router();
const User = require('./user.model');
const userService = require('./user.service');

router.route('/').get(async (req, res, next) => {
  try {
    const users = await userService.getAll();
    res.json(users.map(User.toResponse));
  } catch (err) {
    return next(err);
  }
});

router.route('/:id').get(async (req, res, next) => {
  try {
    const user = await userService.get(req.params.id);
    if (user) {
      res.json(User.toResponse(user));
    } else {
      throw new customError(404, 'User not found');
    }
  } catch (err) {
    return next(err);
  }
});

router.route('/').post(async (req, res, next) => {
  try {
    const user = await userService.create(req.body);
    if (user) {
      console.log(user);
      res.json(User.toResponse(user));
    } else {
      res.status(404).send('user not found');
    }
  } catch (err) {
    return next(err);
  }
});

router.route('/:id').put(async (req, res, next) => {
  try {
    const user = await userService.update(req.params.id, req.body);
    res.json(User.toResponse(user));
  } catch (err) {
    return next(err);
  }
});

router.route('/:id').delete(async (req, res, next) => {
  try {
    const isDeleted = await userService.deleteUser(req.params.id);
    if (isDeleted) res.status(200).send('user deleted');
    else res.status(404).send('user not found!');
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
