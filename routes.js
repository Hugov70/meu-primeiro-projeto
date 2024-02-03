const express = require('express'); 
const route = express.Router();  
const homeController = require('./src/controllers/homeController'); 
const playersControllers = require('./src/controllers/playersController'); 

route.get( '/', homeController.paginaInicial);
route.get( '/70hy', playersControllers.player70hy);
route.get( '/niculinha', playersControllers.playerNiculinha);
route.get( '/nwme', playersControllers.playerNwme);

module.exports = route; 