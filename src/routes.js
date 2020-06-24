const express = require('express');
const userController = require('./controller/userController');

const routes = express.Router();

routes.post('/', userController.create);
routes.get('/', userController.read);
routes.put('/', userController.update);
routes.delete('/', userController.delete);

module.exports = routes;