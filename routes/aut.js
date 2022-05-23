const express = require('express');
const authController = require('../control/aut');

const route = express.Router();

route.post('/register', authController.register);
// route.post('/login', authController.login);

module.exports = route;