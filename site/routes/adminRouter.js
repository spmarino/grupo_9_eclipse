var express = require('express');
var router = express.Router();
let adminController = require('../controllers/adminController')
const userCheck = require('../middlewares/userCheck')


/*MIDDLEWARES*/
const upload = require('../middlewares/uploadImg');


/* GET home page. */
router.get('/',userCheck, adminController.adminIndex)
router.get('/filter',userCheck, adminController.adminFilter)
router.get('/search',userCheck, adminController.adminSearch)
router.get('/products',userCheck, adminController.productList)
router.get('/products/create',userCheck, adminController.productLoad)
router.post('/products/create',userCheck, upload.any(), adminController.productNew)
router.get('/products/edit/:id',userCheck,  adminController.productEdit)
router.put('/products/edit/:id',userCheck, upload.any(), adminController.productUpdate)
router.get('/products/:id',userCheck,  adminController.productDetailAdmin)
router.delete('/products/delete/:id',userCheck, adminController.productDestroit)


module.exports = router;
