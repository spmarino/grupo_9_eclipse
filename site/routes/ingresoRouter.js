var express = require('express');
var router = express.Router();
const{processRegister, processLogin, home}= require('../controllers/usersController')

/*MIDDLEWARES*/
const loginValidator = require('../validations/loginValidator')
const registerValidator = require('../validations/registerValidator')
const upload = require('../middlewares/uploadImg');
const userNotCheck = require('../middlewares/userNotCheck');



/* GET home page. */
router.get('/',userNotCheck, home)
router.post('/register',upload.any(),registerValidator, processRegister)
router.post('/login',loginValidator, processLogin)



module.exports = router;
