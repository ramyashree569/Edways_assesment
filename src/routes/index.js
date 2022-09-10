const express= require('express');
const controllers = require('../controllers')

let route = express.Router()

route.get('/products',controllers.getProducts);
route.post('/products/create',controllers.addProduct);

module.exports = route;

