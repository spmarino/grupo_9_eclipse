var express = require('express');
var router = express.Router();
const pagesController = require('../controllers/pagesController');
const contactValidator= require('../validations/contactValidator')


/* GET home page. */
router.get('/medios-de-pago', pagesController.medios)
router.get('/costos-de-envio', pagesController.costos)
router.get('/tiempos-de-envio', pagesController.tiempos)
router.get('/preguntas-frecuentes', pagesController.preguntas)
router.get('/contacto', pagesController.contacto)
router.post('/contacto',contactValidator, pagesController.message)



module.exports = router;
