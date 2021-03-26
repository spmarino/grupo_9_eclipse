
const db = require('../database/models');

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const indexController = {
    'home': function (req, res) {


        let vinosTintos = db.Products.findAll({
            where: {
                product_category_id: 1

            }
        });
        let vinosBlancos = db.Products.findAll({
            where: {
                product_category_id: 2

            }
        });
        let masVendidos = db.Products.findAll({
            where: {
                cover_page: 1

            }
        });


        Promise.all([vinosTintos, vinosBlancos, masVendidos])
            .then(([vinosTintos, vinosBlancos, masVendidos]) => {
                res.render('index', {
                    vinosTintos,
                    vinosBlancos,
                    masVendidos,
                    toThousand
                })
            })
            .catch(error => res.send(error))


    },
}

module.exports = indexController