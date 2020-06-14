const express= require('express');
const router = express.Router();
const UserController = require('../../controllers/user/user.controller');

const userController = new UserController();

router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.post('/register', userController.register);

module.exports = router;