const express = require('express');
const { loginController, registerController } = require('../controllers/userController');

const Router = express.Router();

Router.post('/login', loginController);
Router.post('/register', registerController);
// Router.get('fetchUsers', protect, fetchAllUsersController);


module.exports = Router;