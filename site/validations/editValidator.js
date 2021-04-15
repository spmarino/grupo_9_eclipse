const {check, body} = require('express-validator');
/*const { readUsers} = require('../data/user');*/
const { differenceInYears } = require('date-fns');
const db = require('../database/models');


module.exports = [
    check('name')
    .notEmpty()
    .withMessage('Debes ingresar un Nombre'),

    check('lastname')
    .notEmpty()
    .withMessage('Debe ingresar un Apellido'),

    check('email')
      .isEmail()
    .withMessage('Ingrese un mail válido'),

    check('sex_id')
    .notEmpty()
  .withMessage('Debe seleccionar una opción'),

    

    check('password')
    .notEmpty()
    .withMessage('Debe ingresar su contraseña')
    .isLength({
        min:4, 
        max:12
    })
    .withMessage('La contraseña debe contener un mínimo de 4 y máximo de 12 caractéres'),
  
    body('passwordCheck').custom((value,{req})=>{
        if(value !== req.body.password){
            return false
        }else{
         return true   
        }
    }).withMessage('Las contraseñas no coinciden'),



check('date')
.custom((date) =>{
    const years = differenceInYears(new Date(), new Date(date));
    return years >= 18;
})
.withMessage('Debe ser mayor de 18 años'),
    
    
]