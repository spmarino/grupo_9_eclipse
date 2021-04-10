const db = require('../database/models');
const { validationResult } = require('express-validator');



const pagesController = {
    'medios': function (req, res) {
        res.render('medios');

    },
    'costos': function (req, res) {
        res.render('costos');

    },
    'tiempos': function (req, res) {
        res.render('tiempos');

    },
    'preguntas': function (req, res) {
        res.render('preguntas');

    },
    'contacto': function (req, res) {
        res.render('contacto');

    },
    'message': function (req, res) {
    let errores = validationResult(req);


    if (!errores.isEmpty()) {
        return res.render('contacto', {
            erroresContacto: errores.mapped(),
            old:req.body
        })
    } else {
        const { name, matter_id, mail, tel, message } = req.body

                 db.Messages.create({
                    name: name,
                    matter_id,
                    mail,
                    tel,
                    message
                

                }).then(() => {
                    res.redirect('/pages/contacto')

                })

            .catch(error => res.send(error))
            }
  
},


}

module.exports = pagesController