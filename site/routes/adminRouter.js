var express = require('express');
var router = express.Router();
let adminController = require('../controllers/adminController')

/* GET home page. */
router.get('/', adminController.adminIndex)
router.get('/filter', adminController.adminFilter)
router.get('/search', adminController.adminSearch)
router.get('/products', adminController.productList)
router.get('/products/create', adminController.productLoad)
router.post('/products/create', adminController.productNew)
router.get('/products/edit/:id', adminController.productEdit)
router.put('/products/edit/:id', adminController.productUpdate)
router.get('/products/:id', adminController.productDetailAdmin)
router.delete('/products/delete/:id', adminController.productDestroit)

module.exports = router;
