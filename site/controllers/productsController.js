const {products} = require('../data/products');
const toThousand = (n) =>n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");
const db = require('../database/models')

const productsController = {
    'detail': function (req, res) {
/*const id = req.params.id
const product = products.find(product =>{
    return product.id === +id
})

        res.render('detail', {
            product,
            toThousand,
        });*/



        const id = req.params.id
        db.Products.findByPk(id)
            .then(product => {
                let feature = db.Features.findOne({
                    where: {
                        id: product.features_id
                    }
                });
                let tastingNote = db.TastingNotes.findOne({
                    where: {
                        id: product.tasting_notes_id
                    }
                }

                );


                Promise.all([feature, tastingNote])
                    .then(([feature, tastingNote]) => {
                        res.render('detail', {
                            product,
                            feature,
                            tastingNote,
                            toThousand
                        })
                    })
                    .catch(error => res.send(error))

            }).catch(error => res.send(error))
   
}
};
module.exports = productsController