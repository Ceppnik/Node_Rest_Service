const router = require('express').Router();
const loginService = require('./login.service');

router.route('/').post(async (req, res, next) => {
  try {
    const { login, password } = req.body;
    if (!login || !password) {
      throw new Error(404, 'not found');
    } else {
      const token = await loginService.authenticateUser(login, password);
      if (token) {
        res.status(200).send({ token });
      } else {
        throw new customError(403, 'Forbidden');
      }
    }
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
