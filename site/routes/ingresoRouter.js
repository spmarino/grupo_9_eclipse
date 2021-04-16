var express = require('express');
var router = express.Router();
const {processRegister, processLogin, home, logout, user, perfil, perfilUpdate, perfilEdit} = require('../controllers/usersController')

/*MIDDLEWARES*/
const loginValidator = require('../validations/loginValidator')
const registerValidator = require('../validations/registerValidator')
const upload = require('../middlewares/uploadImg');
const userNotCheck = require('../middlewares/userNotCheck');
const userCheck = require('../middlewares/userCheck');
const adminCheck = require('../middlewares/adminCheck');
const editValidator = require('../validations/editValidator')



/* GET home page. */
router.get('/',userNotCheck, home)
router.post('/register',upload.any(),registerValidator, processRegister)
router.post('/login',loginValidator, processLogin)
router.delete('/logout',logout)
router.get('/users',userCheck,adminCheck, user)
router.get('/perfil/edit',userCheck, perfilEdit)
router.put('/perfil/edit/:id',userCheck,upload.any(),editValidator, perfilUpdate)
router.get('/perfil',userCheck,perfil)





module.exports = router;
