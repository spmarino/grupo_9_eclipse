const {check} = require('express-validator');




module.exports = [
    check('name')
    .notEmpty()
    .withMessage('Debes ingresar un Nombre'),

    check('matter_id')   
    .notEmpty()
    .withMessage('Debes Seleccionar una opción'),

    check('mail') 
      .isEmail()
    .withMessage('Ingrese un mail válido'),

    check('tel')
    .notEmpty()
    .isLength({ min:8, max: 10 })
  .withMessage('Debe ingresar un número de teléfono válido'),

  check('message')
  .notEmpty()
  .isLength({ min:49, max: 255 })
.withMessage('Debe ingresar al menos 49 caracteres'),
   
    
]