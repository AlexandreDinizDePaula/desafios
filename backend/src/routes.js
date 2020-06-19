const express = require('express');
const routes = express.Router();

const cepController = require('./controllers/cepController.js')
const trocoController = require('./controllers/trocoController.js')
const palindromoController = require('./controllers/palindromoController.js')

routes.post('/getceps', cepController.create);
routes.post('/gettroco', trocoController.create);
routes.post('/ispalindromo', palindromoController.create);

module.exports = routes; 