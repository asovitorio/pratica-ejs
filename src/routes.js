const express = require('express');
const indexcontroller = require('./controllers/indexController');
const flexBoxController = require('./controllers/flexBoxController');
const projetosController = require('./controllers/projetosController');
const router =  express.Router();

router.get('/', indexcontroller.inicio);
router.get('/quemSou', flexBoxController.flexBox);
router.get('/projetos', projetosController.projetos);


module.exports = router