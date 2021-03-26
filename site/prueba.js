const id = req.params.id
        db.Products.findByPk(id)
            .then(product => {
                db.Features.update({
                    where: {
                        id: product.features_id
                    }
                });
                db.TastingNotes.product({
                    where: {
                        id: product.tasting_notes_id
                    }
                }

                );


                
                /*  db.Products.update({
                      title,
                      price,
                      discount,
                      description,
                      product_category_id,
                      image: req.files[0] ? req.files[0].filename : 'default.png'
                  },
                      {
                          where: {
                              id: id
                          }
                      });
          
                      db.Features.update({
                          varietal,
                          vintage,
                          type_of_barrel,
                          time_in_bottle,
                          harvest,
                          finca,
                          terroir
                      },
                      {
                          where: {
                              id: product.features_id
                          }
                      }).then(product => {
                              console.log(product)
                              return res.redirect('/Admin/products/' + id)
                          })
                          .catch(error => res.send(error))
                      
          */






                /*const { title, description, tipo, promo, color, aroma, sabor, varietal, añada, barrica, tiempo, tipoCosecha, terroir, price, descuento, envio, imagen, finca } = req.body;
         
                const { id } = req.params;
         
                const updatedProduct = {
                    id: +id,
                    title,
                    description,
                    tipo,
                    promo,
                    color,
                    aroma,
                    sabor,
                    varietal,
                    añada: +añada,
                    barrica,
                    tiempo: +tiempo,
                    tipoCosecha,
                    terroir,
                    price: +price,
                    descuento: +descuento,
                    envio: +envio,
                    imagen: req.files[0] ? req.files[0].filename : 'producto1.png',
                    finca,
                }
                products.forEach((product, index) => {
                    if (product.id === +id) {
                        products.splice(index, 1, updatedProduct);
                    }
                });
                setProducts(products);
         
                res.redirect(`/admin/products/${id}`)*/