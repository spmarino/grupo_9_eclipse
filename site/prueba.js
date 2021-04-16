const { name, lastName, email, password, date, sex_id } = req.body
const passHash = bcrypt.hashSync(password, 12);
let errores = validationResult(req);
const id = req.params.id

if (!errores.isEmpty()) {
    return res.render('Users/perfilEdit', {
        erroresEdit: errores.mapped(),
        old: req.body,
    })

} else {

    db.Users.findByPk(id)
        .then((user) => {
            db.Users.update({
                name: name,
                lastname: lastName,
                email: email,
                password: passHash,
                date_of_birth: date,
                avatar: req.files[0] ? req.files[0].filename : 'default.png',
                category_id: 1,
                sex_id

            },
                {
                    where: {
                        id: user.id
                    }
                })

                .then(() => {

                    req.session.destroy();
                    if (req.cookies.userConect) {
                        res.cookie('userConect', '', { maxAge: -1 })
                    }
                    res.redirect('/');

                })
                .catch(error => res.send(error))

        })
}