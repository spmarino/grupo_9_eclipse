var express = require('express');
var router = express.Router();
let adminController = require('../controllers/adminController')
const userCheck = require('../middlewares/userCheck')
const adminNotCheck = require('../middlewares/adminNotCheck')


/*MIDDLEWARES*/
const upload = require('../middlewares/uploadImg');


/* GET home page. */
router.get('/',userCheck,adminNotCheck, adminController.adminIndex)
router.get('/filter',userCheck,adminNotCheck, adminController.adminFilter)
router.get('/search',userCheck,adminNotCheck, adminController.adminSearch)
router.get('/products',userCheck,adminNotCheck, adminController.productList)
router.get('/products/create',userCheck,adminNotCheck, adminController.productLoad)
router.post('/products/create',userCheck,adminNotCheck, upload.any(), adminController.productNew)
router.get('/products/edit/:id',userCheck,adminNotCheck,  adminController.productEdit)
router.put('/products/edit/:id',userCheck,adminNotCheck, upload.any(), adminController.productUpdate)
router.get('/products/:id',userCheck,adminNotCheck,  adminController.productDetailAdmin)
router.delete('/products/delete/:id',userCheck,adminNotCheck, adminController.productDestroit)



/* Control Mensajes de usuario*/
router.get('/list',userCheck,adminNotCheck, adminController.messageList)
router.put('/message/:id',userCheck,adminNotCheck,  adminController.messageUpdate)
router.get('/messageDetail/:id',userCheck,adminNotCheck,  adminController.messageDetail)
router.delete('/message/delete/:id',userCheck,adminNotCheck, adminController.messageDestroit)


/*Control Usuarios*/
router.get('/userList',userCheck, adminNotCheck, adminController.userList)
router.get('/userList/detail/:id',userCheck, adminNotCheck, adminController.userDetail)
router.put('/userList/detail/:id',userCheck, adminNotCheck, adminController.userUpdated)
router.delete('/userList/delete/:id',userCheck,adminNotCheck, adminController.userDestroit)

module.exports = router;
