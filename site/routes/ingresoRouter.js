var express = require('express');
var router = express.Router();
const{processRegister, processLogin, home, logout, user}= require('../controllers/usersController')

/*MIDDLEWARES*/
const loginValidator = require('../validations/loginValidator')
const registerValidator = require('../validations/registerValidator')
const upload = require('../middlewares/uploadImg');
const userNotCheck = require('../middlewares/userNotCheck');
const userCheck = require('../middlewares/userCheck');




/* GET home page. */
router.get('/',userNotCheck, home)
router.post('/register',upload.any(),registerValidator, processRegister)
router.post('/login',loginValidator, processLogin)
router.get('/logout',logout)
router.get('/users',userCheck, user)



module.exports = router;
