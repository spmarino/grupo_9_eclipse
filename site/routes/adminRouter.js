var express = require('express');
var router = express.Router();
let adminController = require('../controllers/adminController')
const userCheck = require('../middlewares/userCheck')
const adminNotCheck = require('../middlewares/adminNotCheck')
const productValidator= require('../validations/productValidator')


/*MIDDLEWARES*/
const upload = require('../middlewares/uploadImg');


/* GET home page. */
router.get('/',userCheck,adminNotCheck, adminController.adminIndex)
router.get('/filter',userCheck,adminNotCheck, adminController.adminFilter)
router.get('/search',userCheck,adminNotCheck, adminController.adminSearch)
router.get('/products',userCheck,adminNotCheck, adminController.productList)
router.get('/list',userCheck,adminNotCheck, adminController.messageList)
router.get('/products/create',userCheck,adminNotCheck, adminController.productLoad)
router.post('/products/create',userCheck,adminNotCheck, productValidator, upload.any(), adminController.productNew) //Lo que viaja por post es algo que se va a crear, puede ser un usuario, un producto
router.get('/products/edit/:id',userCheck,adminNotCheck,  adminController.productEdit)
router.put('/products/edit/:id',userCheck,adminNotCheck, upload.any(), adminController.productUpdate)
router.get('/products/:id',userCheck,adminNotCheck,  adminController.productDetailAdmin)
router.delete('/products/delete/:id',userCheck,adminNotCheck, adminController.productDestroit)


module.exports = router;
