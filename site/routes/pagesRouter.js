var express = require('express');
var router = express.Router();
const pagesController = require('../controllers/pagesController')

/* GET home page. */
router.get('/medios-de-pago', pagesController.medios)

module.exports = router;
