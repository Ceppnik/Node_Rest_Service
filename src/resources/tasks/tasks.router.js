const router = require('express').Router({ mergeParams: true });
const tasksService = require('./tasks.service');

router
  .route('/')
  .get(async (req, res) => {
    res.json(await tasksService.getAll(req.params.boardId));
  })
  .post(async (req, res) => {
    const newTask = await tasksService.addTask(req.params.boardId, req.body);
    if (newTask) {
      res.json(newTask);
    } else {
      res.status(400).send('Bad request');
    }
  });

router
  .route('/:id')
  .get(async (req, res) => {
    const task = await tasksService.getTask(req.params.boardId, req.params.id);
    if (task) {
      res.json(task);
    } else {
      res.status(404).send('Task not found');
    }
  })
  .put(async (req, res) => {
    const task = await tasksService.updateTask(
      req.params.boardId,
      req.params.id,
      req.body
    );
    res.json(task);
  })
  .delete(async (req, res) => {
    if (await tasksService.deleteTask(req.params.boardId, req.params.id)) {
      res.status(204).end();
    } else {
      res.status(404).send('Task not found');
    }
  });

module.exports = router;
