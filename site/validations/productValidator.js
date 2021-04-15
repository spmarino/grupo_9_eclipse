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

    //Varietal
    check('varietal')
    .notEmpty()
    .withMessage('Debe ingresar el varietal'),

    //Añada
    check('vintage')
    .notEmpty()
    .isFloat({
        gt: -1
    })
    .withMessage('Debe ingresar el año de cosecha'),

    //Tipo de barrica
    check('type_of_barrel')
    .notEmpty()
    .withMessage('Debe ingresar el tipo de barrica'),

    //Tiempo en botella
    check('vintage')
    .notEmpty()
    .isFloat({
        gt: -1
    })
    .withMessage('Debe ingresar el tiempo en botella, mayor a cero'),

    //Tipo de cosecha
    check('harvest')
    .notEmpty()
    .withMessage('Debe ingresar el tipo de cosecha'),

    //Terroir
    check('terroir')
    .notEmpty()
    .withMessage('Debe ingresar el terroir'),

    //Finca
    check('finca')
    .notEmpty()
    .withMessage('Debe ingresar la finca'),

    //Color
    check('color')
    .notEmpty()
    .withMessage('Debe ingresar el color'),

    //Aroma
    check('smell')
    .notEmpty()
    .withMessage('Debe ingresar el aroma'),

    //Sabor
    check('taste')
    .notEmpty()
    .withMessage('Debe ingresar el sabor'),

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