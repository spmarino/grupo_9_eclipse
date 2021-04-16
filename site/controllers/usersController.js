
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const moment = require('moment');
const db = require('../database/models');






const usersController = {
    'home': function (req, res) {
        res.render('login')
    },
    'processRegister': function (req, res) {
        let errores = validationResult(req);


        if (!errores.isEmpty()) {
            return res.render('login', {
                erroresRegister: errores.mapped(),
                old: req.body
            })
        } else {
            const { name, lastName, email, password, date, sex_id } = req.body
            const passHash = bcrypt.hashSync(password, 12);

            db.Users.create({
                name: name.trim(),
                lastname: lastName.trim(),
                email: email.trim(),
                password: passHash,
                date_of_birth: date,
                avatar: req.files[0] ? req.files[0].filename : 'default.png',
                category_id: 1,
                sex_id

            })
                /*.then(() => res.redirect('/ingreso'))*/

                .then(user => {

                    req.session.user = {
                        id: user.id,
                        name: user.name,
                        lastname: user.lastname,
                        email: user.email,
                        date_of_birth: user.date_of_birth,
                        admin: user.admin,
                        avatar: user.avatar,

                    }


                    return res.redirect('/ingreso/users')


                })
                .catch(error => res.send(error));

        }
    },




    'processLogin': function (req, res) {
        let errores = validationResult(req);

        const { email, password, recordar } = req.body;

        if (!errores.isEmpty()) {
            return res.render('login', {
                erroresLogin: errores.mapped(),
                old: req.body,
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
                            lastname: user.lastname,
                            date_of_birth: user.date_of_birth,
                            avatar: user.avatar,
                            category_id: user.category_id,
                            sex_id: user.sex_id,
                        }
                        if (recordar != undefined) {
                            res.cookie('userConect', req.session.user, {
                                maxAge: 1000 * 60 * 6000
                            })
                        }

                        return res.redirect('/ingreso/users')
                    }
                    

                   /* res.render('login', {

                        erroresLogin: [
                            {
                                msg: 'Credenciales inválidas'
                            }
                        ],
                        old: req.body,
                    })*/
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
        db.Users.findByPk(req.session.user.id)
        .then(user => {
            res.render('Users/usersIndex', {
                user
            })
        })
        .catch(error => res.send(error))
    },

    'perfil': function (req, res) {
            db.Users.findByPk(req.session.user.id)
            .then(user => {
                res.render('Users/perfilDetail', {
                    user
                })
            })
            .catch(error => res.send(error))
    },

    'perfilEdit': function (req, res) {

        db.Users.findByPk(req.session.user.id)
            .then(user => {

                let date_of_birth = moment(user.date_of_birth).format('YYYY-MM-DD')
                res.render('Users/perfilEdit', {
                    user,
                    date_of_birth
                })
            })
            .catch(error => res.send(error))
    },

    'perfilUpdate': function (req, res) {
        const { name, lastname, password, date, sex_id } = req.body

        let errores = validationResult(req);


        if (!errores.isEmpty()) {
            db.Users.findByPk(req.session.user.id)
                .then(user => {
                    let date_of_birth = moment(user.date_of_birth).format('YYYY-MM-DD')

                    res.render('Users/perfilEdit', {
                        user,
                        date_of_birth,
                        erroresEdit: errores.mapped(),
                        old:req.body,
                    })
                })
                .catch(error => res.send(error));
        } else {

            db.Users.update(
                {
                    name: name.trim(),
                    lastname: lastname.trim(),
                    password: password.length != 0 ? bcrypt.hashSync(password, 12) : undefined,
                    date_of_birth: date,
                    avatar: req.files[0] ? req.files[0].filename : undefined,
                    category_id: 1,
                    sex_id

                },
                {
                    where: {
                        id: req.session.user.id
                    }
                })
                .then(() => {
                    return res.redirect('/ingreso/perfil')
                })
                .catch(error => res.send(error))
        }
    }

};
module.exports = usersController