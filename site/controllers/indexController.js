const {products} = require('../data/products');
const db = require('../database/models');
const {Op} = require('sequelize');
const toThousand = (n) =>n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");

const indexController = {
    'home': function (req, res) {
       /* db.Products.findAll()
        .then(products => {
            return res.render('index', {
                products,
                toThousand,
            })


        })
        .catch(error => res.send(error))*/






        let vinosTintos = db.Products.findAll({
            where :{
                product_category_id: 1
                               
            }
        });
        let vinosBlancos = db.Products.findAll({
            where :{
                product_category_id: 2
                               
            }
        });
        let masVendidos = db.Products.findAll({
            where :{
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


/*
        const vinosTintos = products.filter((product) => {
            return product.tipo === 'Tinto'
        });

        const vinosBlancos = products.filter((product) => {
            return product.tipo === 'Blanco'
        });

        const masVendidos = products.filter((product) => {
            return product.promo == "cover"
        });
      




        res.render('index', {
            masVendidos,
            vinosBlancos,
            vinosTintos,
            toThousand,
        });

*/
    },
}

module.exports = indexController