const router = require('express').Router();
const boardService = require('./boards.service');
const Board = require('./boards.model');

router.route('/').get(async (req, res, next) => {
  try {
    const boards = await boardService.getAll();
    res.json(boards.map(board => Board.toResponse(board)));
  } catch (err) {
    return next(err);
  }
});

router.route('/:id').get(async (req, res, next) => {
  try {
    const board = await boardService.get(req.params.id);
    if (board) {
      res.json(Board.toResponse(board));
    } else {
      res.status(404).send('board not found');
    }
  } catch (err) {
    return next(err);
  }
});

router.route('/').post(async (req, res, next) => {
  try {
    const board = await boardService.create(req.body);
    if (board) res.status(200).json(Board.toResponse(board));
  } catch (err) {
    return next(err);
  }
});

router.route('/:id').put(async (req, res, next) => {
  try {
    const board = await boardService.update(req.params.id, req.body);
    if (board) res.status(200).json(Board.toResponse(board));
    else {
      res.status(404).send('not found');
    }
    res.status(200);
  } catch (err) {
    return next(err);
  }
});

router.route('/:id').delete(async (req, res, next) => {
  try {
    if (await boardService.deleteBoard(req.params.id)) {
      res.status(204).send('board deleted');
    } else res.status(404).send('not found');
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
