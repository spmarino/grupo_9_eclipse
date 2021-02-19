var express = require('express');
var router = express.Router();
let adminController = require('../controllers/adminController')

/* GET home page. */
router.get('/', adminController.adminIndex)
router.get('/products', adminController.productList)
router.get('/products/create', adminController.productLoad)
router.get('/products/:id/edit', adminController.productEdit)
router.get('/products/:id', adminController.productDetailAdmin)

module.exports = router;
