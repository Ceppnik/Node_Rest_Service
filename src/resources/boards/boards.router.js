const router = require('express').Router();
const boardService = require('./boards.service');
const boardsService = require('./boards.service');
const taskRouter = require('../tasks/tasks.router');

router.use(
  '/:id/tasks/',
  (req, res, next) => {
    req.boardId = req.params.id;
    next();
  },
  taskRouter
);

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards);
});

router.route('/:id').get(async (req, res) => {
  try {
    const board = await boardsService.get(req.params.id);
    res.json(board);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.route('/').post(async (req, res) => {
  const board = await boardService.create(req.body);
  res.json(board);
});

router.route('/:id').put(async (req, res) => {
  const board = await boardService.update(req.params.id, req.body);
  res.json(board);
});

router.route('/:id').delete(async (req, res) => {
  try {
    const isDeleted = await boardsService.deleteBoard(req.params.id);
    if (isDeleted) res.send('board deleted');
    else res.send('board not found!');
  } catch (e) {
    res.status(404).send(e.message);
  }
});

module.exports = router;
