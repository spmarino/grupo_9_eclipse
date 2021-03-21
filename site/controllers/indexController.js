const {products} = require('../data/products');

const indexController = {
    'home': function (req, res) {
        const vinosTintos = products.filter((product) => {
            return product.tipo === 'Tinto'
        });

        const vinosBlancos = products.filter((product) => {
            return product.tipo === 'Blanco'
        });

        const masVendidos = products.filter((product) => {
            return product.promo == "cover"
        });
        const toThousand = (n) =>n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");




        res.render('index', {
            masVendidos,
            vinosBlancos,
            vinosTintos,
            toThousand,
        });


    },
}

module.exports = indexController