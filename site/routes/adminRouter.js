var express = require('express');
var router = express.Router();
let adminController = require('../controllers/adminController')
let usersController = require('../controllers/usersController')

/*MIDDLEWARES*/
const upload = require('../middlewares/uploadImg');

const adminCheck = require ('../middlewares/adminCheck')

/* GET home page. */
router.get('/',adminCheck, adminController.adminIndex)
router.get('/filter',adminCheck, adminController.adminFilter)
router.get('/search',adminCheck, adminController.adminSearch)
router.get('/products',adminCheck, adminController.productList)
router.get('/products/create',adminCheck, adminController.productLoad)
router.post('/products/create',adminCheck,upload.any(), adminController.productNew)
router.get('/products/edit/:id',adminCheck, adminController.productEdit)
router.put('/products/edit/:id',adminCheck,upload.any(), adminController.productUpdate)
router.get('/products/:id',adminCheck, adminController.productDetailAdmin)
router.delete('/products/delete/:id',adminCheck, adminController.productDestroit)
router.get('/logout',usersController.logout)

module.exports = router;
