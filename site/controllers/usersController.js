const { readUsers, writeUsers } = require('../data/user');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator')





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
            let lastId = 0;
            readUsers.forEach((user) => {
                if (user.id > lastId) {
                    lastId = user.id
                }
            });

            const id = lastId + 1;
            const newUser = {
                id,
                name,
                lastName,
                email,
                date,
                password: passHash,
                admin: false,
                avatar: req.files[0] ? req.files[0].filename : 'generico.png',
            }



            readUsers.push(newUser);
            writeUsers(readUsers);
            res.redirect('/ingreso')
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
            let result = readUsers.find(user => user.email === email);

            if (result) {
                if (bcrypt.compareSync(password.trim(), result.password)) {

                    req.session.user = {
                        id: result.id,
                        name: result.name,
                        email: result.email,
                        admin: result.admin,
                        avatar: result.avatar,
                    }
                    if (recordar != undefined){
                        res.cookie('userConect', req.session.user, {
                            maxAge: 1000 * 60 * 6000
                        })
                    }

                   return res.redirect('/ingreso/users')
                }

            }
            res.render('login', {
                errores: [
                    {
                        msg: 'Credenciales inválidas'
                    }
                ]
            })
        }
    },


    'logout': function (req, res) {
        /*delete.req.session.user*/
        req.session.destroy();
        if (req.cookies.userConect) {
            res.cookie('userConect','', { maxAge: -1 })
        }
        res.redirect('/');


    },

    'user': function (req, res) {
        res.render('Users/usersIndex')
    },
};
module.exports = usersController