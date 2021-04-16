var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')


/* GET home page. */
router.get('/', indexController.home)
router.get('/search', indexController.indexSearch)
router.get('/creadores', indexController.creadores)

module.exports = router;
