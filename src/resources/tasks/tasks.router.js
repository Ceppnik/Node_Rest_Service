const router = require('express').Router({ mergeParams: true });
const tasksService = require('./tasks.service');
const Task = require('./tasks.model');

router
  .route('/')
  .get(async (req, res, next) => {
    try {
      res.json(await tasksService.getAll(req.params.boardId));
    } catch (err) {
      return next(err);
    }
  })
  .post(async (req, res, next) => {
    try {
      const newTask = await tasksService.addTask(req.params.boardId, req.body);
      if (newTask) {
        res.status(200).json(Task.toResponse(newTask));
      } else {
        res.status(400).send('Bad request');
      }
    } catch (err) {
      return next(err);
    }
  });

router
  .route('/:id')
  .get(async (req, res, next) => {
    try {
      const task = await tasksService.getTask(
        req.params.boardId,
        req.params.id
      );
      if (task) {
        res.status(200).json(Task.toResponse(task));
      } else {
        res.status(404).send('not found');
      }
    } catch (err) {
      return next(err);
    }
  })
  .put(async (req, res, next) => {
    try {
      const task = await tasksService.updateTask(
        req.params.boardId,
        req.params.id,
        req.body
      );
      if (task) {
        res.status(200).json(Task.toResponse(task));
      } else {
        res.status(404).send('not found');
      }
    } catch (err) {
      return next(err);
    }
  })
  .delete(async (req, res, next) => {
    try {
      if (await tasksService.deleteTask(req.params.boardId, req.params.id)) {
        res.status(200).send('deleted');
      } else {
        res.status(404).send('not found');
      }
    } catch (err) {
      return next(err);
    }
  });

module.exports = router;
