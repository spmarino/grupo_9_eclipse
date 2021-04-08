   db.Products.findByPk(id)
            .then(() => {
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


                )
            })

            .then(() => {
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

                )
            })
                .then(() => {
                db.Products.update({
                    title,
                    price,
                    discount,
                    description,
                    product_category_id,
                    free_shipping: free_shipping ? 1 : 0,
                    cover_page: cover_page ? 1 : 0,
                    image: req.files[0] ? req.files[0].filename : undefined
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