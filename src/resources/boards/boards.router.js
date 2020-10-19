const router = require('express').Router();
const boardService = require('./boards.service');
const boardsService = require('./boards.service');

router.route('/').get(async (req, res, next) => {
  try {
    const boards = await boardsService.getAll();
    res.json(boards);
  } catch (err) {
    return next(err);
  }
});

router.route('/:id').get(async (req, res, next) => {
  try {
    const board = await boardsService.get(req.params.id);
    res.json(board);
  } catch (err) {
    return next(err);
  }
});

router.route('/').post(async (req, res, next) => {
  try {
    const board = await boardService.create(req.body);
    res.json(board);
  } catch (err) {
    return next(err);
  }
});

router.route('/:id').put(async (req, res, next) => {
  try {
    const board = await boardService.update(req.params.id, req.body);
    res.json(board);
  } catch (err) {
    return next(err);
  }
});

router.route('/:id').delete(async (req, res, next) => {
  try {
    const isDeleted = await boardsService.deleteBoard(req.params.id);
    if (isDeleted) res.send('board deleted');
    else res.status(404).send('board not found!');
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
