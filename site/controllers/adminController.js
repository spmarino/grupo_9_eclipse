
const db = require('../database/models');
const { Op } = require('sequelize');
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const adminController = {
    'productLoad': function (req, res) {
        db.ProductsCategories.findAll()
            .then(categories => {
                return res.render('Admin/productLoad', {
                    categories
                })
            })
            .catch(error => res.send(error))


    },
    'adminIndex': function (req, res) {
        res.render('Admin/adminIndex')
    },
    'productList': function (req, res) {
        db.Products.findAll()
            .then(products => {
                return res.render('Admin/productList', {
                    products,
                    toThousand,
                })


            })
            .catch(error => res.send(error))


    },
    'productEdit': function (req, res) {
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
                        res.render('Admin/productEdit', {
                            product,
                            feature,
                            tastingNote,
                            toThousand
                        })
                    })
                    .catch(error => res.send(error))

            }).catch(error => res.send(error))




    },
    'productDetailAdmin': function (req, res) {
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
                        res.render('Admin/productDetailAdmin', {
                            product,
                            feature,
                            tastingNote,
                            toThousand
                        })
                    })
                    .catch(error => res.send(error))

            }).catch(error => res.send(error))






    },
    'adminSearch': function (req, res) {
        const { search } = req.query
        db.Products.findAll({
            where: {
                title: {
                    [Op.like]: `%${search}%`
                }

            }
        })
            .then(products => {
                return res.render('Admin/results', {
                    products,
                    search,
                    toThousand

                })
            })

            .catch(error => res.send(error))

    },
    'adminFilter': function (req, res) {
        res.render('Admin/adminFilter')
    },
    'productNew': function (req, res) {
        const { title, price, discount, product_category_id, free_shipping, cover_page, description, varietal, vintage, type_of_barrel, time_in_bottle, harvest, finca, terroir, smell, taste, color } = req.body

        const feature = db.Features.create({
            varietal,
            vintage,
            type_of_barrel,
            time_in_bottle,
            harvest,
            finca,
            terroir
        });

        const tastingNote = db.TastingNotes.create({
            color,
            smell,
            taste
        });


        Promise.all([feature, tastingNote])
            .then(([feature, tastingNote]) => {
                db.Products.create({
                    features_id: feature.id,
                    tasting_notes_id: tastingNote.id,
                    title,
                    price,
                    discount,
                    description,
                    product_category_id,
                    free_shipping,
                    cover_page,
                    image: req.files[0] ? req.files[0].filename : 'producto1.png',

                }).then(producto => {
                    res.redirect('/admin/products')

                })

                    .catch(error => res.send(error))

            })


            .catch(error => res.send(error))


    },

    'productUpdate': function (req, res) {
        const { id } = req.params;
        const { title, price, discount, product_category_id, free_shipping, cover_page, description, varietal, vintage, type_of_barrel, time_in_bottle, harvest, finca, terroir, smell, taste, color } = req.body

        db.Products.findByPk(id)
            .then(product => {
                db.Features.update({
                    varietal,
                    vintage,
                    type_of_barrel,
                    time_in_bottle,
                    harvest,
                    finca,
                    terroir,
                },
                    {
                        where: {
                            id: product.features_id
                        }
                    }


                );
                db.TastingNotes.update({
                    smell,
                    taste,
                    color
                },
                    {
                        where: {
                            id: product.tasting_notes_id
                        }
                    }

                );

                db.Products.update({
                    title,
                    price,
                    discount,
                    description,
                    product_category_id,
                    free_shipping: free_shipping ? 1 : 0,
                    cover_page: cover_page ? 1 : 0,
                    image: req.files[0] ? req.files[0].filename : 'producto1.png'
                },
                    {
                        where: {
                            id: id
                        }
                    })




            }).then(product => {
                console.log(product)
                return res.redirect('/Admin/products/' + id)
            })
            .catch(error => res.send(error))
    },
    'productDestroit': function (req, res) {
        const id = req.params.id
        db.Products.findByPk(id)
            .then(product => {
                db.Products.destroy({

                    where: {
                        id: id
                    }

                })

                db.Features.destroy({
                    where: {
                        id: product.features_id
                    }
                })
                db.TastingNotes.destroy({
                    where: {
                        id: product.tasting_notes_id
                    }
                })



            }).then(product => {
                console.log(product)
                return res.redirect('/admin/products')
            })
            .catch(error => res.send(error))

    }
}


module.exports = adminController;