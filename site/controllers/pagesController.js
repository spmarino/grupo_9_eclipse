const db = require('../database/models');
const { Op } = require('sequelize');


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

  
},


}

module.exports = pagesController