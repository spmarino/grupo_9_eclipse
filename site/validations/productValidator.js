const {check,validationResult,body} = require('express-validator')


module.exports = [
    //Nombre
    check('title')
    .notEmpty()
    .withMessage('Debes ingresar nombre del producto'),

    //Precio
    check('price')
    .notEmpty()
    .isFloat({
        gt: -1
    })
    .withMessage('Debe ingresar un precio mayor a 0'),

    //Descuento
    check('discount')
    .notEmpty()
    .isInt({
        min:0
    })
    .withMessage('Si tiene descuento debe ser mayor a cero, si no lo tiene debe ser cero'),



    //Descripcion
    check('description')
    .notEmpty()
    .isLength({
        min: 30
    })
    .withMessage('La descripción debe tener más de 30 caracteres'),

    //Tipo de vino
    check('product_category_id')
    .notEmpty()
    .withMessage('Debe ingresar el tipo de vino'),

    //Consultar a Ser sobre la imagen//
    body('imagen')
    .custom((value, {req})=>{
        if(!req.files[0]){
            return false
        }else{
            return true
        }
    })
    .withMessage('Debes subir una imagen'),

    body('image')
    .custom((value,{req}) =>{
        if(req.fileValidationError){
            return false
        }else{
            return true
        }
    })
    .withMessage('Solo imagen con formato png, jpg, jpeg, gif'),
    

]