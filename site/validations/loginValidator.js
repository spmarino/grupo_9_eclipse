const {check} = require('express-validator');


module.exports = [
   
    check('email')
    .isEmail()
    .withMessage('El mail no es válido'),

   

    check('password')
    .notEmpty()
    .withMessage('Debe ingresar su contraseña')
  
    
    
]