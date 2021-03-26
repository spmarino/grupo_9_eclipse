
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const db = require('../database/models');





const usersController = {
    'home': function (req, res) {
        res.render('login')
    },
    'processRegister': function (req, res) {
        let errores = validationResult(req);


        if (!errores.isEmpty()) {
            return res.render('login', {
                errores: errores.errors
            })
        } else {
            const { name, lastName, email, password, date } = req.body
            const passHash = bcrypt.hashSync(password, 12);

            db.Users.create({
                name: name.trim(),
                lastname: lastName.trim(),
                email: email.trim(),
                password: passHash,
                date_of_birth: date,
                avatar: req.files[0] ? req.files[0].filename : 'default.png',
                category_id: 1,

            })
                .then(() => res.redirect('/ingreso'))
                .catch(error => res.send(error));



        }
    },




    'processLogin': function (req, res) {
        let errores = validationResult(req);

        const { email, password, recordar } = req.body;

        if (!errores.isEmpty()) {
            return res.render('login', {
                errores: errores.errors
            })

        } else {

            db.Users.findOne({
                where: {
                    email
                }
            })
                .then(user => {
                    if (user && bcrypt.compareSync(password.trim(), user.password)) {
                        req.session.user = {
                            id: user.id,
                            name: user.name,
                            email: user.email,
                            admin: user.admin,
                            avatar: user.avatar,
                            category_id: user.category_id,
                        }
                        if (recordar != undefined) {
                            res.cookie('userConect', req.session.user, {
                                maxAge: 1000 * 60 * 6000
                            })
                        }

                        return res.redirect('/ingreso/users')
                    }

                    res.render('login', {
                        errores: [
                            {
                                msg: 'Credenciales inválidas'
                            }
                        ]
                    })
                })

        }
    },


    'logout': function (req, res) {

        req.session.destroy();
        if (req.cookies.userConect) {
            res.cookie('userConect', '', { maxAge: -1 })
        }
        res.redirect('/');


    },

    'user': function (req, res) {
        res.render('Users/usersIndex')
    },
};
module.exports = usersController